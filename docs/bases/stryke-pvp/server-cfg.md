# server.cfg — base STRYKE PvP

Fichier : racine de la base (`FiveMBasicServerCFXDefault_….base/server.cfg`).

::: warning
Ne publie jamais licence CFX, mots de passe MySQL, tokens Discord / proxycheck / GameRank.
:::

## Identité serveur (exemples)

```ini
sv_hostname "STRYKE PvP FR"
sets sv_projectName "PvP Ranked • Redzone • KOTH"
sets locale "fr-FR"
sets Base "Project Nexora Base PvP"
sets Developpeur "Project Nexora"
load_server_icon myLogo.png
```

Bannières liste serveur : `sets banner_detail` / `banner_connecting` (URLs HTTPS).

## Réseau & build

```ini
sv_enforceGameBuild 3751
sv_maxclients 48
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

## Chat

```ini
set resources_useSystemChat true
set chat_showJoins 0
set chat_showQuits 0
```

## MySQL & STRYKE

```ini
set mysql_connection_string "mysql://USER:PASSWORD@HOST/DB?charset=utf8mb4"
# set stryke_discord_bot_token "…"
set stryke_proxycheck_key "…"
set stryke_gamerank_token "…"
```

## ensure (ordre type)

```ini
ensure chat
ensure spawnmanager
ensure bob74_ipl
ensure oxmysql
ensure [script]
ensure stryke_pvp
ensure rpemotes-reborn
ensure [assets]
```

| Ligne | Effet |
|-------|--------|
| `ensure [script]` | Toutes les resources du dossier `[script]/` |
| `ensure [assets]` | Toutes les resources du dossier `[assets]/` |
| `ensure stryke_pvp` | Redondant si déjà dans `[script]`, utile pour forcer l’ordre |

## ACE admin

```ini
add_ace group.admin command allow
add_ace group.admin command.quit deny
add_ace group.admin command.stryke_givecoins allow
add_ace group.admin stryke_pvp.admin allow
add_ace group.admin stryke.connect.bypass allow
add_ace group.admin command.stryke_allowlist allow
add_ace group.admin command.stryke_queue allow
```

Lie ton licence Rockstar :

```ini
add_principal identifier.license:TON_LICENSE group.admin
```

## Voir aussi

- [Installation complète](./installation)
- [oxmysql](./oxmysql)
