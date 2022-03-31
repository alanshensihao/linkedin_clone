import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAcZGIJZ-iEsdVsM-r61CitrqxFvfQYdLY",
    authDomain: "linkedin-clone-65890.firebaseapp.com",
    projectId: "linkedin-clone-65890",
    storageBucket: "linkedin-clone-65890.appspot.com",
    messagingSenderId: "965237115654",
    appId: "1:965237115654:web:be78a7ece821ab5f99ec87",
    measurementId: "G-J173VD6H57"
  };

  // initialize the firebase App
  const firebaseApp = initializeApp(firebaseConfig);

  // db & auth
  const db = getFirestore(firebaseApp);
  const auth = getAuth();
  
  const provider = new GoogleAuthProvider();
  const storage = getStorage();

  export { auth, provider, storage };
  export default db;