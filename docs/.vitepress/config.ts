import { defineConfig } from 'vitepress'

const strykeSidebar = [
  {
    text: 'stryke_pvp',
    items: [
      { text: 'Présentation', link: '/bases/stryke-pvp/' },
      { text: 'Configuration', link: '/bases/stryke-pvp/configuration' },
      { text: 'Discord & webhooks', link: '/bases/stryke-pvp/discord-webhooks' },
      { text: 'Anti-cheat & exports', link: '/bases/stryke-pvp/anticheat-exports' },
      { text: 'Zones & events', link: '/bases/stryke-pvp/zones-events' },
    ],
  },
]

export default defineConfig({
  title: 'Project Nexora',
  description: 'Documentation STRYKE PvP — Project Nexora',
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
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
        },
        link: 'https://discord.gg/WTZYH4G6cg',
        ariaLabel: 'Discord',
      },
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
      { text: 'stryke_pvp', link: '/bases/stryke-pvp/' },
      { text: 'Configuration', link: '/bases/stryke-pvp/configuration' },
      {
        text: 'Discord',
        link: 'https://discord.gg/WTZYH4G6cg',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        text: 'Légal',
        items: [
          { text: 'Confidentialité / RGPD', link: '/legal/rgpd' },
          { text: 'Cookies', link: '/legal/cookies' },
        ],
      },
    ],
    sidebar: {
      '/bases/stryke-pvp/': strykeSidebar,
      '/bases/': [
        {
          text: 'Bases',
          items: [
            { text: 'Vue d’ensemble', link: '/bases/' },
            { text: 'stryke_pvp →', link: '/bases/stryke-pvp/' },
          ],
        },
      ],
      '/guide/': [
        {
          text: 'Guides',
          items: [
            { text: 'Config facile', link: '/guide/config-easy' },
            { text: '→ Présentation stryke_pvp', link: '/bases/stryke-pvp/' },
          ],
        },
      ],
      '/legal/': [
        {
          text: 'Légal',
          items: [
            { text: 'Confidentialité / RGPD', link: '/legal/rgpd' },
            { text: 'Cookies', link: '/legal/cookies' },
          ],
        },
      ],
    },
    footer: {
      message: 'Documentation Project Nexora — <a href="/legal/rgpd">RGPD</a> · <a href="/legal/cookies">Cookies</a>',
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
