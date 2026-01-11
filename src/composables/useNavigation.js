import { ref } from 'vue'

const currentPage = ref('home')

export function useNavigation() {
  const navigateTo = (page) => {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    currentPage,
    navigateTo
  }
}
