# stryke_vehicles

![Bannière véhicules](/img/banner-vehicles.png)

Pack véhicules addon fusionné (handling, meta, audio).

## Emplacement

`resources/[assets]/stryke_vehicles/`

## Démarrage

```ini
ensure [assets]
```

Ou `ensure stryke_vehicles`.

## Contenu

- `data/**/*.meta` (handling, vehicles…)
- `audioconfig` / `sfx` (sons moteur)
- Stream modèles via structure resource

La boutique / garage **stryke_pvp** référence des modèles : ils doivent exister dans ce pack (ou GTA vanilla).

## Vérification

Spawner un véhicule addon connu du pack (admin / shop) : modèle + handling + son OK.

## Perf

Pack lourd : stream progressif, éviter de multiplier les packs véhicules concurrents.

## Voir aussi

[Installation](./installation) · [Configuration](./configuration) (économie véhicules dans `config.lua`)
