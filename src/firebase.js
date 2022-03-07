import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAKC74KOnetQkzwP-92CKhyD0H5aH143fo",
  authDomain: "admin-page-94829.firebaseapp.com",
  databaseURL: "https://admin-page-94829-default-rtdb.firebaseio.com",
  projectId: "admin-page-94829",
  storageBucket: "admin-page-94829.appspot.com",
  messagingSenderId: "521771768084",
  appId: "1:521771768084:web:8d2fba35ca96dcb47fca01",
  measurementId: "G-LP36XETSZJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
