# Installation — stryke_pvp

## 1. Fichiers

Place la resource dans ton serveur, par exemple :

```
resources/[script]/stryke_pvp/
```

## 2. server.cfg

```ini
ensure oxmysql
ensure stryke_pvp

# Optionnel — secrets via convars (jamais dans un repo public)
setr stryke_discord_bot_token "…"
setr stryke_proxycheck_key "…"
setr stryke_gamerank_token "…"
```

## 3. Base de données

Assure-toi qu’oxmysql pointe vers ta BDD. Au premier lancement, les tables joueurs / inventaire sont créées ou migrées par la resource (vérifie les logs serveur).

## 4. Permissions admin

```ini
add_ace group.admin stryke_pvp.admin allow
add_principal identifier.license:XXXXXXXX group.admin
```

La permission ACE se configure aussi via `Config.Admin.Ace` dans `shared/config.lua` (avancé).

## 5. Premier boot

1. Configure [`config.easy.lua`](./configuration) (Discord + gains).
2. `ensure stryke_pvp` ou redémarrage serveur.
3. Connecte-toi, vérifie spawn / menu F1 / pas d’erreur F8.

## Dépannage rapide

| Symptôme | Piste |
|----------|--------|
| Resource ne start pas | Manque `oxmysql` ou erreur SQL dans la console |
| Pas d’admin | ACE `stryke_pvp.admin` non accordée |
| Webhooks silencieux | URLs vides ou invalides dans `config.easy.lua` |
| Queue / VPN | Convars Discord / proxycheck + `Config.Connect` |
