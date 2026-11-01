# stryke_weapon_metas

![Bannière armes](/img/banner-weapons.png)

Patches **WEAPONINFO** (TTK / feel) pour armes & composants véhicules.

## Emplacement

`resources/[assets]/stryke_weapon_metas/`

## Démarrage

```ini
ensure [assets]
```

## Contenu

```
metas/weapons/*.meta
metas/weaponcomponents/*.meta
metas/vehicle_weapons/*.meta
```

Enregistrés en `WEAPONINFO_FILE_PATCH`.

Le gunfeel client (`Config.Gunfeel` dans `stryke_pvp`) complète ces metas — voir [configuration avancée](./configuration).

## Vérification

Tirer en freeroam : comportement / dégâts cohérents avec le tuning serveur (pas de meta vanilla « molle » si le pack est actif).

## Voir aussi

[Installation](./installation) · [weapon_ka_pn_diamant](./weapon-diamant)
