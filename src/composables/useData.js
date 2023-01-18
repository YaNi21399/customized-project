import firebaseProject from '../firebase/config'
import { doc, addDoc, deleteDoc } from 'firebase/firestore'


const useData = () => {
    const { db, colRef } = firebaseProject()

    const addData = (title, description) => {
        addDoc(colRef, { title, description })
    }

    const deleteData = (id) => {
        const docRef = doc(db, 'spots', id)
        deleteDoc(docRef)
    }

    return { addData, deleteData }
}

export default useData