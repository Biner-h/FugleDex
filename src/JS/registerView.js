function updateRegisterPageView(){
  document.getElementById("app").innerHTML = /*HTML*/`
    <div class="container">

      <div class="Field">
        <div class="txt">Brukernavn:</div>
        <input type="text" class="input"  placeholder="Brukernavn">
      </div>

      <div class="Field">
        <div class="txt">Epost:</div>
        <input type="text" class="input" placeholder="E-post">
      </div>

      <div class="Field">
        <div class="txt" >Passord:</div>
        <input type="password" class="input" placeholder="Passord">
      </div>

      <div class="Field">
        <div class="txt" >Bekreft Passord:</div>
        <input type="password" class="input" onchange="" placeholder="Bekreft Passord">
      </div>
      
      <div class="button-container">
        <button class="knapp" onclick="fortsett('login')">Lag profil</button>
      </div>
    </div>`
}



