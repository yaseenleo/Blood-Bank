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
console.log("dd");
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
        window.location.assign("home.html")

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
let signInBtn = document.getElementById("signIn");
signInBtn.addEventListener('click', () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((success) => {
            console.log(JSON.stringify(success), "success")
            alert(JSON.stringify(success) , "success");
            let uid = success.user.uid;
            console.log("uid",uid);

        //    let ref =  firebase.database().ref('donorUsers/'+uid);
        //    let ref2 = firebase.database().ref('acceptorUsers/'+uid);
        //    ref.on('value',function(snapshot){
        //         if(snapshot!== null){
        //             // donor user code
        //             console.log("snapshot,"+JSON.stringify(snapshot));
        //             var bloodAcceptor = firebase.database().ref('acceptorUsers/');


        //         }
        //    })
        //    ref2.on('value',function(snapshot){
        //        if(snapshot!==null){
        //            //acceptor user code
        //         console.log("snapshot 2,"+JSON.stringify(snapshot));

        //        }
        // })
                        
           window.location.assign("home.html")
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(errorCode);
            console.log(errorMessage);
            // ...
        });
})
