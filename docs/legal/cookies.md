# Cookies

Dernière mise à jour : novembre 2026.

## Qu’est-ce qu’un cookie / stockage local ?

Sur ce site, le consentement est stocké dans le **localStorage** du navigateur (équivalent fonctionnel à un cookie technique de préférence).

## Catégories

| Catégorie | Obligatoire | Description |
|-----------|-------------|-------------|
| **Nécessaires** | Oui | Mémoriser ton choix de consentement (`nexora_cookie_consent`) pour ne pas réafficher le bandeau à chaque visite |
| **Mesure d’audience** | Non | Réservé pour de futurs outils d’analytics anonymisés — **désactivé par défaut**, jamais chargés sans opt-in |

Aucun cookie publicitaire tiers n’est utilisé actuellement.

## Gérer ton choix

1. Au premier affichage, le bandeau en bas de page te permet d’**accepter**, de **refuser** (hors nécessaires) ou d’ouvrir les **préférences**.
2. Revoir ton choix :

<button class="cookie-reset-btn" type="button" onclick="window.dispatchEvent(new Event('nexora:open-cookies'))">Revoir les cookies</button>

<style>
.cookie-reset-btn {
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
  padding: 8px 14px;
  cursor: pointer;
}
.cookie-reset-btn:hover { background: var(--vp-c-brand-1); color: #fff; }
</style>

## Plus d’infos

- [Confidentialité / RGPD](./rgpd)
- [Discord](https://discord.gg/WTZYH4G6cg)
