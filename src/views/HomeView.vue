<script setup>
import { profile } from '../composables/usePortfolioData'
import { useNavigation } from '../composables/useNavigation'

const { navigateTo } = useNavigation()
</script>

<template>
  <div class="home">
    <section class="hero">
      <p class="eyebrow">Application engineering / Java / event-driven systems</p>
      <h1>Building reliable paths for critical data.</h1>
      <p class="hero-title">I am a {{ profile.title.toLowerCase() }} working on banking data synchronization.</p>
      <p class="hero-tagline">I build and troubleshoot backend services where Kafka events, database consistency and production operations meet.</p>
      <div class="hero-actions">
        <button @click="navigateTo('experience')" class="btn btn-primary">View experience <span>-></span></button>
      </div>
    </section>

    <div class="home-grid">
      <section class="about-section">
        <p class="eyebrow">Current focus</p>
        <h2>Backend systems that stay understandable under pressure.</h2>
        <p class="about-text">On the Stand-In Core banking project at Hitachi eBworx, I work across Java/Spring Boot services, Kafka CDC flows and PostgreSQL persistence. My work spans implementation, failure diagnosis, controlled recovery and deployment operations.</p>
        <a :href="'https://' + profile.github" target="_blank" class="text-link">Explore GitHub <span>-></span></a>
      </section>

    </div>
  </div>
</template>

<style scoped>
.home { min-height: calc(100vh - 180px); }
.hero { max-width: 930px; padding: 70px 0 80px; border-bottom: 1px solid var(--line); }
.eyebrow { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
h1 { max-width: 800px; font-family: var(--serif); font-size: clamp(3rem, 7vw, 6.4rem); line-height: 0.98; letter-spacing: -0.04em; margin: 20px 0; }
.hero-title { max-width: 620px; font-size: 1.25rem; line-height: 1.45; margin-bottom: 14px; }
.hero-tagline { max-width: 580px; color: var(--muted); font-size: 1rem; margin-bottom: 34px; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
.btn { padding: 12px 18px; border: 1px solid var(--ink); text-decoration: none; font-size: 0.82rem; font-weight: 700; transition: background 0.2s ease, color 0.2s ease; }
.btn-primary { background: var(--ink); color: white; }
.btn-primary:hover { background: var(--accent); border-color: var(--accent); }
.home-grid { padding: 65px 0; }
h2 { max-width: 560px; font-family: var(--serif); font-size: 2.35rem; line-height: 1.05; margin: 18px 0 20px; }
.about-text { max-width: 620px; color: var(--muted); line-height: 1.8; margin-bottom: 22px; }
.text-link { color: var(--accent); font-weight: 700; text-decoration: none; }
@media (max-width: 768px) {
  .hero { padding: 48px 0 55px; }
  h1 { font-size: 3.4rem; }
  .home-grid { padding: 45px 0; }
  h2 { font-size: 2rem; }
}
</style>
