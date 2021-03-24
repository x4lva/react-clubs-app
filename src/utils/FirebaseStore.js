import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCV1eAVzauTbilzZokzrXrSMtELnHLv5ho",
    authDomain: "react-clubs-app.firebaseapp.com",
    databaseURL: "https://react-clubs-app-default-rtdb.firebaseio.com",
    projectId: "react-clubs-app",
    storageBucket: "react-clubs-app.appspot.com",
    messagingSenderId: "304830719535",
    appId: "1:304830719535:web:fd14e2095d7a0a6ec288da",
    measurementId: "G-3PHRQSDX7Y",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
