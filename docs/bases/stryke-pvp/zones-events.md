# Zones & events — stryke_pvp

Réglages dans **`shared/config.lua`** (avancé).

## Types de zones

| Type | Comportement typique |
|------|----------------------|
| Safe | Pas de combat, shops / spawn, nametags optionnels |
| AFK | Gain passif (`Config.AfkReward` dans easy) |
| PvP | Combat libre, multiplicateur argent |
| Loot | Pickups armes, respawn configurable |

Les grandes zones PvP/loot n’affichent le mur marker que près du bord (perf client).

Clés utiles :

- `Config.Zones` — centres, rayons, types
- `Config.Spawns` — points de spawn / sélection
- `Config.ZoneMarkerHeight` — hauteur des cylindres
- `Config.SafeExitGraceMs` — godmode à la sortie de safe
- `Config.LootWeapons` / `LootPickupsPerZone` / `LootRespawnSec`

## King of the Hill

`Config.Koth` — points autour des zones PvP (pas le même centre), ticks de capture / XP battle pass.

## Events aléatoires

`Config.RandomEvents` — airdrops, zone temporaire, convoi, etc.

Staff admin (events sécurisés) :

- `stryke_pvp:admin:eventStart`
- `stryke_pvp:admin:eventClear`
- `stryke_pvp:admin:kothRotate`
- `stryke_pvp:admin:lootRespawn` / `lootClear`

## Primes (bounty)

`Config.Bounty` — min/max cash, durée, blip. Menu F1 côté joueur.

## Connexion & monde

- Carte de connexion / queue / allowlist → `Config.Connect` (**easy**)
- Heure / météo figées → `Config.WorldTime` / `WorldWeather` (**avancé**)
- Minimap → `Config.Map`

## Perf (rappel)

Ne mets pas de `Wait(0)` inutiles et évite de redessiner toute une zone PvP de 300 m chaque frame — la base est déjà optimisée ; évite de régresser en copiant des snippets non throttleés.
