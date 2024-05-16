<template>
  <div id="app" class="w-full">
    <posts-list />
    <post-actions />
    <pagination />
  </div>
</template>

<script>
import PostsList from './components/PostList.vue'
import Pagination from './components/Pagination.vue'
import PostActions from './components/PostActions.vue'

export default {
  components: {
    PostsList,
    Pagination,
    PostActions
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 40em) {
  html {
    font-size: 80%;
  }
}
</style>
