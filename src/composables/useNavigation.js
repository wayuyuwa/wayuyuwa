import { ref } from 'vue'
import { useRouter } from 'vue-router'

const currentPage = ref('home')

export function useNavigation() {
  const router = useRouter()

  const navigateTo = (page) => {
    currentPage.value = page
    router.push({ name: page })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    currentPage,
    navigateTo
  }
}
