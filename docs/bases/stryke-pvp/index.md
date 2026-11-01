# stryke_pvp

Base **freeroam PvP** : zones safe / AFK / PvP / loot, KOTH, events aléatoires, inventaire, VIP, battle pass, mini-jeux, menu F1, connexion (queue / allowlist).

## Pour qui

- Serveurs PvP ranked / freeroam
- Staff qui configure Discord, économie et zones
- Développeurs qui branchent d’autres resources via **exports** et events sécurisés

## Parcours recommandé

1. [Installation](./installation)
2. [Configuration](./configuration) (`config.easy.lua` d’abord)
3. [Discord & webhooks](./discord-webhooks)
4. [Anti-cheat & exports](./anticheat-exports)
5. [Zones & events](./zones-events)

## Dépendances

- `oxmysql`
- Resource démarrée **avant** les scripts qui appellent les exports `stryke_pvp`

## Structure (aperçu)

```
stryke_pvp/
  shared/config.easy.lua   ← débutant
  shared/config.lua        ← avancé
  client/ · server/ · html/
```
