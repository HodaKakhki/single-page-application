<template>
  <div class="container">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status"></div>
      <div v-else class="col-md-4 mt-5">
        <CardViewPost :post="post" @delete-post="deletePost" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import CardViewPost from "@/components/posts/CardViewPost.vue";
import Swal from "sweetalert2";

export default {
  components: {
    CardViewPost,
  },

  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    const getPost = () => {
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
    };
    getPost();
    const deletePost = () => {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function () {
          Swal.fire({
            title: "Success!",
            text: "Post deleted successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        })
        .catch(function (error) {
          console.error("Error deleting post:", error);

          Swal.fire({
            title: "Error!",
            text: "Failed to delete post",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    };

    console.log(route.params.id);

    return { post, loading, route, deletePost };
  },
};
</script>

<style></style>
