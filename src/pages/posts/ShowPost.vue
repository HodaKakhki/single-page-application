<template>
  <div class="container">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div v-else class="col-md-4 mt-5">
        <CardViewPost :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import CardViewPost from "@/components/posts/CardViewPost.vue";

export default {
  components: {
    CardViewPost,
  },
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getPost();
    return { post, loading, route };
  },
};
</script>

<style></style>
