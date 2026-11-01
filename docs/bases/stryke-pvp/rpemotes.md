# rpemotes-reborn

Menu d’emotes / animations (fork **rpemotes**). Fournit `provide "rpemotes"`.

## Emplacement

`resources/[script]/rpemotes-reborn/`

## Prérequis

- Serveur build ≥ 6683
- OneSync

## Démarrage

```ini
ensure [script]
ensure rpemotes-reborn
```

## Config

Fichiers typiques : `config.lua` / locales dans `locales/`. Touches et listes d’emotes se règlent dans la config de la resource (pas dans `stryke_pvp`).

## Vérification

Ouvrir le menu emotes in-game (touche configurée) : animations jouables, NUI OK.

## Conflits

Ne démarre pas un second pack emotes qui `provide` aussi `rpemotes`.

## Voir aussi

[Installation](./installation)
