<script setup>
import { experiences } from '../composables/usePortfolioData'
</script>

<template>
  <div class="experience-page">
    <h1 class="page-title">Experience</h1>
    <div class="timeline">
      <div 
        v-for="exp in experiences" 
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
  padding: 35px 0;
  max-width: 900px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
}

.page-title {
  font-family: var(--serif);
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 1;
  margin: 0 0 45px;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  display: none;
}

.timeline {
  position: relative;
  padding-left: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--line);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  animation: fadeInLeft 0.6s ease;
}

.timeline-marker {
  position: absolute;
  left: -31px;
  top: 5px;
  width: 10px;
  height: 10px;
  background: var(--accent);
  border: 4px solid var(--paper);
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--accent);
}

.timeline-item.education .timeline-marker {
  background: var(--ink);
  box-shadow: 0 0 0 1px var(--ink);
}

.timeline-content {
  background: var(--surface);
  padding: 26px 30px;
  border: 1px solid var(--line);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(5px);
  box-shadow: 6px 6px 0 rgba(200, 75, 49, 0.12);
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
  color: var(--ink);
  font-weight: 600;
}

.period {
  color: var(--accent);
  font-weight: 500;
  font-size: 0.95rem;
}

.company-info {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  color: var(--muted);
  font-size: 0.95rem;
}

.company {
  font-weight: 500;
}

.description {
  margin-bottom: 15px;
  color: var(--muted);
}

.achievements {
  list-style: none;
  padding: 0;
}

.achievements li {
  padding-left: 25px;
  margin-bottom: 8px;
  position: relative;
  color: var(--muted);
}

.achievements li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
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

  .timeline-content { padding: 22px; }
}
</style>
