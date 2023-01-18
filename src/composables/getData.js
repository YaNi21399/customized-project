import { getDocs } from "firebase/firestore";
import firebaseProject from "@/firebase/config";
import { ref } from 'vue';

const getData = () => {
  const { colRef } = firebaseProject();

  const spots = ref([])

  const load = () => {
    spots.value = []
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          spots.value.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return { spots, load }
}
export default getData