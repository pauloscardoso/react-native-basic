import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app"

//configuração inicial Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpj-SjsfSSchuQsq3OQF7YGjfNX5qQKSw",
  authDomain: "appsujeitoprogramador.firebaseapp.com",
  databaseURL: "https://appsujeitoprogramador-default-rtdb.firebaseio.com",
  projectId: "appsujeitoprogramador",
  storageBucket: "appsujeitoprogramador.appspot.com",
  messagingSenderId: "526164271583",
  appId: "1:526164271583:web:4371bff0a5df142167e46a",
  measurementId: "G-7E26HH9387"
};

// Initialize Firebase
//Verificando se já tem um app Firebase inicializado
if(!firebase.apps.length){
  const app = initializeApp(firebaseConfig);
}

export default firebase;