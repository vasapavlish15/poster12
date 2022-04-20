import {
    useEffect,
    useState
} from "react";
import {
    initializeApp
} from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes
} from "firebase/storage";
import {
    async
} from "@firebase/util";

const firebaseConfig = {
    apiKey: "AIzaSyDGtCTdh6fpRpdo-nxHYMHJ2mC76-6UkpY",
    authDomain: "poster-32ee6.firebaseapp.com",
    projectId: "poster-32ee6",
    storageBucket: "poster-32ee6.appspot.com",
    messagingSenderId: "939778671559",
    appId: "1:939778671559:web:af6d5e5b0020e007d00fe2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export function singInWithGoogle() {
    signInWithPopup(auth, new GoogleAuthProvider());
}

export function singup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
};

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
};

export function logout() {
    return signOut(auth);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });
        return unsub;
    }, []);

    return currentUser;
}

export async function upload(file, currentUser, setLoading) {
    const fileRef = ref(storage, currentUser.uid + '.png');

    setLoading(true);

    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, {
        photoURL
    });

    setLoading(false);
    alert("Uploaded file!");
}