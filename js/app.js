// Initialize Firebase
var config = {
    apiKey: "AIzaSyA7rfBhIutZdEG0R7xANM3Wy27lV7GP2-Q",
    authDomain: "yaseen-site.firebaseapp.com",
    databaseURL: "https://yaseen-site.firebaseio.com",
    projectId: "yaseen-site",
    storageBucket: "yaseen-site.appspot.com",
    messagingSenderId: "1093689830600"
  };
  firebase.initializeApp(config);
  //console.log("xx")
//   firebasee.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         // User is signed in.
//         var displayName = user.displayName;
//         var email = user.email;
//         var emailVerified = user.emailVerified;
//         var photoURL = user.photoURL;
//         var isAnonymous = user.isAnonymous;
//         var uid = user.uid;
//         var providerData = user.providerData;
//         // ...

//         console.log(displayName);
//         console.log(email);
//         console.log(emailVerified);
//         console.log(photoURL);
//         console.log(isAnonymous);
//         console.log(uid);
//         console.log(providerData);

//     } else {
//         console.log("user is not log in")
//         // User is signed out.
//         // ...
//     }
// });

// var firebaseData = firebase.database().ref().child('donorUsers')

// firebaseData.on('value', function(snapshot){
    
// })


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