<template>
  <div class="container">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status"></div>
      <div v-else class="col-md-4 mt-5">
        <CardView :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import CardView from "../../components/users/CardView.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    CardView,
  },
  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();
    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          user.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUser();
    return { user };
  },
};
</script>

<style></style>
