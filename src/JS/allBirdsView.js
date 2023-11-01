"use strict"; 

/** Start page */
updateView()

function updateAllBirdsView(){
    document.getElementById("app").innerHTML = `
    <div class="container">
        <h1>Alle fugler</h1>
            <div class="dropdown">
                <div onmouseover="run('Dropped')" onclick="showDropDown()" class="sorterKnapp">Sorter</div>
                <div id="dropDown" class="dropdown-content">
                <p class="sorterEtter">Sorter etter:</p>
                <p class="sorterFilter" onclick="vekt();">Vekt</p>
                <p class="sorterFilter" onclick="fart();">Fart</p>
                <p class="sorterFilter" onclick="size();">Størrelse</p>
                <p class="sorterFilter" onclick="lifespan();">Levetid</p>
            </div>
        </div> 
        <div class="home" onclick="homeButton()">Hjem</div>
        <div class="birds">${showBirds(model)}</div>
    </div>
    `
}

function showBirds(model)
{
    let div = "";
    for(let i = 0; i < model.data.birds.length; i++)
    {
        div += `<div onclick="showBirdInfo(${i})" 
        onmouseover="run('${model.data.birds[i].bird_Name}'); 
        "${model.data.birds[i].found ? 'class="birdFound box"' : 'class="birdNotFound box"'}>
        <img src="${model.data.birds[i].image}">
        <h2 id="birdName">${model.data.birds[i].bird_Name}</h2>
        </div>`;
    }
    return div;
}

function homeButton(){
    model.app.currentPage = "home"
    updateView()
}