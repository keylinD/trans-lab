/* Holiii acá va tu código también */
 function inicio(){
    const done = 0;
    const userEmail = document.login.userEmail.value;
    userEmail = userEmail.toLowerCase();
    const password = document.login.password.value;
    password = password.toLowerCase();
    if (userEmail == "usuario" && password == "contraseña") {
        window.location = "Home.html"; done = 1;
    }if (done == 0) {
        window.location = "Login.html";        
    }

}