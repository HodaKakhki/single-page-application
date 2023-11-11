<template>
  <div class="container">
    <router-link :to="{ name: 'home' }" class="btn btn-primary mt-5 mx-2">
      Back
    </router-link>
    <div v-if="pageLoading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else class="col-md-6">
      <h2 class="my-5">Are You Sure Delete Your Post?!!</h2>
      <button @click="confirmDelete" class="btn btn-sm btn-danger me-4">
        Yes
      </button>

      <router-link :to="{ name: 'home' }" class="btn btn-sm btn-dark me-4"
        >No</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";

export default {
  components: {},

  setup() {
    const post = ref({});
    const loading = ref(true);
    const pageLoading = ref(false);
    const route = useRoute();
    const router = useRouter();

    const getPost = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.error("Error fetching post:", error);
        });
    };

    const deletePost = () => {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: "Success!",
            text: `Post ${route.params.id} deleted successfully`,
            icon: "success",
            confirmButtonText: "OK",
          });
          router.push({ name: "home" });
        })
        .catch(function (error) {
          console.error("Error deleting post:", error);
        });
    };

    const confirmDelete = () => {
      pageLoading.value = false;
      setTimeout(() => {
        deletePost();
        pageLoading.value = true;
      }, 1000);
    };
    getPost();
    return { post, loading, pageLoading, route, confirmDelete };
  },
};
</script>

<style></style>
