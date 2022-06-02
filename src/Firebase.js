import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVbS_CdRytCzpNbRlwMPpNNjBkjSYrCnU",
  authDomain: "disney-78038.firebaseapp.com",
  projectId: "disney-78038",
  storageBucket: "disney-78038.appspot.com",
  messagingSenderId: "243137958953",
  appId: "1:243137958953:web:8f2e0d0c885a8a38de7838",
  measurementId: "G-HK2DJP60LZ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
