# Installation serveur

Guide rapide pour faire tourner une base **Project Nexora** sur un serveur FiveM (txAdmin / artifact CFX).

## Prérequis

- Serveur FiveM à jour (artifact récent)
- [oxmysql](https://github.com/overextended/oxmysql) (MySQL)
- Accès `server.cfg` + base MySQL

## Étapes générales

1. Place la resource dans `resources/[script]/` (ou ton dossier habituel).
2. Ajoute dans `server.cfg` :

```cfg
ensure oxmysql
ensure stryke_pvp
```

3. Configure la connexion MySQL (convar oxmysql / connection string).
4. Pour une base PvP, ouvre **`shared/config.easy.lua`** en premier — Discord, gains, VIP, connexion.  
   Voir [Config facile](/guide/config-easy).
5. Redémarre la resource ou le serveur, puis vérifie la console (pas d’erreur au start).

## Convars utiles (exemple)

```cfg
# Bot Discord (allowlist / rôles) — ne mets jamais le token dans un fichier public
setr stryke_discord_bot_token "TON_TOKEN"
# Proxycheck (anti-VPN à la connexion)
setr stryke_proxycheck_key "TA_CLE"
```

Les convars exactes sont décrites dans la doc de chaque base.

## Suite

- [Config facile (débutant)](/guide/config-easy)
- [Installation stryke_pvp](/bases/stryke-pvp/installation)
