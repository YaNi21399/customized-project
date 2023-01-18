<template>
  <Navbar />
  <div class="container">
    <h1>收藏列表</h1>
    <div class="row">
      <div v-for="(item, key) in favList" :key="item.title" class="col-4">
        <div class="card">
          <div class="card-body d-flex flex-column">
            <button
              @click="deleteFav(key)"
              type="button"
              class="btn btn-primary align-self-end"
            >
              已收藏
            </button>
            <h5 class="h4 fw-bold card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseProject from "@/firebase/config";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  setup() {
    const favList = ref([]);

    const { db } = firebaseProject();
    const auth = getAuth();
    const uid = ref("");

    const getUser = () => {
      if (auth.currentUser != null) {
        uid.value = auth.currentUser.uid;
      }
    };

    const getSpot = async (id) => {
      const spotRef = doc(db, "spots", id);
      await getDoc(spotRef).then((doc) => {
        favList.value.push({ ...doc.data() });
      });
    };

    let favArr = [];
    const getFav = async () => {
      const docRef = doc(db, "favList", uid.value);
      await getDoc(docRef).then((doc) => {
       favArr = Object.values(doc.data());
        for (let i = 0; i < favArr.length; i++) {
          getSpot(favArr[i]);
        }
      });
    };

    const deleteFav = async (index) => {
      favList.value.splice(index, 1)
      favArr.splice(index, 1);
      const favObject = Object.assign({}, favArr);
      await setDoc(doc(db, "favList", uid.value), favObject)
    }

    onMounted(() => {
      getUser();
      getFav();
    });
    return { favList, deleteFav };
  },
};
</script>

<style lang="scss" scoped>
</style>