<template>
  <div class="container">
    <div class="col-md-6">
      <router-link :to="{ name: 'home' }" class="btn btn-primary mt-5 mx-2">
        Back
      </router-link>
      <h2 class="my-3">Create Post:</h2>
      <FormView
        @formData="createPost"
        :button-loading="loading"
        button-text="Create Post"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from "vue";

import FormView from "@/components/posts/FormView.vue";
export default {
  components: { FormView },
  setup() {
    const loading = ref(false);

    function createPost(formData) {
      loading.value = true;
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: formData.title,
          body: formData.bady,
          userId: 1,
        })
        .then(function () {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post created successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { createPost, loading };
  },
};
</script>

<style></style>
