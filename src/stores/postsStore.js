import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    likedPosts: [],
    dislikedPosts: [],
    currentPage: 1,
    postsPerPage: 5,
    totalPosts: 0
  }),

  actions: {
    async fetchPosts() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=${this.postsPerPage}&_page=${this.currentPage}`
        )
        this.posts = response.data

        this.totalPosts = Number(response.headers['x-total-count'])
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    },

    likePost(postId) {
      const postIndex = this.posts.findIndex((post) => post.id === postId)
      const likedPost = this.posts.splice(postIndex, 1)[0]
      this.likedPosts.push(likedPost)

      this.posts = this.posts.filter((post) => post.id !== postId)
    },

    dislikePost(postId) {
      const postIndex = this.posts.findIndex((post) => post.id === postId)
      const dislikedPost = this.posts.splice(postIndex, 1)[0]
      this.dislikedPosts.push(dislikedPost)

      this.posts = this.posts.filter((post) => post.id !== postId)
    },

    async nextPage() {
      if (this.currentPage * this.postsPerPage < this.totalPosts) {
        this.currentPage++
        await this.fetchPosts()
      }
    },

    async prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        await this.fetchPosts()
      }
    },
    returnToMainList(postId, listName) {
      const list = this[listName]
      const postIndex = list.findIndex((post) => post.id === postId)
      const returnedPost = list.splice(postIndex, 1)[0]
      this.posts.push(returnedPost)
    }
  }
})
