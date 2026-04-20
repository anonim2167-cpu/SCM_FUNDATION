let submitB = document.getElementById("submit");
let result = document.getElementById("resultDIV")

submitB.addEventListener("click", ()=>{
    let username = document.getElementById("usernameID").value;
    let Code = document.getElementById("Code").value;
    let password = document.getElementById("password").value;

    if(username === "" || username.startsWith(" ")){
        alert("Podaj Nazwe Użytkownika!");
        result.innerHTML = " ";
    }else{
        result.innerHTML = `Witaj ${username}  -  `;
    }

    if(Code === "" || Code.startsWith(" ")){
        alert("Podaj Kod!");
        result.innerHTML = " ";
    }else if(Code.length > 6 || Code.length < 2){
        alert("Kod Jest Niepoprawny");
        result.innerHTML = " ";
    }else{
        result.innerHTML += `Kod: ${Code}  -  `;
    }

    if(password === "" || password.startsWith(" ")){
        alert("Podaj Hasło!");
        result.innerHTML = " ";
    }else if(username === "" || username.startsWith(" ")){
        result.innerHTML = " ";
    }else if(Code === "" || Code.startsWith(" ")){
        result.innerHTML = " ";
    }else if(Code.length > 6 || Code.length < 2){
        result.innerHTML = " ";
    }else{
        result.innerHTML += `Hasło: ${password}`;
    }
});