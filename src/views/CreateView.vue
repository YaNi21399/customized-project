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
        <textarea v-model="temp.description" class="form-control" placeholder="景點敘述" id="description" style="height: 100px"></textarea>
      </div>
      <button @click="handleAdd()" type="submit" class="btn btn-primary">新增</button>
    </form>
  </div>
</template>

<script>
import firebaseProject from '../firebase/config'
import { addDoc } from 'firebase/firestore'
import { ref } from 'vue'
export default {
  setup() {
    const { colRef } = firebaseProject()

    const temp = ref({
        title: '',
        description: ''
    })

    const handleAdd = () => {
      addDoc(colRef, { title: temp.value.title, description: temp.value.description })
        .then(() => temp.value = {})
    }
    return { temp, handleAdd};
  },
};
</script>

<style lang="scss" scoped>
</style>