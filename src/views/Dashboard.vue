<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-2">
    <div class="container flex-start">
      <router-link to="/back" class="navbar-brand text-light h2 m-0 me-3"
        >這裡是主控台</router-link
      >
      <ul class="navbar-nav mb-2 mb-lg-0">
        <router-link to="/" class="text-light align-self-center text-decoration-none"
          >回首頁</router-link
        >
        <li class="nav-item">
          <button
            @click="logout()"
            type="button"
            class="btn btn-secondary ms-2"
          >
            登出
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>
  
  <script>
import handleLogout from "../composables/handleLogout";

export default {
    name: 'dashboard-view',
  setup() {
    const { logout } = handleLogout();

    return { logout };
  },
};
</script>
  
  <style lang="scss" scoped>
</style>