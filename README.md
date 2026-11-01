# docs.project-nexora.com

Documentation publique [Project Nexora](https://docs.project-nexora.com) (VitePress + GitHub Pages).

## Développement

```bash
npm ci
npm run docs:dev
```

## Build

```bash
npm run docs:build
```

Le site est déployé automatiquement via `.github/workflows/deploy.yml` sur push `main`.

## Submodule

Ce dépôt est branché dans `txData` sous `docs-site/`.
