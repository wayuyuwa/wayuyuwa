<script setup>
import { skills } from '../composables/usePortfolioData'
</script>

<template>
  <div class="skills-page">
    <h1 class="page-title">Skills & Technologies</h1>
    <div class="skills-container">
      <div class="skill-category">
        <h3 class="category-title">Programming Languages</h3>
        <div class="skill-tags">
          <span 
            v-for="skill in skills.languages" 
            :key="skill" 
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="category-title">Frontend</h3>
        <div class="skill-tags">
          <span 
            v-for="skill in skills.frontend" 
            :key="skill" 
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="category-title">Backend</h3>
        <div class="skill-tags">
          <span 
            v-for="skill in skills.backend" 
            :key="skill" 
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="category-title">Databases</h3>
        <div class="skill-tags">
          <span 
            v-for="skill in skills.databases" 
            :key="skill" 
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      
      <div class="skill-category">
        <h3 class="category-title">Tools & Technologies</h3>
        <div class="skill-tags">
          <span 
            v-for="skill in skills.tools" 
            :key="skill" 
            class="skill-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-page {
  padding: 40px 20px;
  max-width: 1000px;
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

.skills-container {
  display: grid;
  gap: 30px;
}

.skill-category {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.6s ease;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.15);
}

.category-title {
  font-size: 1.5rem;
  color: #667eea;
  margin-bottom: 20px;
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-tag {
  background: #f0f0f0;
  color: #333;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.skill-tag:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  cursor: default;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .skill-category {
    padding: 20px;
  }
}
</style>
