import { ref } from 'vue'
import reposData from '../../data/repos-cache.json'

export const profile = ref({
  name: 'Chin Wai Yee',
  title: 'Backend Application Engineer',
  email: 'chinwaiyee0521@gmail.com',
  phone: '+60-11-1097-0245',
  location: 'Malaysia',
  linkedin: 'linkedin.com/in/chin-wai-yee',
  github: 'github.com/Chin-Wai-Yee',
  website: 'wayuyuwa.github.io/wayuyuwa',
})

export const experiences = ref([
  {
    id: 1,
    type: 'work',
    title: 'Backend Application Engineer',
    company: 'Hitachi eBworx',
    location: 'Malaysia',
    period: 'Mar 2026 - Present',
    description: 'Building and maintaining Java/Spring Boot services for the Stand-In Core banking project.',
    achievements: [
      'Synchronize upsert and delete events from approximately 20 Kafka topics across three services into PostgreSQL.',
      'Diagnose CDC mapping, malformed data and dead-letter queue failures, reproducing issues locally and restoring event processing.',
      'Resolve connector failures and unique-key conflicts through controlled recovery and data reconciliation.',
      'Operate Kubernetes deployments and Jenkins pipelines, including memory-related CrashLoopBackOff recovery.',
    ]
  },
  {
    
    id: 2,
    type: 'work',
    title: 'Software Engineering Intern',
    company: 'Opensys',
    location: 'Petaling Jaya, Selangor',
    period: 'Oct 2024 - Jan 2025',
    description: 'Developed and supported a Teller Cash Recycler simulator and management system.',
    achievements: [
      'Built a C#/.NET and WPF simulator for system testing and hardware-software integration.',
      'Resolved a SQL Server race condition with transaction control and row-level locking.',
      'Maintained and debugged the TCR management system to improve stability.',
    ]
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'Universiti Tunku Abdul Rahman (UTAR)',
    location: 'Malaysia',
    period: 'May 2021 - Oct 2025',
    description: 'First Class Honours with Distinction, CGPA 3.67 / 4.00.',
    achievements: [
      'Final year project: battery State of Charge and State of Health prediction from EIS data.',
      'Evaluated Random Forest, CNN and Transformer models with pruning and quantization.',
    ]
  },
])

export const projects = ref(reposData)

export const skills = ref({
  languages: ['Java', 'C#', 'Python', 'SQL'],
  backend: ['Spring Boot', 'Spring MVC', 'REST APIs', 'JPA / Hibernate', 'JDBC', 'FreeMarker'],
  data: ['PostgreSQL', 'MS SQL Server', 'Apache Kafka', 'Confluent Kafka Connectors', 'CDC'],
  delivery: ['Kubernetes', 'Jenkins CI/CD', 'Git', 'Postman', 'Mockito', 'Integration Testing'],
  other: ['.NET', 'WPF', 'Random Forest', 'CNN', 'Transformer']
})
