<template>
  <AppHeader />
  
  <router-view></router-view>
</template>

<script>
import AppHeader from "./components/sections/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style></style>
