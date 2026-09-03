// ===============================
// MATHX - FIREBASE CONFIG
// ===============================

import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ===============================
// FIREBASE CONFIG
// ===============================

const firebaseConfig = {
  apiKey: "AIzaSyC-esTPncreuGqV-rGv-Mijqz5LD6tdA",
  authDomain: "mathx-3d2e9.firebaseapp.com",
  projectId: "mathx-3d2e9",
  storageBucket: "mathx-3d2e9.firebasestorage.app",
  messagingSenderId: "370300342771",
  appId: "1:370300342771:web:bb671dce11f4a5a92d0286"
};


// ===============================
// INITIALIZE
// ===============================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


// ===============================
// EXPORT
// ===============================

export {
  auth,
  db,

  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,

  getDoc,
  setDoc,
  doc,

  collection,
  getDocs
};