import { defineConfig } from 'vitepress'

const strykeSidebar = [
  {
    text: 'stryke_pvp',
    items: [
      { text: 'Présentation', link: '/bases/stryke-pvp/' },
      { text: 'Installation complète', link: '/bases/stryke-pvp/installation' },
      { text: 'server.cfg', link: '/bases/stryke-pvp/server-cfg' },
      { text: 'Configuration', link: '/bases/stryke-pvp/configuration' },
      { text: 'Discord & webhooks', link: '/bases/stryke-pvp/discord-webhooks' },
      { text: 'Anti-cheat & exports', link: '/bases/stryke-pvp/anticheat-exports' },
      { text: 'Zones & events', link: '/bases/stryke-pvp/zones-events' },
    ],
  },
  {
    text: 'Dépendances & resources',
    collapsed: false,
    items: [
      { text: 'oxmysql', link: '/bases/stryke-pvp/oxmysql' },
      { text: 'bob74_ipl', link: '/bases/stryke-pvp/bob74-ipl' },
      { text: 'spawnmanager & chat', link: '/bases/stryke-pvp/spawnmanager-chat' },
      { text: 'stryke_loadingscreen', link: '/bases/stryke-pvp/loadingscreen' },
      { text: 'rpemotes-reborn', link: '/bases/stryke-pvp/rpemotes' },
      { text: 'stryke_vehicles', link: '/bases/stryke-pvp/vehicles' },
      { text: 'stryke_weapon_metas', link: '/bases/stryke-pvp/weapon-metas' },
      { text: 'stryke_ymap', link: '/bases/stryke-pvp/ymap' },
      { text: 'weapon_ka_pn_diamant', link: '/bases/stryke-pvp/weapon-diamant' },
    ],
  },
]

export default defineConfig({
  title: 'Project Nexora',
  description: 'Documentation STRYKE PvP / Project Nexora — installation et resources',
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
      { text: 'stryke_pvp', link: '/bases/stryke-pvp/' },
      { text: 'Installation', link: '/bases/stryke-pvp/installation' },
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
            { text: '→ Installation stryke_pvp', link: '/bases/stryke-pvp/installation' },
            { text: 'Config facile', link: '/guide/config-easy' },
          ],
        },
      ],
      '/scripts/': [
        {
          text: 'Scripts',
          items: [
            { text: 'Voir dans stryke_pvp', link: '/bases/stryke-pvp/loadingscreen' },
          ],
        },
      ],
      '/maps/': [
        {
          text: 'Maps',
          items: [
            { text: 'stryke_ymap →', link: '/bases/stryke-pvp/ymap' },
          ],
        },
      ],
    },
    footer: {
      message: 'Documentation Project Nexora — base STRYKE PvP',
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
