import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxB41poaIYO39f6I6eotJrYGT1A-3IxF0",
  authDomain: "kairobyte.firebaseapp.com",
  projectId: "kairobyte",
  storageBucket: "kairobyte.appspot.com",
  messagingSenderId: "399082907499",
  appId: "1:399082907499:web:d3c18d283212a3ff518e2e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("submit").addEventListener("click", submit);

async function submit() {
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isCorrect = emailPattern.test(email);
  //console.log(Date.now());
  //console.log(isCorrect);
  if (isCorrect){
    try {
      const docRef = await addDoc(collection(db, "pre-signup"), {
        email: email,
        time: Date.now(),
      });
      //console.log("Document written with ID: ", docRef.id);
      var submitted = true;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    if(submitted){
      document.getElementById("out-sucess").style.display = 'inline';
      document.getElementById("out-error").style.display = 'none';
      document.getElementById("out-sucess").innerHTML = "E-mail submitted sucessfully!!";
      document.getElementById("email").style.display = 'none';
      document.getElementById("submit").style.display = 'none';
      document.getElementById("submit-another").style.display = 'inline';
    } else {
      document.getElementById("out-error").style.display = 'inline';
    }
  } else {
    // console.log("Email not valid!");
    document.getElementById("out-error").style.display = 'inline';
    document.getElementById("out-sucess").style.display = 'none';
    document.getElementById("out-error").innerHTML = "Enter a valid E-mail!!";
  }
}

document.getElementById("submit-another").addEventListener("click", function() {
  document.getElementById("email").style.display = 'inline';
  document.getElementById("email").value = "";
  document.getElementById("submit").style.display = 'inline';
  document.getElementById("submit-another").style.display = 'none';
})