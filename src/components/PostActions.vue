<template>
  <div class="flex justify-between w-full bg-[#cdc9be]">
    <div class="w-[50%] py-5 px-10">
      <h3 class="text-center mb-5 uppercase font-bold text-[#403837]">Liked Posts</h3>
      <ul>
        <li
          class="my-5 text-xl font-bold text-[#966c69] uppercase bg-[#efeeec] p-5 shadow-sm rounded-sm"
          v-for="post in likedPosts"
          :key="post.id"
        >
          {{ post.title }}
          <button
            class="mx-10 text-sm uppercase text-[#403837] hover:text-[#979592]"
            @click="returnToMainList(post.id, 'likedPosts')"
          >
            return
          </button>
        </li>
      </ul>
    </div>
    <div class="w-[50%] py-5 px-10">
      <h3 class="text-center mb-5 uppercase font-bold text-[#403837]">Disliked Posts</h3>
      <ul>
        <li
          class="my-5 text-xl font-bold text-[#966c69] uppercase bg-[#efeeec] p-5 shadow-sm"
          v-for="post in dislikedPosts"
          :key="post.id"
        >
          {{ post.title }}
          <button
            class="mx-10 text-sm uppercase text-[#403837] hover:text-[#979592]"
            @click="returnToMainList(post.id, 'dislikedPosts')"
          >
            Return
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { usePostsStore } from '../stores/postsStore'

export default {
  name: 'PostActions',
  setup() {
    const { likedPosts, dislikedPosts, returnToMainList } = usePostsStore()

    return {
      likedPosts,
      dislikedPosts,
      returnToMainList
    }
  }
}
</script>
