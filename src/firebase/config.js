import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    collection
} from "firebase/firestore";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAET557B_CU27vn3FS6mnNiHIlD_dgemG0",
    authDomain: "customized-project-5f2c5.firebaseapp.com",
    projectId: "customized-project-5f2c5",
    storageBucket: "customized-project-5f2c5.appspot.com",
    messagingSenderId: "166273618611",
    appId: "1:166273618611:web:921bc351688ecc070616c6",
    measurementId: "G-EG6EMQL1XH",
};

initializeApp(firebaseConfig);

const firebaseProject = () => {
   
    const db = getFirestore()
    const auth = getAuth()
    
    const colRef = collection(db, 'spots')

    return { db, auth, colRef }
}

export default firebaseProject