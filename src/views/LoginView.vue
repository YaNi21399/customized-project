<template>
  <Navbar />
  <div class="login container">
    <h2>登入</h2>
    <form>
      <div class="mb-3">
        <label for="inputEmail1" class="form-label">信箱</label>
        <input
          v-model="temp.email"
          type="email"
          class="form-control"
          id="inputEmail1"
        />
      </div>
      <div class="mb-3">
        <label for="inputPassword1" class="form-label">密碼</label>
        <input
          v-model="temp.password"
          type="password"
          class="form-control"
          id="inputPassword1"
        />
      </div>
      <button @click="login()" type="submit" class="btn btn-primary">
        登入
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  setup() {
    const temp = ref({
      email: "",
      password: "",
    });

    const router = useRouter()

    const auth = getAuth();
    const login = () => {
      signInWithEmailAndPassword(auth, temp.value.email, temp.value.password)
        .then((res) => {
          temp.value = {}
          if(res.user.uid === 'SlvB03EGDqgkOjBcbIOdn69rKOo2') {
            router.push('/back')
          } else {
            router.push('/')
          }
        })
        .catch((err) => console.log(err.message));
    };
    return { temp, login };
  },
};
</script>

<style lang="scss" scoped>
</style>