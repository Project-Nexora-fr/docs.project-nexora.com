# Installation complète — base STRYKE PvP

![Icône installation](/img/icon-install.png)

![Schéma d’installation](/img/install-flow.png)

Guide bout-en-bout pour la base **FiveMBasicServerCFXDefault** (Project Nexora / STRYKE) : toutes les resources assurées dans `server.cfg`.

## Prérequis

- Artifact FiveM serveur récent
- MySQL 8+ (ou MariaDB) + [oxmysql](./oxmysql)
- Domaine / ports `30120` TCP+UDP ouverts
- Licence CFX (`sv_licenseKey`)

## Arborescence attendue

```
…/FiveMBasicServerCFXDefault_….base/
  server.cfg
  resources/
    [system]/oxmysql/
    [managers]/spawnmanager/
    bob74_ipl/
    [script]/
      stryke_pvp/
      stryke_loadingscreen/
      rpemotes-reborn/
    [assets]/
      stryke_vehicles/
      stryke_weapon_metas/
      stryke_ymap/
      weapon_ka_pn_diamant/
```

## Ordre de démarrage (recommandé)

```ini
ensure chat
ensure spawnmanager
ensure bob74_ipl
ensure oxmysql
ensure [script]          # loadingscreen, stryke_pvp, rpemotes…
ensure stryke_pvp        # explicite si besoin
ensure rpemotes-reborn
ensure [assets]          # véhicules, metas, ymap, armes custom
```

1. **chat** + **spawnmanager** — socle CFX  
2. **bob74_ipl** — IPLs intérieurs  
3. **oxmysql** — BDD avant toute resource SQL  
4. **[script]** — loadingscreen + `stryke_pvp` + emotes  
5. **[assets]** — stream véhicules / armes / maps  

Détail des convars et ACE : [server.cfg](./server-cfg).

## MySQL

1. Crée une base vide (ex. `pvp_server`).
2. Dans `server.cfg` (ne committe pas le mot de passe) :

```ini
set mysql_connection_string "mysql://USER:PASSWORD@127.0.0.1/pvp_server?charset=utf8mb4"
```

3. Démarre `oxmysql` puis `stryke_pvp` — les tables se créent / migrent au boot (vérifie la console).

## Convars STRYKE (secrets)

```ini
# setr stryke_discord_bot_token "…"   # allowlist Discord
setr stryke_proxycheck_key "…"       # anti-VPN connexion
setr stryke_gamerank_token "…"       # rewards votes
```

## Permissions admin

```ini
add_ace group.admin stryke_pvp.admin allow
add_ace group.admin stryke.connect.bypass allow
add_ace group.admin command.stryke_allowlist allow
add_ace group.admin command.stryke_queue allow
add_principal identifier.license:XXXXXXXX group.admin
```

## Config jour 1

Ouvre `resources/[script]/stryke_pvp/shared/config.easy.lua` :

- Discord / webhooks
- Argent, gains kill/AFK, VIP
- `Config.Connect` (nom, invite, queue)

→ [Configuration](./configuration) · guide [Config facile](/guide/config-easy)

## Checklist de validation

| Étape | OK si… |
|-------|--------|
| Console | Pas d’erreur fatale au start des resources |
| MySQL | oxmysql « connected », pas d’erreur SQL |
| Connexion | Carte Adaptive / file d’attente OK |
| Spawn | Joueur spawn, menu F1, HUD |
| Assets | Véhicules / armes custom visibles |
| Emotes | Menu rpemotes fonctionne |
| Loading | Écran de chargement STRYKE s’affiche |

## Dépannage

| Symptôme | Piste |
|----------|--------|
| `stryke_pvp` ne start pas | `oxmysql` manquant ou connection string invalide |
| Véhicules / armes absents | `ensure [assets]` oublié ou stream trop lourd |
| Pas d’admin | ACE `stryke_pvp.admin` |
| Loading screen absent | `stryke_loadingscreen` dans `[script]` |
| Intérieurs vides | `bob74_ipl` non démarré |

## Suite

- Fiches resources (sidebar **Dépendances & resources**)
- [Discord & webhooks](./discord-webhooks)
- [Anti-cheat & exports](./anticheat-exports)
