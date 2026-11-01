# spawnmanager & chat

Resources CFX de base, démarrées en premier.

## Emplacements

| Resource | Chemin typique |
|----------|----------------|
| `spawnmanager` | `resources/[managers]/spawnmanager/` |
| `chat` | resource système / default CFX (`ensure chat`) |

## Démarrage

```ini
ensure chat
ensure spawnmanager
```

## Chat — convars utiles

```ini
set resources_useSystemChat true
set chat_showJoins 0
set chat_showQuits 0
```

`stryke_pvp` apporte aussi un **chat theme** (`chat_theme` dans son `fxmanifest`) : le style STRYKE s’applique quand la resource est démarrée.

## Spawn

`spawnmanager` gère le spawn basique ; `stryke_pvp` reprend ensuite le flux (créateur / sélection de spawn / safezones).

## Voir aussi

[Installation](./installation) · [Zones & events](./zones-events)
