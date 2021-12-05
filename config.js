import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyCoYaYJWiLCMCs_8gPX06_kREZ3V68lauo",
        authDomain: "voting-app-147b7.firebaseapp.com",
        projectId: "voting-app-147b7",
        storageBucket: "voting-app-147b7.appspot.com",
        messagingSenderId: "628493535239",
        appId: "1:628493535239:web:417400a6c5a2d965c182a2"
      };
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();