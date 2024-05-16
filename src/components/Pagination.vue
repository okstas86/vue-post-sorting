<template>
  <div class="flex items-center justify-center gap-5">
    <button @click="prevPage" :disabled="currentPage === 1">
      <i class="bi bi-arrow-left"></i>
    </button>
    <span class="text-md font-bold">{{ currentPage }}</span>
    <button @click="nextPage"><i class="bi bi-arrow-right"></i></button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { usePostsStore } from '../stores/postsStore'

export default {
  setup() {
    const postsStore = usePostsStore()

    const currentPage = computed(() => postsStore.currentPage)

    const nextPage = async () => {
      await postsStore.nextPage()
    }

    const prevPage = async () => {
      if (currentPage.value > 1) {
        await postsStore.prevPage()
      }
    }

    return {
      currentPage,
      nextPage,
      prevPage
    }
  }
}
</script>
