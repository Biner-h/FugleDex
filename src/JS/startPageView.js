"use strict";

function updateStartPageView()
{
    model.app.linker.innerHTML = /*HTML*/`
    <div class="container">
        <img src="./src/Picture/Bird/Greenbird-logo.png" alt="Err-404" class="campGreenBird">
        <div class="overskrift">Fugledex</div>
        <button class="knapp" onclick="fortsett('login');">Continue</button>
    </div>`
}
