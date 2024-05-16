<template>
  <div class="bg-[#cdc9be]">
    <ul class="p-5 rounded-sm">
      <li
        class="flex justify-between p-4 bg-gradient-to-r from-[#efeeec] to-[#dcd9d4] rounded-sm"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="w-[80%] h-30 shadow-sm">
          <p class="mb-5 ml-5 px-4 text-xl font-bold text-[#966c69] uppercase">
            {{ post.title }}
          </p>
          <p class="mb-5 px-4 text-[#5a5957]">
            {{ post.body }}
          </p>
        </div>
        <div class="flex w-[20%] items-center justify-center h-30">
          <button class="mx-5" @click="likePost(post.id)">
            <i class="bi bi-hand-thumbs-up-fill"></i>
          </button>
          <button class="mx-5" @click="dislikePost(post.id)">
            <i class="bi bi-hand-thumbs-down-fill"></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { usePostsStore } from '../stores/postsStore'

const postsStore = usePostsStore()

const posts = computed(() => {
  return postsStore.posts
})
const likePost = postsStore.likePost
const dislikePost = postsStore.dislikePost

onMounted(() => {
  postsStore.fetchPosts()
})
</script>

<style>
.bi {
  color: #966c69;
  font-size: 1.5rem;
}
.bi:hover {
  color: #cdc9be;
  transform: translateY(3px);
}
</style>
