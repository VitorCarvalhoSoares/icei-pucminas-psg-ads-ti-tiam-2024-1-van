import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAA1pMaTwdPCywryeddMbuhX2ABu42wXGI",
  authDomain: "van-data-63089.firebaseapp.com",
  projectId: "van-data-63089",
  storageBucket: "van-data-63089.appspot.com",
  messagingSenderId: "901692074729",
  appId: "1:901692074729:web:e33fa82a0a50866d54de78",
  measurementId: "G-NX0LDXFMDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);