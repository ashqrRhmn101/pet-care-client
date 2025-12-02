// src/lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW6yVU1Qa5ve3mE7Yk_H0SMGWrsklZPds",
  authDomain: "pate-care-b42b2.firebaseapp.com",
  projectId: "pate-care-b42b2",
  storageBucket: "pate-care-b42b2.firebasestorage.app",
  messagingSenderId: "797934845766",
  appId: "1:797934845766:web:8ab8391eee5ea41f246f47"
};


// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

const app = initializeApp(firebaseConfig);

// auth export
export const auth = getAuth(app);
