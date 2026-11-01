import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Project Nexora',
  description: 'Documentation bases, scripts et maps FiveM — Project Nexora',
  lang: 'fr-FR',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#E11D2E' }],
  ],

  themeConfig: {
    logo: { light: '/logo.svg', dark: '/logo.svg', alt: 'Project Nexora' },
    siteTitle: 'Project Nexora',
    outline: { label: 'Sur cette page', level: [2, 3] },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Project-Nexora-fr' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
          modal: {
            noResultsText: 'Aucun résultat',
            resetButtonTitle: 'Réinitialiser',
            footer: {
              selectText: 'sélectionner',
              navigateText: 'naviguer',
              closeText: 'fermer',
            },
          },
        },
      },
    },
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Guides', link: '/guide/installation' },
      { text: 'Bases', link: '/bases/' },
      { text: 'Scripts', link: '/scripts/' },
      { text: 'Maps', link: '/maps/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guides',
          items: [
            { text: 'Installation serveur', link: '/guide/installation' },
            { text: 'Config facile (débutant)', link: '/guide/config-easy' },
          ],
        },
      ],
      '/bases/': [
        {
          text: 'Bases',
          items: [
            { text: 'Vue d’ensemble', link: '/bases/' },
            {
              text: 'stryke_pvp',
              collapsed: false,
              items: [
                { text: 'Présentation', link: '/bases/stryke-pvp/' },
                { text: 'Installation', link: '/bases/stryke-pvp/installation' },
                { text: 'Configuration', link: '/bases/stryke-pvp/configuration' },
                { text: 'Discord & webhooks', link: '/bases/stryke-pvp/discord-webhooks' },
                { text: 'Anti-cheat & exports', link: '/bases/stryke-pvp/anticheat-exports' },
                { text: 'Zones & events', link: '/bases/stryke-pvp/zones-events' },
              ],
            },
          ],
        },
      ],
      '/scripts/': [
        {
          text: 'Scripts',
          items: [{ text: 'Vue d’ensemble', link: '/scripts/' }],
        },
      ],
      '/maps/': [
        {
          text: 'Maps',
          items: [{ text: 'Vue d’ensemble', link: '/maps/' }],
        },
      ],
    },
    footer: {
      message: 'Documentation Project Nexora',
      copyright: 'Copyright © Project Nexora',
    },
    docFooter: {
      prev: 'Précédent',
      next: 'Suivant',
    },
    returnToTopLabel: 'Retour en haut',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer en clair',
    darkModeSwitchTitle: 'Passer en sombre',
  },
})
