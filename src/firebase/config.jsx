import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBeThDmxtkDx25QEgafNoNqBSNkpnASqUc",
  authDomain: "minidevblogicoma.firebaseapp.com",
  projectId: "minidevblogicoma",
  storageBucket: "minidevblogicoma.appspot.com",
  messagingSenderId: "838985901962",
  appId: "1:838985901962:web:954bb342a62dedd99aca73",
  measurementId: "G-TYX9XKQDER"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}