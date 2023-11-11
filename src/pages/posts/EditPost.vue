<template>
  <div class="container">
        <router-link :to="{ name: 'home' }" class="btn btn-primary mt-5 mx-2">
          Back
        </router-link>
    <div v-if="pageLoading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

    <div v-else class="col-md-6">
      <h2 class="my-5">Edit Post :</h2>

      <FormView
        @formData="updatePost"
        :button-loading="loading"
        button-text="Edit Post"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import FormView from "@/components/posts/FormView.vue";
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";

export default {
  components: {
    FormView,
  },
  setup() {
    const loading = ref(false);
    const pageLoading = ref(true);
    const post = ref({});
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          post.value = response.data;
          pageLoading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getPost();

    function updatePost(formData) {
      loading.value = true;
      console.log();
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post update successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { updatePost, loading, post, pageLoading };
  },
};
</script>

<style></style>
