<template>
  <div class="container">
    <div class="col-md-6">
      <h2 class="mb-3">Create Post:</h2>
      <form @submit.prevent="validate">
        <div class="form-group mb-3">
          <label class="form-lable">Title:</label>
          <input type="text" class="form-control" v-model.lazy="form.title" />
          <div class="form-text text-danger">
            {{ form.titleErrorText }}
          </div>
        </div>
        <div class="form-group mb-3">
          <label class="form-lable">Body:</label>
          <textarea class="form-control" v-model.lazy="form.body"> </textarea>
          <div class="form-text text-danger">
            {{ form.bodyErrorText }}
          </div>
        </div>
        <button type="submit" class="btn btn-dark" :disabled="loading">
          <div class="spinner-border" role="status" v-if="loading"></div>
          Create Post
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import { ref } from "vue";
import Swal from "sweetalert2";
export default {
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });
    const loading = ref(false);
    const createPost = () => {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function () {
          loading.value = true;
          Swal.fire({
            title: "Thanks",
            text: "Post created successfully",
            icon: "Success",
            confirmButtonText: "OK",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    const validate = () => {
      if (form.title === "") {
        form.titleErrorText = "Please enter a title";
      } else {
        form.titleErrorText = "";
      }
      if (form.body === "") {
        form.bodyErrorText = "Please enter a body";
      } else {
        form.bodyErrorText = "";
      }
      if (form.title !== "" && form.body !== "") {
        createPost();
        loading.value = true;
      }
    };
    return { form, validate, loading };
  },
};
</script>

<style></style>
