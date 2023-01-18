<template>
  <div class="back">

    <div class="container">
      <router-link to="/create" type="button" class="btn btn-primary mb-4">新增新景點</router-link>
      <table class="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col-2">#</th>
            <th scope="col-4">標題</th>
            <th scope="col-4">內容</th>
            <th scope="col-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(spot, key) in spots" :key="spot.id">
            <th scope="row">{{ key + 1 }}</th>
            <td>{{ spot.title }}</td>
            <td>{{ spot.description }}</td>
            <td>
              <div class="btn-group" role="group" aria-label="handle button">
                <button @click="handleDelete(spot.id)" type="button" class="btn btn-outline-danger">刪除</button>
                <router-link :to="`/edit/${spot.id}`" type="button" class="btn btn-primary">編輯</router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import getData from "../composables/getData";
import firebaseProject from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'
import { onMounted } from "vue";

export default {
  setup() {
    const { spots, load } = getData();

    const { db } = firebaseProject()

    const handleDelete = (id) => {
      const docRef = doc(db, 'spots', id)
        deleteDoc(docRef)
        .then(() => {
          load()
        })
    }

    onMounted(() => {
      load();
    });
    return { spots, handleDelete };
  },
};
</script>

<style lang="scss" scoped>
</style>