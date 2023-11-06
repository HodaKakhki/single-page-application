<template>
  <div class="card">
    <div class="card-header">
      <route-link :to="{ name: 'postId', params: { id: post.id } }">
        Title:{{ post.title }}
      </route-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Body :{{ post.body }}</li>
    </ul>
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
