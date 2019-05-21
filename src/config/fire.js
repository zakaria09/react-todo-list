  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBB0_xSLxJWGm9J7Q-E4NFV5x7UXvUFIBc",
    authDomain: "zak-todo-list.firebaseapp.com",
    databaseURL: "https://zak-todo-list.firebaseio.com",
    projectId: "zak-todo-list",
    storageBucket: "zak-todo-list.appspot.com",
    messagingSenderId: "354675955531",
    appId: "1:354675955531:web:2f300e147dc83691"
  };

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire; 