<script setup>
import { skills } from '../composables/usePortfolioData'

const skillGroups = [
  { label: 'Languages', items: skills.value.languages },
  { label: 'Backend', items: skills.value.backend },
  { label: 'Data and messaging', items: skills.value.data },
  { label: 'Delivery and testing', items: skills.value.delivery },
  { label: 'Other', items: skills.value.other },
]
</script>

<template>
  <div class="skills-page">
    <header class="page-intro">
      <p class="eyebrow">Technical toolkit</p>
      <h1>Technologies and tools I use to build software.</h1>
      <p>Focused on backend services, event-driven data flows and the practical work of keeping systems observable and consistent.</p>
    </header>

    <div class="skills-grid">
      <section v-for="(group, index) in skillGroups" :key="group.label" class="skill-category">
        <span class="category-index">0{{ index + 1 }}</span>
        <h2>{{ group.label }}</h2>
        <div class="skill-tags">
          <span v-for="skill in group.items" :key="skill" class="skill-tag">{{ skill }}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.skills-page { padding: 35px 0; }
.page-intro { max-width: 720px; padding: 15px 0 52px; border-bottom: 1px solid var(--line); }
.eyebrow, .category-index { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
h1 { font-family: var(--serif); font-size: clamp(2.7rem, 6vw, 4.8rem); line-height: 1; margin: 18px 0; }
.page-intro p:last-child { color: var(--muted); line-height: 1.8; max-width: 580px; }
.skills-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; margin-top: 40px; background: transparent; border: 0; }
.skill-category { min-width: 0; min-height: 180px; padding: 28px; background: var(--surface); }
.category-index { display: block; margin-bottom: 22px; }
h2 { font-family: var(--serif); font-size: 1.65rem; margin: 0 0 22px; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag { padding: 7px 10px; border: 1px solid var(--line); color: var(--muted); font-size: 0.8rem; }
@media (max-width: 700px) { .skills-grid { grid-template-columns: 1fr; } .skill-category { min-height: auto; } }
</style>
