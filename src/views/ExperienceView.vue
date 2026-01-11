<script setup>
import { experiences } from '../composables/usePortfolioData'
</script>

<template>
  <div class="experience-page">
    <h1 class="page-title">Experience</h1>
    <div class="timeline">
      <div 
        v-for="exp in experiences.slice().reverse()" 
        :key="exp.id" 
        class="timeline-item"
        :class="exp.type"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="position">{{ exp.title }}</h3>
            <span class="period">{{ exp.period }}</span>
          </div>
          <div class="company-info">
            <span class="company">{{ exp.company }}</span>
            <span class="location">{{ exp.location }}</span>
          </div>
          <p class="description">{{ exp.description }}</p>
          <ul class="achievements">
            <li v-for="(achievement, idx) in exp.achievements" :key="idx">
              {{ achievement }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-page {
  padding: 40px 20px;
  max-width: 900px;
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

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  animation: fadeInLeft 0.6s ease;
}

.timeline-marker {
  position: absolute;
  left: -46px;
  top: 5px;
  width: 15px;
  height: 15px;
  background: #667eea;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-item.education .timeline-marker {
  background: #764ba2;
  box-shadow: 0 0 0 3px #764ba2;
}

.timeline-content {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 10px;
}

.position {
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
}

.period {
  color: #667eea;
  font-weight: 500;
  font-size: 0.95rem;
}

.company-info {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  color: #666;
  font-size: 0.95rem;
}

.company {
  font-weight: 500;
}

.description {
  margin-bottom: 15px;
  color: #555;
}

.achievements {
  list-style: none;
  padding: 0;
}

.achievements li {
  padding-left: 25px;
  margin-bottom: 8px;
  position: relative;
  color: #555;
}

.achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .timeline-header {
    flex-direction: column;
  }
}
</style>
