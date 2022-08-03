import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyAss6AUBncP_dLwzIwO3_gA2tU_1GCt3Ck",
  authDomain: "sigma-tenant-afea5.firebaseapp.com",
  databaseURL: "https://sigma-tenant-afea5-default-rtdb.firebaseio.com",
  projectId: "sigma-tenant-afea5",
  storageBucket: "sigma-tenant-afea5.appspot.com",
  messagingSenderId: "169603101358",
  appId: "1:169603101358:web:cd6ea451ef21c1fa0f733f"
};


const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
export const database = getDatabase(app);