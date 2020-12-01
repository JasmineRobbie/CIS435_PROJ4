

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      //if User is signedIn 
      //Go with this information the next paage.
      
       var user = firebase.auth().currentUser;

        if(user != null){

      var email_id = user.email;
      document.getElementById("headerHello").innerHTML = "Welcome User : " + email_id;
            
  }
  }else {
    // No user is signed in.
      
      
  }
});



function registrationForm() {
document.getElementById("form_header").textContent = "Register";
    var submitButton = document.getElementById("submitButton")
    console.log("registerForm")
    
    var formDiv = document.getElementById("formDiv")
    formDiv.style.visibility = "visible"
    
   
    submitButton.addEventListener("click", function (){
                                  //CreateUser
                    
        
        createUser();
        
        
        firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User logged in already *or has just logged in.
    var userUid = user.uid;
      firebase.database().ref(userUid).set('');
      
  } else {
    // User not logged in or has just logged out.
  }
});//    var currentUserId =  user.uid;
//    rootReference.child(currentUserId).set('');
//   
  
//    
    
        //Go onto the next page
        
        
        // location.reload();
                                  });
}

function loginForm() {
     
    var formDiv = document.getElementById("formDiv")
    formDiv.style.visibility = "visible"
    
     document.getElementById("form_header").textContent = "Login";
    var submitButton = document.getElementById("submitButton")
    console.log("loginForm")
    submitButton.addEventListener("click", function (){
                                  //Login user
        login();
        //Intent that sends the user to the other page
        
        
        
        
//        location.reload();
                                  });
    
    

    
}

function login() {
  var email = document.getElementById("userEmail").value;
        var password = document.getElementById("password").value;
    
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

      
    window.alert("Error : " + errorMessage);

    // ...
  });
    console.log(password + " is logged in successfully")
}


function createUser() {
    var email = document.getElementById("userEmail").value;
        var password = document.getElementById("password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    
//    var rootReference = firebase.database().ref();
    
    
   
    
}

function logOut() {
    firebase.auth().signOut().then(function() {
        
        document.getElementById("headerHello").innerHTML = "Please login or register";
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
}