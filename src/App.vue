<script setup>
import { profile } from './composables/usePortfolioData'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="portfolio">
    <header class="header">
      <div class="container">
        <router-link to="/" class="nav-brand">
          <span class="brand-mark">CY</span>
          <span>
          <strong class="name">{{ profile.name }}</strong>
          <small>{{ profile.title }}</small>
          </span>
        </router-link>
        <nav class="nav-menu">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/experience" class="nav-link">Experience</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/skills" class="nav-link">Skills</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <div class="container">
        <router-view v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component" :key="route.path" />
          </Transition>
        </router-view>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>{{ profile.name }} <span>/</span> Backend application engineer</p>
        <div class="footer-links">
          <a :href="'https://' + profile.linkedin" target="_blank">LinkedIn</a>
          <a :href="'https://' + profile.github" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  --ink: #17211b;
  --muted: #647069;
  --paper: #f5f4ef;
  --surface: #fffefa;
  --line: #d7ddd4;
  --accent: #c84b31;
  --accent-dark: #9c3422;
  --serif: Georgia, 'Times New Roman', serif;
  --sans: 'Trebuchet MS', 'Segoe UI', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: var(--paper);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

button {
  font: inherit;
  cursor: pointer;
}
</style>

<style scoped>
.portfolio {
  font-family: var(--sans);
  color: var(--ink);
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

/* Header & Navigation */
.header {
  background: rgba(245, 244, 239, 0.94);
  border-bottom: 1px solid var(--line);
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--ink);
  text-decoration: none;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  background: var(--accent);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.name {
  display: block;
  color: var(--ink);
  font-family: var(--serif);
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.1;
  text-decoration: none;
}

.nav-brand small {
  display: block;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.nav-menu {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.nav-link {
  color: var(--muted);
  padding: 7px 0;
  border-bottom: 2px solid transparent;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s ease, border-color 0.2s ease;
  text-decoration: none;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--accent);
  border-color: var(--accent);
}

.main-content {
  flex: 1;
  padding: 30px 0 70px;
  background: radial-gradient(circle at 90% 5%, rgba(200, 75, 49, 0.08), transparent 28rem);
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Footer */
.footer {
  background: var(--ink);
  color: #dce5dc;
  padding: 24px 0;
  margin-top: auto;
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: #dce5dc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #f2a08c;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .nav-brand {
    width: auto;
  }
  
  .nav-menu {
    justify-content: flex-start;
    width: 100%;
    gap: 15px;
  }
  
  .nav-link {
    font-size: 0.72rem;
  }
  
  .footer .container {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
