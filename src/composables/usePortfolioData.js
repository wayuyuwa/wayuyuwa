import { ref } from 'vue'
import reposData from '../../data/repos-cache.json'

export const profile = ref({
  name: 'Chin Wai Yee',
  title: 'Full Stack Developer',
  email: 'chinwaiyee0521@gmail.com',
  phone: '+60 111097-0245',
  location: 'Johor, Malaysia',
  linkedin: 'linkedin.com/in/chin-wai-yee/',
  github: 'github.com/wayuyuwa',
  github2: 'github.com/chin-wai-yee',
})

export const experiences = ref([
  {
    id: 1,
    type: 'education',
    title: 'Secondary School',
    company: 'SMK Bandar Putra',
    location: 'Kulai, Johor',
    period: '2016 - 2020',
    description: '',
    achievements: [
      'SPM: 7A+, 3A, 1A-',
    ]
  },
  {
    
    id: 2,
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'Universiti Tunku Abdul Rahman (UTAR)',
    location: 'Kampar, Perak',
    period: 'May 2021 - Oct 2025',
    description: '',
    achievements: [
      'GPA: 3.67 (First Class Honors)',
    ]
  },
  {
    id: 3,
    type: 'internship',
    title: 'IT Intern',
    company: 'Opensys',
    location: 'Petaling Jaya, Selangor',
    period: 'Oct 2024 - Jan 2025',
    description: 'Built full-stack applications using modern technologies.',
    achievements: [
      'Developed internal tools (TCR simulator) with WPF and C#',
      'Solve concurrency issues in stored procedures',
      'Enhanced front-end and back-end features for existing applications'
    ]
  },
])

export const projects = ref(reposData)

export const skills = ref({
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#'],
  frontend: ['Vue.js', 'React', 'HTML5', 'CSS3', 'Bootstrap'],
  backend: ['Node.js', 'Spring Boot', 'REST APIs'],
  databases: ['MongoDB', 'MySQL'],
  tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack']
})
