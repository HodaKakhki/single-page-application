<template>
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
    <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
      <div
        v-if="buttonLoading"
        class="spinner-border spinner-border-sm"
        role="status"
      >
        {{ buttonText }}
      </div>
      Edit Post
    </button>
  </form>
</template>

<script>
import { reactive } from "vue";
import { ref } from "vue";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object,
  },
  setup(props, { emit }) {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });
    const buttonLoading = ref(false);
    const setInput = () => {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    };
    setInput();
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
        buttonLoading.value = true;
        emit("formData", form);
      }
    };
    return { form, validate };
  },
};
</script>

<style></style>
