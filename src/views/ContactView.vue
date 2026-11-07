<script setup>
import { profile } from '../composables/usePortfolioData'

const contactItems = [
  { label: 'Email', value: profile.value.email, href: `mailto:${profile.value.email}` },
  { label: 'Phone', value: profile.value.phone, href: `tel:${profile.value.phone}` },
  { label: 'Location', value: profile.value.location },
]
</script>

<template>
  <div class="contact-page">
    <header class="page-intro">
      <p class="eyebrow">Open channel</p>
      <h1>Let us talk about reliable software.</h1>
      <p>For roles, collaborations or a thoughtful technical conversation, email is the quickest way to reach me.</p>
    </header>

    <div class="contact-layout">
      <section class="contact-info" aria-label="Contact details">
        <div v-for="(item, index) in contactItems" :key="item.label" class="info-row">
          <span class="item-index">0{{ index + 1 }}</span>
          <div>
            <h2>{{ item.label }}</h2>
            <a v-if="item.href" :href="item.href">{{ item.value }}</a>
            <p v-else>{{ item.value }}</p>
          </div>
        </div>
      </section>

      <section class="social-section">
        <p class="eyebrow">Elsewhere</p>
        <a :href="'https://' + profile.linkedin" target="_blank" class="social-link">
          <img src="../../res/linkedin.svg" alt="">
          <span>LinkedIn</span><strong>-></strong>
        </a>
        <a :href="'https://' + profile.github" target="_blank" class="social-link">
          <img src="../../res/github.svg" alt="">
          <span>GitHub</span><strong>-></strong>
        </a>
        <a :href="'https://' + profile.website" target="_blank" class="social-link">
          <span class="site-mark">WWW</span>
          <span>Portfolio site</span><strong>-></strong>
        </a>
      </section>
    </div>
  </div>
</template>

<style scoped>
.contact-page { padding: 35px 0; }
.page-intro { max-width: 760px; padding: 15px 0 52px; border-bottom: 1px solid var(--line); }
.eyebrow, .item-index { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
h1 { font-family: var(--serif); font-size: clamp(2.7rem, 6vw, 4.8rem); line-height: 1; margin: 18px 0; }
.page-intro p:last-child { color: var(--muted); line-height: 1.8; max-width: 580px; }
.contact-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(240px, 360px); gap: 90px; padding-top: 50px; }
.info-row { display: grid; grid-template-columns: 50px 1fr; gap: 18px; padding: 20px 0; border-top: 1px solid var(--line); }
.item-index { padding-top: 5px; }
h2 { font-family: var(--serif); font-size: 1.35rem; margin: 0 0 7px; }
.info-row a, .info-row p { color: var(--muted); font-size: 0.95rem; margin: 0; text-decoration: none; }
.info-row a:hover { color: var(--accent); }
.social-section { align-self: start; }
.social-link { display: grid; grid-template-columns: 28px 1fr auto; align-items: center; gap: 12px; padding: 17px 0; border-bottom: 1px solid var(--line); color: var(--ink); text-decoration: none; font-weight: 700; }
.social-link img { width: 20px; height: 20px; }
.social-link strong { color: var(--accent); }
.site-mark { color: var(--accent); font-size: 0.65rem; font-weight: 700; }
.social-link:hover { color: var(--accent); }
@media (max-width: 700px) { .contact-layout { grid-template-columns: 1fr; gap: 45px; } }
</style>
