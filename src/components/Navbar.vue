<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <div class="container">
      <router-link to="/" class="navbar-brand">Logo</router-link>
      <ul v-if="isLogin === false" class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">登入</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/signup"
            type="button ms-2"
            class="btn btn-primary ms-2"
            >免費註冊</router-link
          >
        </li>
      </ul>
      <ul v-else-if="isLogin === true" class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/my-fav" class="btn btn-primary"
            >收藏列表</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/back" v-if="isAdmin" class="btn btn-primary ms-2"
            >主控台</router-link
          >
        </li>
        <li class="nav-item">
          <button
            @click="
              logout();
              isLogin = !isLogin;
            "
            type="button"
            class="btn btn-secondary ms-2"
          >
            登出
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { getAuth } from "firebase/auth";
import handleLogout from "../composables/handleLogout";
import { ref, onMounted } from "vue";
export default {
  name: "navbarComp",
  setup() {
    const { isLogin, logout } = handleLogout();
    const isAdmin = ref(false);

    const auth = getAuth();
    const getUser = async () => {
      switch (auth.currentUser.uid) {
        case "SlvB03EGDqgkOjBcbIOdn69rKOo2":
          isAdmin.value = true;
          isLogin.value = true;
          break;

        case null:
          isLogin.value = false;
          break;

        default:
          isLogin.value = true;
      }
    };

    onMounted(() => {
      getUser();
    });

    return { isLogin, logout, isAdmin };
  },
};
</script>

<style lang="scss" scoped>
</style>