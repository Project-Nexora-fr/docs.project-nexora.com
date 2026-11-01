# Discord & webhooks — stryke_pvp

## Deux familles de canaux

| Famille | Config | Usage |
|---------|--------|--------|
| Joueurs | `Config.Discord` | Killfeed, classement auto, avatars NUI |
| Staff | `Config.Webhooks` | Anticheat, admin, économie, events, refus connect |

Réglages dans **`shared/config.easy.lua`**.

## Config.Discord (joueurs)

```lua
Config.Discord = {
    BotToken = '',                 -- avatars menu / HUD
    KillfeedWebhook = '',          -- salon kills
    LeaderboardWebhook = '',       -- salon classement
    LeaderboardMessageId = '',     -- message édité (créé au 1er refresh si vide)
    LeaderboardIntervalMs = 300000,
    LeaderboardTop = 10,
    WeaponImageBaseUrl = '',
}
```

## Config.Webhooks (staff)

| Canal | Usage |
|-------|--------|
| `anticheat` | Flags / kicks |
| `admin` | Kick, give money/coins/armes, TP, freeze, heal, events, loot, matchs… |
| `economy` | Achats armes / véhicules / VIP + recharge |
| `events` | Démarrage / fin d’events + coffres |
| `connect` | Refus VPN/proxy (vide = désactivé) |

Chaîne vide = canal désactivé.

## FiveManage

Miroir optionnel des canaux staff :

```lua
Config.FiveManage = {
    Enabled = false,
    ApiKey = '',
    Dataset = 'stryke_pvp',
    MirrorChannels = {
        anticheat = true,
        admin = true,
        economy = true,
        events = true,
    },
}
```

Quand `Enabled` et `ApiKey` sont renseignés, les canaux listés sont aussi envoyés vers l’API FiveManage.

## Rich Presence

`Config.RichPresence` : App ID Discord Developer Portal, assets uploadés sur l’application, `ConnectUrl` type `https://cfx.re/join/xxxxxx`.

## Envoyer un webhook depuis une autre resource

```lua
exports.stryke_pvp:SendWebhook('events', 'Drop', 'Coffres spawn', {
    { name = 'Zone', value = 'Legion', inline = true },
}, 3447003)
```

Voir [Anti-cheat & exports](./anticheat-exports) pour la liste complète.
