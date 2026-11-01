# Anti-cheat & exports — stryke_pvp

## Anti-cheat (résumé)

Config avancée : `Config.AntiCheat` dans `shared/config.lua`.

- Au `stryke_pvp:player:ready`, le serveur émet un **token de session** au client.
- Les events protégés exigent ce token en **premier argument**.
- Token invalide / rate-limit → log webhook `anticheat` (+ FiveManage si activé) puis **kick** (selon config).

```lua
Config.AntiCheat = {
    Enabled = true,
    KickOnFlag = true,
    KickReason = 'Anti-cheat: événement invalide',
    MaxFlagsBeforeKick = 1,
    RateLimitPerEvent = 20,
    RateLimitWindowMs = 5000,
}
```

## Signaler un joueur (serveur uniquement)

```lua
TriggerEvent('stryke_pvp:anticheat:report', targetSrc, 'Reason here', {
    event = 'my_resource:something',
    extra = true,
})
```

Ne pas exposer ça en `TriggerServerEvent` client : handler local serveur uniquement.

```lua
exports.stryke_pvp:FlagPlayer(src, 'Suspicious money', { event = 'foo' })
exports.stryke_pvp:KickPlayer(src, 'Cheating')
```

## Events sécurisés

Enregistrer (serveur) :

```lua
exports.stryke_pvp:RegisterSecureEvent('my_resource:giveItem', function(itemId, amount)
    local src = source
    -- token déjà validé
end)
```

Déclencher (client) :

```lua
exports.stryke_pvp:TriggerSecure('my_resource:giveItem', itemId, amount)
```

### Events déjà sécurisés (1ʳᵉ vague)

À appeler via `TriggerSecure` :

- `stryke_pvp:shop:buyWeapon`
- `stryke_pvp:shop:buyVehicle`
- `stryke_pvp:shop:refillWeapon`
- `stryke_pvp:vip:buy`
- `stryke_pvp:inventory:setSlot`
- `stryke_pvp:inventory:swapSlots`
- `stryke_pvp:inventory:selectSlot`
- `stryke_pvp:combat:playerKilled`
- Admin : `kick`, `message`, `teleport`, `giveMoney`, `giveCoins`, `giveWeapon`, `freeze`, `heal`, `revive`, `kothRotate`, `eventStart`, `eventClear`, `lootRespawn`, `lootClear`, `gamesEndMatch`, `gamesForfeit`, `queuesPause`

## Exports serveur

| Export | Signature | Description |
|--------|-----------|-------------|
| `Notify` | `(src, type, message)` | Notif NUI (`success` / `error` / `info`) |
| `NotifyAll` | `(type, message)` | Notif tous les joueurs |
| `GetPlayer` | `(src)` | Données joueur |
| `IsAdmin` | `(src)` | ACE admin |
| `GetKD` | `(src)` | Ratio K/D |
| `SendWebhook` | `(channel, title, description, fields?, color?)` | Embed Discord |
| `SendWebhookEmbed` | `(channel, embed, username?)` | Embed libre |
| `SendWebhookRaw` | `(channel, payload)` | Payload brut |
| `FlagPlayer` | `(src, reason, data?)` | Flag anti-cheat |
| `KickPlayer` | `(src, reason?)` | Kick |
| `RegisterSecureEvent` | `(name, handler)` | Event net protégé |
| `IssueAntiCheatToken` | `(src)` | Réémettre le token |

```lua
exports.stryke_pvp:Notify(src, 'success', 'Bienvenue !')
exports.stryke_pvp:NotifyAll('info', 'Event dans 5 minutes')

local p = exports.stryke_pvp:GetPlayer(src)
if exports.stryke_pvp:IsAdmin(src) then
    -- …
end
```

## Exports client

| Export | Signature | Description |
|--------|-----------|-------------|
| `Notify` | `(type, message)` | Notif NUI locale |
| `TriggerSecure` | `(eventName, ...)` | `TriggerServerEvent` + token |
| `GetAntiCheatToken` | `()` | Token session (debug) |

```lua
exports.stryke_pvp:Notify('error', 'Action refusée')
exports.stryke_pvp:TriggerSecure('stryke_pvp:shop:buyWeapon', 'weapon_pistol')
```

## Modules internes

| Fichier | Rôle |
|---------|------|
| `server/webhooks.lua` | Envoi Discord / FiveManage |
| `server/discord_webhooks.lua` | Killfeed + leaderboard |
| `server/anticheat.lua` | Tokens, secure events, flag/kick |
| `client/anticheat.lua` | Token + `TriggerSecure` |
| `server/api.lua` / `client/api.lua` | Exports publics |
