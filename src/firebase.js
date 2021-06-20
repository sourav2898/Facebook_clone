import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNHa8db2Q75N8MLSe3yDFkV4eiX2bYVp0",
  authDomain: "fbclone-85b14.firebaseapp.com",
  projectId: "fbclone-85b14",
  storageBucket: "fbclone-85b14.appspot.com",
  messagingSenderId: "280416783509",
  appId: "1:280416783509:web:8f0828d823bee4c1bf5f9c",
  measurementId: "G-VZDK3847QJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
