const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
<script src="https://www.gstatic.com/firebasejs/4.1.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBs4tCR5bcSIia04MD2HWIM1aE2BHKu-JI",
    authDomain: "momo-c2b7e.firebaseapp.com",
    databaseURL: "https://momo-c2b7e.firebaseio.com",
    projectId: "momo-c2b7e",
    storageBucket: "momo-c2b7e.appspot.com",
    messagingSenderId: "454280533058"
  };
  firebase.initializeApp(config);
</script>