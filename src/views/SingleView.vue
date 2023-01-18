<template>
  <Navbar />
  <div class="single container">
    <h1>單筆資料</h1>
    <div v-if="uid">
    <button @click.prevent="toggleFav()" v-if="isFav === false" type="button" class="btn btn-primary">
      加入收藏
    </button>
    <button @click.prevent="toggleFav()" v-else-if="isFav === true" type="button" class="btn btn-danger">
      取消收藏
    </button>
  </div>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script>
import { doc, setDoc, getDoc } from "firebase/firestore";
import firebaseProject from "@/firebase/config";
import { getAuth } from "firebase/auth";
import getSingle from "../composables/getSingle";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

import Navbar from "../components/Navbar.vue";
export default {
  name: "singleView",
  components: { Navbar },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const { data, load } = getSingle(id);

    const { db } = firebaseProject();
    const auth = getAuth();
    const uid = ref("");

    const getUser = () => {
      if (auth.currentUser != null) {
        uid.value = auth.currentUser.uid;
      }
    };

    const isFav = ref(false);
    let favList = [];

    const getFav = async () => {
      const docRef = doc(db, "favList", uid.value);
      await getDoc(docRef).then((doc) => {
        const arr = Object.values(doc.data());
        favList = arr;
        if (favList.includes(id)) {
          isFav.value = true;
        }
      });
    };

    const toggleFav = async () => {
      if (favList.includes(id)) {
        const index = favList.indexOf(id);
        favList.splice(index, 1);
      } else {
        favList.push(id);
      }
      const favObject = Object.assign({}, favList);
      await setDoc(doc(db, "favList", uid.value), favObject)
        .then(() => {
          isFav.value = !isFav.value;
        })
        .catch((err) => console.log(err.message));
    };

    onMounted(() => {
      load();
      getUser();
      getFav();
    });

    return { isFav, toggleFav, data, uid };
  },
};
</script>

<style lang="scss" scoped>
</style>