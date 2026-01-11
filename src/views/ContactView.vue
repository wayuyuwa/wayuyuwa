<script setup>
import { profile } from '../composables/usePortfolioData'
</script>

<template>
  <div class="contact-page">
    <h1 class="page-title">Get In Touch</h1>
    <div class="contact-content">
      <div class="contact-info">
        <div class="info-card">
          <div class="icon">📧</div>
          <h3>Email</h3>
          <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
        </div>
        
        <div class="info-card">
          <div class="icon">📱</div>
          <h3>Phone</h3>
          <a :href="'tel:' + profile.phone">{{ profile.phone }}</a>
        </div>
        
        <div class="info-card">
          <div class="icon">📍</div>
          <h3>Location</h3>
          <p>{{ profile.location }}</p>
        </div>
      </div>
      
      <div class="social-section">
        <h2>Connect With Me</h2>
        <div class="social-links">
          <a :href="'https://' + profile.linkedin" target="_blank" class="social-card">
            <div class="social-icon"><img src="../../res/linkedin.svg" alt="LinkedIn"></div>
            <div class="social-text">
              <h3>LinkedIn</h3>
              <p>{{ profile.linkedin }}</p>
            </div>
          </a>
          
          <a :href="'https://' + profile.github" target="_blank" class="social-card">
            <div class="social-icon"><img src="../../res/github.svg" alt="GitHub"></div>
            <div class="social-text">
              <h3>GitHub</h3>
              <p>{{ profile.github }}</p>
            </div>
          </a>
          
          <a :href="'https://' + profile.github2" target="_blank" class="social-card">
            <div class="social-icon"><img src="../../res/github.svg" alt="GitHub (Alt)"></div>
            <div class="social-text">
              <h3>GitHub (Alt)</h3>
              <p>{{ profile.github2 }}</p>
            </div>
          </a>
        </div>
      </div>
      
      <div class="cta-section">
        <h2>Let's Work Together</h2>
        <p>I'm always interested in hearing about new projects and opportunities.</p>
        <a :href="'mailto:' + profile.email" class="btn-cta">Send Me an Email</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
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

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.6s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
}

.icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.info-card h3 {
  color: #667eea;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.info-card a {
  color: #555;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-card a:hover {
  color: #667eea;
}

.info-card p {
  color: #555;
}

.social-section {
  text-align: center;
}

.social-section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease;
}

.social-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
}

.social-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.social-icon img {
  width: 40px;
  height: 40px;
}

.social-text {
  text-align: left;
  flex-grow: 1;
}

.social-text h3 {
  color: #667eea;
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.social-text p {
  color: #666;
  font-size: 0.9rem;
  word-break: break-all;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 50px 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
  animation: fadeIn 0.8s ease;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 15px;
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.95;
}

.btn-cta {
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 15px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    grid-template-columns: 1fr;
  }
}
</style>
