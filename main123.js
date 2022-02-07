// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBwK1MUB-brie7GZjHTo74_Hw2rNHk0sj0",
    authDomain: "spice-f8d8a.firebaseapp.com",
    databaseURL: "https://spice-f8d8a-default-rtdb.firebaseio.com",
    projectId: "spice-f8d8a",
    storageBucket: "spice-f8d8a.appspot.com",
    messagingSenderId: "420607184889",
    appId: "1:420607184889:web:e576be1c15eb239c1f3728",
    measurementId: "G-LRRP3XSK27"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('spice');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject =getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email,subject, message);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      subject:subject,
      message:message
    });
  }