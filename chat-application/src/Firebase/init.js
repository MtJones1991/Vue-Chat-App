  import firebase from 'firebase';
  import firestore from 'firebase/firestore';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZbtYlVmpw7ySv3LUHh6DaV9r0cebk9Rw",
    authDomain: "chat-application-55386.firebaseapp.com",
    databaseURL: "https://chat-application-55386.firebaseio.com",
    projectId: "chat-application-55386",
    storageBucket: "chat-application-55386.appspot.com",
    messagingSenderId: "486252625729"
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseApp.firestore();