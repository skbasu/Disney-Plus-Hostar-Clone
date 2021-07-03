import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVwxrASI7p-ShOtxIO3fR3w-WW5wkg1ag",
    authDomain: "disney-plus-hotstar-clone.firebaseapp.com",
    projectId: "disney-plus-hotstar-clone",
    storageBucket: "disney-plus-hotstar-clone.appspot.com",
    messagingSenderId: "376835829174",
    appId: "1:376835829174:web:d9f174643edbcbca16a517"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
