import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA_nQi7h8Ssd02vnm71U6Qhky6jLVyMdDw",
    authDomain: "emergency-situation-hand-71f06.firebaseapp.com",
    projectId: "emergency-situation-hand-71f06",
    storageBucket: "emergency-situation-hand-71f06.appspot.com",
    messagingSenderId: "619864037692",
    appId: "1:619864037692:web:8865ed8423b3aab59ba639",
    measurementId: "G-WD57HN73XY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();





export default firebase