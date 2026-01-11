<script setup>
import { projects } from '../composables/usePortfolioData'

const filteredProjects = projects.value.filter(project => project.show);

const handleImageError = (event) => {
  event.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"%3E%3Crect width="400" height="200" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%23999"%3EProject Image%3C/text%3E%3C/svg%3E';
};
</script>

<template>
  <div class="projects-page">
    <h1 class="page-title">Projects</h1>
    <div class="projects-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id" 
        class="project-card"
      >
        <div v-if="project.image" class="project-image">
          <img 
            :src="project.image" 
            :alt="project.name"
            loading="lazy"
            @error="handleImageError"
          />
        </div>
        <h3 class="project-name">{{ project.name }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="tech-stack">
          <span 
            v-for="tech in project.technologies" 
            :key="tech" 
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
        <ul class="project-highlights">
          <li v-for="(highlight, idx) in project.highlights" :key="idx">
            {{ highlight }}
          </li>
        </ul>
        <div class="project-links">
          <a 
            :href="project.url" 
            target="_blank" 
            class="btn btn-primary"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
}

.page-title {
  font-size: 3rem;
  margin-bottom: 50px;
  color: #667eea;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.6s ease;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
}

.project-image {
  margin: -30px -30px 20px -30px;
  width: calc(100% + 60px);
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-name {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.project-description {
  color: #555;
  margin-bottom: 20px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tech-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-highlights {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.project-highlights li {
  padding-left: 20px;
  margin-bottom: 8px;
  position: relative;
  color: #555;
  font-size: 0.9rem;
}

.project-highlights li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.project-links {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-links {
    flex-direction: column;
  }
}
</style>
