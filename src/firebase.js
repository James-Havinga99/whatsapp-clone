import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBq_FzOOkRSwvDqhYId7ut0E9egKtrFpys",
    authDomain: "whatsapp-clone-245db.firebaseapp.com",
    projectId: "whatsapp-clone-245db",
    storageBucket: "whatsapp-clone-245db.appspot.com",
    messagingSenderId: "609900300358",
    appId: "1:609900300358:web:6aaf6710a8dd5eafbde247",
    measurementId: "G-67ME8QYDP8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;