<template>
  <div class="container">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
      </div>
      <div v-else class="col-md-4 mt-5" v-for="user in users" :key="user.id">
        <CardView :user="user" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import CardView from "../../components/users/CardView.vue";
import { useRoute } from 'vue-router';

export default {
  components: {
    CardView,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);
    const route = useRoute();

    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    getUsers();
    return { users, loading, route };
  },
};
</script>

<style></style>
