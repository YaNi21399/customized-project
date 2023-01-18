<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="inputTitle" class="form-label">標題</label>
        <input
          v-model="temp.title"
          type="text"
          class="form-control"
          id="inputTitle"
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">內容</label>
        <textarea
          v-model="temp.description"
          class="form-control"
          placeholder="景點敘述"
          id="description"
          style="height: 100px"
        ></textarea>
      </div>
      <button @click="handleUpdate()" type="submit" class="btn btn-primary">
        編輯
      </button>
    </form>
  </div>
</template>
  
  <script>
import firebaseProject from "../firebase/config";
import getSingle from "../composables/getSingle";
import { doc, updateDoc } from "firebase/firestore";
import { ref, watchEffect, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const { db } = firebaseProject();

    const route = useRoute();
    const router = useRouter()
    const id = route.params.id;

    const { data, load } = getSingle(id);

    const temp = ref({
      title: '',
      description: ''
    })

    watchEffect(() => {
      if(data.value.title) {
        temp.value = { title: data.value.title, description: data.value.description}
      }
    })

    const handleUpdate = () => {
      const docRef = doc(db, 'spots', id)
      updateDoc(docRef, {
        title: temp.value.title,
        description: temp.value.description,
      })
        .then(() => router.push('/back'))
    };

    onMounted(() => {
      load();
    });
    return { temp, data, handleUpdate };
  },
};
</script>
  
  <style lang="scss" scoped>
</style>