# stryke_loadingscreen

![Bannière loading](/img/banner-loading.png)

Écran de chargement STRYKE (NUI + images de fond).

## Emplacement

`resources/[script]/stryke_loadingscreen/`

## Manifest (points clés)

- `loadscreen 'html/index.html'`
- `loadscreen_cursor 'yes'`
- `loadscreen_manual_shutdown 'yes'`
- Assets : `assets/bg1.png` … `bg4.png`

## Démarrage

Inclus via :

```ini
ensure [script]
```

Ou :

```ini
ensure stryke_loadingscreen
```

## Personnalisation

- Fonds : remplacer les PNG dans `assets/`
- Texte / UI : `html/index.html`, `style.css`, `app.js`

## Vérification

À la connexion client : écran STRYKE visible pendant le chargement, puis passage en jeu (shutdown manuel par la base).

## Voir aussi

[Installation](./installation)
