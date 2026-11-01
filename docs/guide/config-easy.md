# Config facile (débutant)

Les bases Nexora séparent les **réglages jour 1** des options avancées.

## Principe

| Fichier | Pour qui | Contenu |
|---------|----------|---------|
| `shared/config.easy.lua` | Débutant | Discord, webhooks, argent, gains, VIP, carte de connexion |
| `shared/config.lua` | Avancé | Zones, spawns, shops, gunfeel, anticheat détaillé… |

Les clés restent `Config.*` : le code client/serveur ne change pas.  
`config.easy.lua` est chargé **avant** `config.lua` dans le `fxmanifest`.

## Par où commencer

1. Ouvre `shared/config.easy.lua`.
2. Remplis Discord (bot + webhooks) avec **tes** URLs — ne committe pas de secrets sur un dépôt public.
3. Ajuste `StartingMoney`, `KillReward`, `AfkReward`, labels VIP / StryCore.
4. Configure `Config.Connect` (nom serveur, invite Discord, allowlist, queue).
5. Laisse `config.lua` tant que tu n’as pas besoin de déplacer des zones ou des prix boutique.

## Exemple (placeholders)

```lua
Config.Locale = 'fr'
Config.StartingMoney = 5000
Config.KillReward = 150

Config.Discord = {
    BotToken = '',              -- portal Discord → Bot
    KillfeedWebhook = '',       -- salon joueurs
    LeaderboardWebhook = '',
}

Config.Webhooks = {
    anticheat = '',
    admin = '',
    economy = '',
    events = '',
    connect = '',
}
```

## Doc produit

Pour stryke_pvp : [Configuration](/bases/stryke-pvp/configuration).
