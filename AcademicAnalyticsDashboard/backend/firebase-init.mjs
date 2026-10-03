// firebase-init.mjs
// ---------------------------------------------------------------------------
// Fill in YOUR Firebase project config below (Firebase Console -> Project
// Settings -> General -> "Your apps" -> SDK setup and configuration).
// Then enable, in the Firebase Console:
//   - Authentication -> Sign-in method -> Email/Password (enable it)
//   - Firestore Database -> Create database (production mode)
// and deploy firestore.rules (see README.md) to that project.
// ---------------------------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, updateProfile
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore, collection, doc, setDoc, addDoc, updateDoc, deleteDoc,
  onSnapshot, getDoc, getDocs, query, serverTimestamp, writeBatch
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Detect placeholder config so the app can fall back to local demo mode
// instead of throwing when someone opens this file before configuring it.
export const FIREBASE_CONFIGURED = firebaseConfig.apiKey !== "YOUR_API_KEY";

let app = null, auth = null, db = null;
if (FIREBASE_CONFIGURED) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}

export {
  app, auth, db,
  onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile,
  collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDoc, getDocs, query, serverTimestamp, writeBatch
};
