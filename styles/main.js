const database = firebase.database().ref()

function updateDB(event) {
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;

    usernameElement.value = "";
    messageElement.value = "";

    console.log(username + ' : ' + message)

    const value = {
        NAME:username,
        MESSAGE:message
    }
    database.push(value)
}  

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
 }