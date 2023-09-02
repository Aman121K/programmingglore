import firebase from "firebase";
var firebaseConfig = {};

firebaseConfig = {
  apiKey: "AIzaSyAx8qFGugf0VSweKv5CbWI-nTHsqgK-oqc",
  authDomain: "programmingglore-5b86c.firebaseapp.com",
  projectId: "programmingglore-5b86c",
  storageBucket: "programmingglore-5b86c.appspot.com",
  messagingSenderId: "296694914422",
  appId: "1:296694914422:web:0b7a1ff99549e82bed6e57",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
