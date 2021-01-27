import firebase from 'firebase/app';
import 'firebase/firestore';

const miConfiguracion = {
    apiKey: "AIzaSyDk6lsR5ejqn-HM5dsn3V9IbfIkj3Q9KWU",
    authDomain: "curso-react-luis-garcia.firebaseapp.com",
    projectId: "curso-react-luis-garcia",
    storageBucket: "curso-react-luis-garcia.appspot.com",
    messagingSenderId: "800599643248",
    appId: "1:800599643248:web:ad03ef2db26f13429190b5",
    measurementId: "G-WWQZN5SQSW"
  }
const app =   firebase.initializeApp(miConfiguracion);


  export const firestore = firebase.firestore(app)
