<template>
  <Navbar />
  <div class="home container">
    <main>
      <h1 class="h3 mb-4">景點列表</h1>
      <div class="row">
        <div v-for="spot in spots" :key="spot.title" class="col-4">
          <div class="card">
            <div class="card-body d-flex flex-column">
              <router-link
                :to="`/single/${spot.id}`"
                class="card-link align-self-end">
                延伸閱讀
              </router-link>
              <h5 class="h4 fw-bold card-title">{{ spot.title }}</h5>
              <p class="card-text">{{ spot.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import getData from "../composables/getData";
import { onMounted } from "vue";

import Navbar from "../components/Navbar.vue";

export default {
  name: "HomeView",
  components: { Navbar },
  setup() {
    const { spots, load } = getData();

    onMounted(() => {
      load();
    });

    return { spots };
  },
};
</script>
