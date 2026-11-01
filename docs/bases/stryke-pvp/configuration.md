# Configuration — stryke_pvp

## Deux fichiers

| Fichier | Rôle |
|---------|------|
| `shared/config.easy.lua` | **Commence ici** — Discord, webhooks, argent, gains, VIP, Connect |
| `shared/config.lua` | Avancé — zones, spawns, shops, gunfeel, anticheat, véhicules… |

Voir aussi le guide transversal [Config facile](/guide/config-easy).

## config.easy.lua — sections

### Base

- `Config.Locale` — langue (`fr`…)
- `Config.StartingMoney` — cash à la première connexion

### Gains

- `Config.AfkReward` — paiement passif zone AFK (`Enabled`, intervalle, montant, plafond journalier)
- `Config.KillReward` — $ par kill
- `Config.PvpMoneyMultiplier` — multiplicateur en zone PvP
- `Config.StreakBonus` — bonus $ selon série de kills

### Monnaie premium & VIP

- `Config.Currency` — label (ex. `StryCore`), taux `$` → coins, `AutoCoinPrice`
- `Config.Vip` — multiplicateurs kill / XP battle pass, badge

### Discord joueurs

- `Config.Discord` — bot token (avatars), webhooks killfeed / classement, intervalle leaderboard

::: warning Secrets
Ne publie jamais un vrai bot token ou une URL webhook complète sur un dépôt public. Utilise des chaînes vides en template et remplis en local / via secrets.
:::

### Logs staff

- `Config.Webhooks` — `anticheat`, `admin`, `economy`, `events`, `connect` (chaîne vide = off)
- `Config.FiveManage` — miroir optionnel des logs

### Rich Presence

- `Config.RichPresence` — App ID Discord, assets, lien `cfx.re/join/…`

### Connexion

- `Config.Connect` — nom serveur, bannière, liens, allowlist, queue, check IP (VPN), cartes Adaptive

## config.lua — quoi y toucher

Uniquement si tu sais ce que tu fais :

- Spawns, zones safe/AFK/PvP/loot
- KOTH, random events, loot
- Listes armes / véhicules / VIP shop
- Gunfeel, crosshair, dommages véhicule
- Anti-cheat (seuils, liste SecureEvents)
- Map / minimap

Les helpers (`Config.MoneyPerCoin`, `ResolveCoinPrice`, …) restent dans `config.lua` et lisent `Config.Currency` défini dans easy.
