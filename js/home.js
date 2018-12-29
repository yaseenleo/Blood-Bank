console.log("home")
let acceptorArray = [];
let donorArray = [];
function info(accep) {
    acceptorArray.forEach((acceptor) => {
        if (acceptor.name === accep) {
            $('#userinfo').modal('show');

            let acceptName = acceptor.name;
            let acceptEmail = acceptor.email;
            let acceptAge = acceptor.age;
            let acceptGender = acceptor.gender;
            let acceptBlood = acceptor.blood;
            let acceptAction = acceptor.action;
            let acceptContact = acceptor.PhoneNumber;
            let acceptHead = `${acceptAction} Details`;

            document.getElementById("userAction").innerHTML = acceptHead;
            document.getElementById("username").innerHTML = acceptName;
            document.getElementById("useremail").innerHTML = acceptEmail;
            document.getElementById("userage").innerHTML = acceptAge;
            document.getElementById("usergender").innerHTML = acceptGender;
            document.getElementById("userblood").innerHTML = acceptBlood;
            document.getElementById("useraction").innerHTML = acceptAction;
            document.getElementById("usercontact").innerHTML = acceptContact;
            // alert(JSON.stringify(acceptor));
        }
    })
}

function donate(accep) {
    acceptorArray.forEach((acceptor) => {
        if (acceptor.name === accep) {
           donorArray.push(acceptor)
           
           console.log(donorArray);
        }
    })
}

function show_acceptors() {
    let str = '<table ><tbody>';
    acceptorArray.forEach((acceptor) => {
        let user = JSON.stringify(acceptor);
        console.log(user)
        str += `
            <tr>
            <th>`+ acceptor.name + `</th>
            <td><button onclick="info('`+ acceptor.name + `')">Info</button></td>
            <td><button onclick="donate('`+ acceptor.name + `')">Donate</button></td>
            </tr>
            `
    })
    str += '</tbody></table>';
    document.getElementById("acceptors").innerHTML = str;
}
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
        //
        let refDonor = firebase.database().ref('donorUsers/' + uid);
        let refAcceptor = firebase.database().ref('acceptorUsers/' + uid);


        refDonor.on('value', function (snapshot) {


            let user = snapshot.val();

            if (user !== null) {
                // donor user code
                console.log("donor," + JSON.stringify(user));
                console.log(user.name)
                document.getElementById("name").innerHTML = user.name;
                let allacceptor = firebase.database().ref('acceptorUsers/');
                allacceptor.on('value', function (snapshot) {
                    let arr = snapshot.val();
                    for (key in arr) {
                        arr[key]._uid = key
                        console.log("something true," + JSON.stringify(arr[key]));
                        acceptorArray.push(arr[key]);
                        show_acceptors();
                    }
                    // console.log(arr);
                })
            }


        })
        refAcceptor.on('value', function (snapshot) {

            let user = snapshot.val();
            if (user !== null) {
                //acceptor user code

                console.log("acceptor," + JSON.stringify(user));
                console.log(user.name);
                document.getElementById("name").innerHTML = user.name;

            }




        })

    } else {
        console.log("user is not log in")
        window.location.assign("signin.html");
        // User is signed out.
        // ...
    }
});