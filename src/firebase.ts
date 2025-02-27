import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const db = getFirestore(app)

export const signup = async (name:any, email:any, password:any) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const userDetails = res.user;
        await addDoc(collection(db, "user"), {
            uid: userDetails.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error:any) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

export const login = async (email:any, password:any) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error:any) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))

    }
}

export const logout = () => {
    signOut(auth)
}

