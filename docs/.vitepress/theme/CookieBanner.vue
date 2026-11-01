<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

const STORAGE_KEY = 'nexora_cookie_consent'
const VERSION = 1

type Consent = {
  v: number
  necessary: true
  analytics: boolean
  updatedAt: string
}

const visible = ref(false)
const showPrefs = ref(false)
const analytics = ref(false)

function load(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as Consent
    if (data?.v !== VERSION) return null
    return data
  } catch {
    return null
  }
}

function save(partial: { analytics: boolean }) {
  const payload: Consent = {
    v: VERSION,
    necessary: true,
    analytics: partial.analytics,
    updatedAt: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  apply(payload)
  visible.value = false
  showPrefs.value = false
}

function apply(c: Consent) {
  // Hook futur analytics : ne charger un script que si c.analytics === true
  ;(window as unknown as { __nexoraConsent?: Consent }).__nexoraConsent = c
}

function acceptAll() {
  analytics.value = true
  save({ analytics: true })
}

function refuseOptional() {
  analytics.value = false
  save({ analytics: false })
}

function savePrefs() {
  save({ analytics: analytics.value })
}

onMounted(() => {
  const existing = load()
  if (existing) {
    analytics.value = !!existing.analytics
    apply(existing)
    visible.value = false
  } else {
    visible.value = true
  }

  window.addEventListener('nexora:open-cookies', () => {
    const cur = load()
    analytics.value = !!cur?.analytics
    visible.value = true
    showPrefs.value = true
  })
})

const prefsLabel = computed(() =>
  showPrefs.value ? 'Masquer les préférences' : 'Personnaliser',
)
</script>

<template>
  <div v-if="visible" class="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-live="polite">
    <div class="cookie-inner">
      <div class="cookie-copy">
        <p id="cookie-title" class="cookie-title">Cookies & confidentialité</p>
        <p class="cookie-text">
          Nous utilisons un stockage local pour mémoriser ton choix. Les cookies optionnels
          (mesure d’audience) ne sont pas activés par défaut.
          <a href="/legal/cookies">En savoir plus</a>
          ·
          <a href="/legal/rgpd">RGPD</a>
        </p>
      </div>

      <div v-if="showPrefs" class="cookie-prefs">
        <label class="cookie-row">
          <input type="checkbox" checked disabled />
          <span><strong>Nécessaires</strong> — consentement (toujours actifs)</span>
        </label>
        <label class="cookie-row">
          <input v-model="analytics" type="checkbox" />
          <span><strong>Mesure d’audience</strong> — statistiques anonymisées (opt-in)</span>
        </label>
      </div>

      <div class="cookie-actions">
        <button type="button" class="btn ghost" @click="showPrefs = !showPrefs">
          {{ prefsLabel }}
        </button>
        <button type="button" class="btn ghost" @click="refuseOptional">Refuser</button>
        <button v-if="showPrefs" type="button" class="btn secondary" @click="savePrefs">
          Enregistrer
        </button>
        <button type="button" class="btn primary" @click="acceptAll">Tout accepter</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12px;
  pointer-events: none;
}

.cookie-inner {
  pointer-events: auto;
  max-width: 920px;
  margin: 0 auto;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-elv);
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.28);
}

.cookie-title {
  margin: 0 0 6px;
  font-weight: 700;
  font-size: 15px;
}

.cookie-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.cookie-text a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.cookie-prefs {
  margin-top: 12px;
  display: grid;
  gap: 8px;
}

.cookie-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 13px;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.cookie-actions {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
}

.btn {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.btn.primary {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.btn.primary:hover {
  background: var(--vp-c-brand-2);
}

.btn.secondary {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-soft);
}

.btn.ghost {
  background: transparent;
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.btn.ghost:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>
