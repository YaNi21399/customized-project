<template>
  <Navbar />
  <div class="login container">
    <h2>註冊</h2>
    <form>
      <div class="mb-3">
        <label for="inputEmail1" class="form-label">信箱</label>
        <input v-model="temp.email" type="email" class="form-control" id="inputEmail1" />
      </div>
      <div class="mb-3">
        <label for="inputPassword1" class="form-label">密碼</label>
        <input v-model="temp.password" type="password" class="form-control" id="inputPassword1" />
      </div>
      <button @click="signup()" type="submit" class="btn btn-primary">註冊帳號</button>
    </form>
  </div>
</template>
  
  <script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  setup() {

    const temp = ref({
      email: '',
      password: ''
    })

    const auth = getAuth()

      const signup = () => {
        createUserWithEmailAndPassword(auth, temp.value.email, temp.value.password)
            .then(() => temp.value = { email: '', password: ''})
            .catch(err => console.log(err.message) )
      };
   
    return {temp, signup};
  },
};
</script>
  
  <style lang="scss" scoped>
</style>