import { getDoc, doc } from 'firebase/firestore'
import firebaseProject from '../firebase/config'
import { ref } from 'vue'

const getSingle = (id) => {

    const { db } = firebaseProject()
    const docRef = doc(db, 'spots', `${id}`)

    const data = ref({})

    const load = () => {
        getDoc(docRef)
            .then(doc => {
                data.value = doc.data()
            })
    }

    return { data, load }
}

export default getSingle