<script setup>
import { profile } from './composables/usePortfolioData'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="portfolio">
    <!-- Header Navigation -->
    <header class="header">
      <div class="container">
        <div class="nav-brand">
          <router-link to="/" class="name">{{ profile.name }}</router-link>
        </div>
        <nav class="nav-menu">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/experience" class="nav-link">Experience</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/skills" class="nav-link">Skills</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
      </div>
    </header>

    <!-- Page Content -->
    <main class="main-content">
      <div class="container">
        <router-view v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component" :key="route.path" />
          </Transition>
        </router-view>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy;  {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.</p>
        <div class="footer-links">
          <a :href="'https://' + profile.linkedin" target="_blank">LinkedIn</a>
          <a :href="'https://' + profile.github" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

/* Header & Navigation */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.nav-brand {
  cursor: pointer;
}

.name {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 5px;
  transition: opacity 0.3s ease;
}

.name:hover {
  opacity: 0.8;
}

.tagline {
  font-size: 0.9rem;
  opacity: 0.9;
}

.nav-menu {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.nav-link {
  background: transparent;
  color: white;
  border: 2px solid transparent;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.nav-link.router-link-active {
  background: white;
  color: #667eea;
  border-color: white;
}

.name {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 5px;
  transition: opacity 0.3s ease;
  color: white;
  text-decoration: none;
  display: block;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 20px 0;
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
  background: #333;
  color: white;
  padding: 30px 0;
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
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #667eea;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    text-align: center;
  }
  
  .nav-brand {
    width: 100%;
  }
  
  .nav-menu {
    justify-content: center;
    width: 100%;
  }
  
  .nav-link {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
  
  .footer .container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
