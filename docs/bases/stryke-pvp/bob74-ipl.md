# bob74_ipl

Charge les IPLs / intérieurs GTA (bureaux, bunkers, casinos, etc.) pour un monde cohérent en freeroam.

## Emplacement

`resources/bob74_ipl/`

## Démarrage

```ini
ensure bob74_ipl
```

Typiquement juste après `spawnmanager`, avant `oxmysql` / scripts.

## Vérification

Entrer dans un intérieur connu (ex. apartment, arcade) : textures / props présents, pas de trou noir.

## Dépannage

| Symptôme | Piste |
|----------|--------|
| Intérieur vide | Resource non `ensure`, conflit avec un autre IPL pack |
| Perf | Normal au premier chargement ; un seul pack IPL suffit |

## Voir aussi

[Installation](./installation)
