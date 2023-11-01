function updateLoginPageView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="container">
        <div class="Field">
            <div class="txt">Brukernavn:</div>
            <input type="text" class="input" onchange="model.inputs.loginPage.user_Name = this.value" placeholder="Skriv inn brukernavn">
        </div>
        <div class="Field">
            <div class="txt" >Passord:</div>
            <input type="password" class="input" onchange="model.inputs.loginPage.password = this.value" placeholder="Skriv inn passord">
        </div>
        <div class="button-container">
            <button class="knapp" onclick="fortsett('register')">Registrer</button>
            <button class="knapp" onclick="validator()">Logg inn</button>
        </div>
    </div>`
}