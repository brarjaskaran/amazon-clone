import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZEdWVebi39uiwrWhheArrbVpsNrHNclU",
  authDomain: "clone-8f1ad.firebaseapp.com",
  databaseURL: "https://clone-8f1ad.firebaseio.com",
  projectId: "clone-8f1ad",
  storageBucket: "clone-8f1ad.appspot.com",
  messagingSenderId: "451487587420",
  appId: "1:451487587420:web:27332f4cb0ab69a2659a99",
  measurementId: "G-9LJ76ET13E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
