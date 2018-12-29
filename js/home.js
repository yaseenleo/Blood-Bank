console.log("home")
let acceptorArray = [];
let donorArray = [];

// user donor
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
            let acceptContact = acceptor.phoneNumber;
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


// user acceptor
function accept(donate) {
    donorArray.forEach((donor) => {
        if (donor.name === donate) {
            donorArray.push(donor)

            console.log(donorArray);
        }
    })
}

function info(donate) {
    donorArray.forEach((donor) => {
        if (donor.name === donate) {
            $('#userinfo').modal('show');

            let donorName = donor.name;
            let donorEmail = donor.email;
            let donorAge = donor.age;
            let donorGender = donor.gender;
            let donorBlood = donor.blood;
            let donorAction = donor.action;
            let donorContact = donor.phoneNumber;
            let donorHead = `${donorAction} Details`;

            document.getElementById("userAction").innerHTML = donorHead;
            document.getElementById("username").innerHTML = donorName;
            document.getElementById("useremail").innerHTML = donorEmail;
            document.getElementById("userage").innerHTML = donorAge;
            document.getElementById("usergender").innerHTML = donorGender;
            document.getElementById("userblood").innerHTML = donorBlood;
            document.getElementById("useraction").innerHTML = donorAction;
            document.getElementById("usercontact").innerHTML = donorContact;
            // alert(JSON.stringify(acceptor));
        }
    })
}

function show_donors() {
    let str = '<table ><tbody>';
    donorArray.forEach((donor) => {
        let user = JSON.stringify(donor);
        console.log(user)
        str += `
            <tr>
            <th>`+ donor.name + `</th>
            <td><button onclick="info('`+ donor.name + `')">Info</button></td>
            <td><button onclick="accept('`+ donor.name + `')">accept</button></td>
            </tr>
            `
    })
    str += '</tbody></table>';
    document.getElementById("donors").innerHTML = str;
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
                let allDonors = firebase.database().ref('donorUsers/');
                allDonors.on('value', function (snapshot) {
                    let arr = snapshot.val();
                    for (key in arr) {
                        arr[key]._uid = key
                        console.log("something true," + JSON.stringify(arr[key]));
                        donorArray.push(arr[key]);
                        show_donors();
                    }
                    // console.log(arr);
                })
            }




        })

    } else {
        console.log("user is not log in")
        window.location.assign("signin.html");
        // User is signed out.
        // ...
    }
});