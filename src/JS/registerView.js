function updateRegisterPageView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="container"> 
    <div class="form-box">
    <form action="" name="">
      <h1></h1>
      <div class="input-box">
        <div class ="txt">Brukernavn </div>
        <input type="text" name="Brukernavn" placeholder="Brukernavn" />
      </div>
      <div class="input-box">
        <label for="E-post">E-Post:</label>
        <input type="text" name="E-post" placeholder="E-post" />
      </div>
      <div class="input-box">
        <label for="passord">Passord:</label>
        <input type="" name="passord" placeholder="Password" />
      </div>

      <div class="input-box">
        <label for="Bekreft-Passord">Bekreft Passord:</label>
        <input
          type="text"
          name="bekreft-passord"
          placeholder="Bekreft Passord"
        />
      </div>
      <button type="submit">Lag Profil</button>
      <button type="Logg-inn">Logg Inn</button>
    </form>   
    </div>`
}

