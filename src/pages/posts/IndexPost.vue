<template>
  <div class="container">
    <div class="row g-3">
      <div>
        <router-link :to="{ name: 'createPost' }" class="btn btn-dark mt-5">
          New Post
        </router-link>
      </div>
      <div v-if="loading" class="spinner-border" role="status">
      </div>
      <div v-else class="col-md-4 mt-5" v-for="post in posts" :key="post.id">
        <CardViewPost :post="post" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import CardViewPost from "../../components/posts/CardViewPost.vue";

export default {
  components: {
    CardViewPost,
  },
  setup() {
    const posts = ref({});
    const loading = ref(true);

    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPosts();
    return { posts, loading };
  },
};
</script>

<style></style>
