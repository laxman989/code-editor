import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYmSI9LfaRvOFs9Pe4nafVqjrxHt3xAmU",
  authDomain: "code-editor-946bc.firebaseapp.com",
  projectId: "code-editor-946bc",
  storageBucket: "code-editor-946bc.appspot.com",
  messagingSenderId: "958265474566",
  appId: "1:958265474566:web:1bba0e0e9eca4043bb4d87",
  measurementId: "G-N96G70KGWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
export default app;