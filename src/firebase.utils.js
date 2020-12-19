import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBC1yuuMQNyainTS9hC_rb7jH0fTUBpmFQ",
    authDomain: "signin-db-14f8e.firebaseapp.com",
    projectId: "signin-db-14f8e",
    storageBucket: "signin-db-14f8e.appspot.com",
    messagingSenderId: "1010989830910",
    appId: "1:1010989830910:web:384d3237dd06085fee8baf",
    measurementId: "G-HLG5N6WHZK"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth()
// Assigning your firebase firestore library
export const firestore = firebase.firestore()

const createUserProfileDocument = (userAuth, additionalData)=>{
    const userRef = firestore.collection('users')
    console.log(userRef)
}
createUserProfileDocument()
// Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

// Setting the parameters to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

// Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase