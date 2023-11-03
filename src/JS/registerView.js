"use strict";

function updateRegisterPageView(){
  model.app.linker.innerHTML = /*HTML*/`
    <div class="container">

      <div class="Field">
        <div class="txt">Navn:</div>
        <input type="text" onchange="model.inputs.registerPage.name = this.value" class="input"  placeholder="Navn">
      </div>

      <div class="Field">
        <div class="txt">Brukernavn:</div>
        <input type="text" onchange="model.inputs.registerPage.user_Name = this.value" class="input"  placeholder="Brukernavn">
      </div>

      <div class="Field">
        <div class="txt">Epost:</div>
        <input type="text" onchange="model.inputs.registerPage.e_mail = this.value" class="input" placeholder="E-post">
      </div>

      <div class="Field">
        <div class="txt" >Passord:</div>
        <input type="password" onchange="model.inputs.registerPage.password = this.value" class="input"  placeholder="Passord">
      </div>

      <div class="Field">
        <div class="txt" >Bekreft Passord:</div>
        <input type="password" class="input" onchange="" placeholder="Bekreft Passord">
      </div>
      
      <div class="button-container">
        <button class="knapp" onclick="model.data.accounts.push(model.inputs.registerPage); fortsett('login');" >Lag profil</button>
      </div>
    </div>`
}



