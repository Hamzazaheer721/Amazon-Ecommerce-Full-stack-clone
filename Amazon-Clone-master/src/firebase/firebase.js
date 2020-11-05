import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCXCfH4TjGlhWmSW9_Nrv2jfymDEy4rynQ",
  authDomain: "clone-c4551.firebaseapp.com",
  databaseURL: "https://clone-c4551.firebaseio.com",
  projectId: "clone-c4551",
  storageBucket: "clone-c4551.appspot.com",
  messagingSenderId: "751070136300",
  appId: "1:751070136300:web:bc04a62fad2c80981f62c9",
  measurementId: "G-NT39CDBS0L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};