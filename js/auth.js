// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyA7rfBhIutZdEG0R7xANM3Wy27lV7GP2-Q",
//     authDomain: "yaseen-site.firebaseapp.com",
//     databaseURL: "https://yaseen-site.firebaseio.com",
//     projectId: "yaseen-site",
//     storageBucket: "yaseen-site.appspot.com",
//     messagingSenderId: "1093689830600"
//   };
//   firebase.initializeApp(config);
  
  console.log("xx")

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...

        console.log(displayName);
        console.log(email);
        console.log(emailVerified);
        console.log(photoURL);
        console.log(isAnonymous);
        console.log(uid);
        console.log(providerData);

    } else {
        console.log("user is not log in")
        // User is signed out.
        // ...
    }
});

//let log0ut = document.getElementById("logout");
function logout(){
    console.log("you clicked");
    firebase.auth().signOut()
        .then(() => {
            console.log("log out success");
             window.location.assign("signin.html");
            // Sign-out successful.
        }).catch((error) => {
            let message = error.message;
            console.log(message)
            // An error happened.
        });
}
// log0ut.addEventListener('click222', () =>{
//     console.log("you clicked");
//     firebase.auth().signOut()
//         .then(() => {
//             console.log("log out success");
//             // window.location.assign("signin.html");
//             // Sign-out successful.
//         }).catch((error) => {
//             let message = error.message;
//             console.log(message)
//             // An error happened.
//         });
// })


