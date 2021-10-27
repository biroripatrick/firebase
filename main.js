


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGEu69ro4DQdqP9aCvxcuzM7LhAYBrYGM",
  authDomain: "online-e-commerce-system.firebaseapp.com",
  projectId: "online-e-commerce-system",
  storageBucket: "online-e-commerce-system.appspot.com",
  messagingSenderId: "463830479547",
  appId: "1:463830479547:web:b2ecd5084d3fa97edc6f9e",
  measurementId: "G-B2N15XW9QS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
let form = document.querySelector("#user");
let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let Age = document.getElementById("Age");
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

document.getElementById('btnsubmit').addEventListener('click',async function(e){
e.preventDefault();
const fname=document.getElementById('fname').value;
const lname=document.getElementById('lname').value;
const  age = document.getElementById("age").value;
let user={firstname:fname,lastname:lname,Age:age}
await db.collection('user').add(user);
document.getElementById('fname').value="";
document.getElementById('lname').value="";
document.getElementById('age').value="";
location.reload();
});
const userlist=document.getElementById('user-list');

//get users

db.collection("user")
.get()
.then(function(Snapshots) {
   Snapshots.docs.forEach(function(userDocument) {
   let userItem=document.createElement('li');
   userItem.innerHTML=userDocument.data().firstname+" "+userDocument.data().lastname+" "+userDocument.data().Age+"  "+"years old";
   userlist.appendChild(userItem);
   });
});