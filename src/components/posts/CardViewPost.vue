<template>
  <div class="card">
    <div class="card-header">
      <router-link :to="{ name: 'editPost', params: { id: post.id } }">{{
        post.title
      }}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Body :{{ post.body }}</li>
    </ul>
    <div class="card-footer">
      <button class="btn btn-sm btn-danger me-4">Delete</button>
      <router-link
        class="btn btn-sm btn-dark"
        :to="{ name: 'editPost', params: { id: post.id } }"
        >Edit</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style></style>
