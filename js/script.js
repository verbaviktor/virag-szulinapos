function login(){
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if(name == "Köcsög" || name == "Nem utáló" && password == "Szeretlek" || password == "Megverlek"){
        document.querySelector(".login").style.display = "none";
        document.querySelector(".main-container").style.height = "100vh";
        document.querySelector(".main-container").style.visibility = "visible";
    }
}