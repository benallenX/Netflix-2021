import firebase from 'firebase'

const firebaseConfig = {
        apiKey: "AIzaSyCSh-NJRbQZAIVjHq4YqZ_jj5p0Nt6oN7I",
        authDomain: "netflix-2021-ff3b7.firebaseapp.com",
        projectId: "netflix-2021-ff3b7",
        storageBucket: "netflix-2021-ff3b7.appspot.com",
        messagingSenderId: "1834679976",
        appId: "1:1834679976:web:865edd77a13d1e92bbcc9d"
      };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth}
export default db