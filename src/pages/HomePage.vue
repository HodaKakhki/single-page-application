<template>
  <div class="container mt-5">
    <div class="row">
      <col-md-6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia
          autem minus facilis. Incidunt placeat quas commodi minima corrupti
          eaque ducimus omnis suscipit dicta nam fuga repellendus maxime, alias
          saepe?
        </p>
        <router-link :to="{ name: 'users' }" class="btn btn-dark"
          >Users</router-link
        >
        <!-- <router-link :to="{ name: 'posts' }" class="btn btn-light ms-3">Posts</router-link> -->
      </col-md-6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
