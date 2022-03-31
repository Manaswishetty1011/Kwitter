//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCpibbpaAIttoUIv8I_IS0uWFeOgZkkhCA",
      authDomain: "kwitter-fc545.firebaseapp.com",
      projectId: "kwitter-fc545",
      storageBucket: "kwitter-fc545.appspot.com",
      messagingSenderId: "505054684975",
      appId: "1:505054684975:web:c9b581c34ac86d112d63da"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig)
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Like:0,
            Message:msg,
            Name:user_name,
      })
      document.getElementById("msg").value="";
}