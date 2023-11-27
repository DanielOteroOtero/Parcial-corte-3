import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCw_paCUyqhg53Is6bU7N9rnz9vXaiUnqk",
  authDomain: "bibliotecalogin-9033e.firebaseapp.com",
  projectId: "bibliotecalogin-9033e",
  storageBucket: "bibliotecalogin-9033e.appspot.com",
  messagingSenderId: "404558113735",
  appId: "1:404558113735:web:a26f97ac8853844b1d07e2"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

const db=app.firestore()
const auth=app.auth()

export {db, auth}