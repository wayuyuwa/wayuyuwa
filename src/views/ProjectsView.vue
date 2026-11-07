<script setup>
import { projects } from '../composables/usePortfolioData'

const featuredProjects = projects.value.filter(project => project.show && project.description && project.technologies?.length)
</script>

<template>
  <div class="projects-page">
    <header class="page-intro">
      <p class="eyebrow">Selected work</p>
      <h1>Projects with a reason to exist.</h1>
      <p>A small selection of experiments and academic work, including the battery health prediction project from my final year.</p>
    </header>

    <div class="projects-list">
      <article v-for="(project, index) in featuredProjects" :key="project.name" class="project-row">
        <span class="project-index">0{{ index + 1 }}</span>
        <div class="project-body">
          <div class="project-heading">
            <h2>{{ project.name }}</h2>
            <a :href="project.url" target="_blank" class="project-link">View repository -></a>
          </div>
          <p>{{ project.description || 'A practical software project exploring a focused technical problem.' }}</p>
          <div class="tech-stack">
            <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
          </div>
          <ul v-if="project.highlights?.length">
            <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.projects-page { padding: 35px 0; }
.page-intro { max-width: 760px; padding: 15px 0 52px; border-bottom: 1px solid var(--line); }
.eyebrow, .project-index { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
h1 { font-family: var(--serif); font-size: clamp(2.7rem, 6vw, 4.8rem); line-height: 1; margin: 18px 0; }
.page-intro p:last-child { color: var(--muted); line-height: 1.8; max-width: 580px; }
.projects-list { margin-top: 12px; }
.project-row { display: grid; grid-template-columns: 70px minmax(0, 1fr); gap: 18px; padding: 32px 0; border-bottom: 1px solid var(--line); }
.project-index { padding-top: 8px; }
.project-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; }
h2 { font-family: var(--serif); font-size: 1.7rem; margin: 0; }
.project-link { flex: 0 0 auto; color: var(--accent); font-size: 0.78rem; font-weight: 700; text-decoration: none; }
.project-body p { color: var(--muted); line-height: 1.7; max-width: 700px; }
.tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0; }
.tech-stack span { padding: 6px 9px; border: 1px solid var(--line); color: var(--muted); font-size: 0.75rem; }
ul { color: var(--muted); padding-left: 18px; }
li { margin: 6px 0; }
@media (max-width: 700px) { .project-row { grid-template-columns: 1fr; gap: 8px; } .project-heading { display: block; } .project-link { display: inline-block; margin-top: 10px; } }
</style>
