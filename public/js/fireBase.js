
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBLNmQEuwfF-e32W3FOK1TyetTyNyIps_E",
  authDomain: "canon-1auth.firebaseapp.com",
  databaseURL: "https://canon-1auth.firebaseio.com",
  projectId: "canon-1auth",
  storageBucket: "gs://canon-1auth.appspot.com",
  messagingSenderId: "986529858863",
  appId: "1:986529858863:web:c25d0d66546b1ff5fa8dda",
  measurementId: "G-EQY1XYP30P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
auth = firebase.auth()
var storage = firebase.storage();
var storageRef = storage.ref();



