function updateLoginPageView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="container">
        <div class="Field">
            <div class="txt">Brukernavn:</div>
            <input type="text" class="input" placeholder="Skriv inn brukernavn">
            <div class="logo"></div>
        </div>
        <div class="Field">
            <div class="txt" >Passord:</div>
            <input type="password" class="input" placeholder="Skriv inn passord">
            <div class="logo"></div>
        </div>
        <div class="button-container">
            <button class="knapp" onclick="registerButton()">Registrer</button>
            <button class="knapp" onclick="loginButton()">Logg inn</button>
        </div>
    </div>`
}

function registerButton(){
    model.app.currentPage = "register"
    updateView()
}

function loginButton(){
    model.app.currentPage = "home"
    updateView()
}