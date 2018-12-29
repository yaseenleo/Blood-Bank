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

let signUpBtn = document.getElementById("signUp")
signUpBtn.addEventListener('click', () => {
    let name = document.getElementById("username").value;
    let email = document.getElementById("useremail").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let phoneNumber = document.getElementById("phone").value;
    let genders = document.getElementById("gender");
    let gender = genders.options[genders.selectedIndex].value;
    let bloodgroup = document.getElementById("blood");
    let blood = bloodgroup.options[bloodgroup.selectedIndex].value
    let bloodActions = document.getElementById("action");
    let action = bloodActions.options[bloodActions.selectedIndex].value
    console.log(gender);
    console.log(blood);
    console.log(typeof(action));

if (action == "donor") {

    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((success) => {
        let donorUsers = {
            name,
            email,
            password,
            age,
            city,
            phoneNumber,
            gender,
            blood,
            action,
        }
        let userUid = firebase.auth().currentUser.uid
        firebase.database().ref('donorUsers/' + userUid)
            .set(donorUsers)
            .then(() => {
                alert(`Congradulation Your Account is Created ${name}`);
                window.location.assign("signin.html")
            })
            console.log(success, "success");

    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
        // ...
    });
    
}
else{
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((success) => {
        let acceptorUsers = {
            name,
            email,
            password,
            age,
            city,
            phoneNumber,
            gender,
            blood,
            action,
        }
        let userUid = firebase.auth().currentUser.uid
        firebase.database().ref('acceptorUsers/' + userUid)
            .set(acceptorUsers)
            .then(() => {
                alert(`Congradulation Your Account is Created ${name}`);
                window.location.assign("signin.html")
            })
            console.log(success, "success");

    })
    .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        
        // ...
    });
}

})

// let userUid = firebase.auth().currentUser.uid
// firebase.database().ref('users/' + userUid)
// .update(userObj)
// .then(() =>{

// })