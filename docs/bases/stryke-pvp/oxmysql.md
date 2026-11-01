# oxmysql

![Icône dépendances](/img/icon-deps.png)

Driver MySQL pour FiveM. **Obligatoire** avant `stryke_pvp`.

## Emplacement

`resources/[system]/oxmysql/`

## Démarrage

```ini
ensure oxmysql
```

Doit apparaître **avant** `ensure [script]` / `stryke_pvp`.

## Configuration

Dans `server.cfg` :

```ini
set mysql_connection_string "mysql://USER:PASSWORD@127.0.0.1/pvp_server?charset=utf8mb4"
```

## Vérification

Console serveur : connexion réussie, pas d’erreur `Access denied` / `Unknown database`.

## Voir aussi

[Installation](./installation) · [server.cfg](./server-cfg)
