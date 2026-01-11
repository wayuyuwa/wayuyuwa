<script setup>
import { profile } from '../composables/usePortfolioData'
import { useNavigation } from '../composables/useNavigation'

const { navigateTo } = useNavigation()
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1 class="hero-name">{{ profile.name }}</h1>
      <p class="hero-title">{{ profile.title }}</p>
      <p class="hero-tagline">Fresh graduate eager to build innovative solutions with modern technologies</p>
      <div class="hero-actions">
        <button @click="navigateTo('contact')" class="btn btn-primary">Get In Touch</button>
        <a :href="'https://' + profile.github" target="_blank" class="btn btn-secondary">View GitHub</a>
      </div>
    </div>
    
    <div class="about-section">
      <h2 class="section-title">About Me</h2>
      <p class="about-text">
        I'm a fresh graduate passionate about full-stack development with hands-on experience 
        in building web applications. With a strong foundation in modern technologies and 
        a keen eye for detail, I'm excited to start my professional journey creating 
        user-friendly interfaces and robust solutions.
      </p>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 200px);
}

.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 60px;
}

.hero-name {
  font-size: 3.5rem;
  margin-bottom: 15px;
  font-weight: 700;
  animation: fadeInUp 0.8s ease;
}

.hero-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  opacity: 0.95;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.hero-tagline {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.6s both;
}

.btn {
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.about-section {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #667eea;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  text-align: center;
  margin-bottom: 50px;
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 10px;
}

.stat-label {
  display: block;
  font-size: 1rem;
  color: #666;
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
  .hero-name {
    font-size: 2.5rem;
  }
  
  .hero-title {
    font-size: 1.4rem;
  }
  
  .hero-tagline {
    font-size: 1rem;
  }
}
</style>
