<template>
  <div class="container">
    <div class="col-md-6">
      <h2 class="my-3">Edit Post:</h2>
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
          <textarea class="form-control" v-model.lazy="form.body" rows="6">
          </textarea>
          <div class="form-text text-danger">
            {{ form.bodyErrorText }}
          </div>
        </div>
        <button type="submit" class="btn btn-dark" :disabled="loading">
          <div class="spinner-border" role="status" v-if="loading"></div>
          Edit Post
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
import { useRoute } from "vue-router";
export default {
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });
    const route = useRoute();

    const loading = ref(false);
    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // post.value = response.data;
          form.title = response.data.title;
          form.body = response.data.body;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPost();
    const updatePost = () => {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function () {
          loading.value = false;
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
        updatePost();
        loading.value = true;
      }
    };
    return { form, validate, loading };
  },
};
</script>

<style></style>
