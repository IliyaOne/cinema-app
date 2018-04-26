import Rebase from 're-base';
import firebase from 'firebase';
let app = firebase.initializeApp({
    apiKey: "AIzaSyBv57a08rIpU9zGWY4dQ1WwoYA_tN9C_7s",
    authDomain: "cinema-app-9280c.firebaseapp.com",
    databaseURL: "https://cinema-app-9280c.firebaseio.com",
    projectId: "cinema-app-9280c",
    storageBucket: "cinema-app-9280c.appspot.com",
    messagingSenderId: "219036672163"
});
let base = Rebase.createClass(app.database());

export default base;
