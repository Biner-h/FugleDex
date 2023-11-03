"use strict"; 

/** Start page */
updateView()

function updateAllBirdsView(){
    model.app.linker.innerHTML = /* HTML */`
    <div class="container">
        <h1>Alle fugler</h1>
            <div class="dropdown">
                <div onmouseover="run('Dropped')" onclick="showDropDown()" class="sorterKnapp">Sorter</div>
                <div id="dropDown" class="dropdown-content">
                <p class="sorterEtter">Sorter etter:</p>
                <p class="sorterFilter" onclick="setSort('vekt')">Vekt</p>
                <p class="sorterFilter" onclick="setSort('fart')">Fart</p>
                <p class="sorterFilter" onclick="setSort('size')">Størrelse</p>
                <p class="sorterFilter" onclick="setSort('lifespan')">Levetid</p>
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
    for(let i = 0; i < model.app.sortedList.length; i++)
    {
        div += /*HTML*/`<div onclick="showBirdInfo(${model.app.sortedList[i].id})" 
        onmouseover="run('${model.app.sortedList[i].bird_Name}'); 
        "${model.app.sortedList[i].found ? 'class="birdFound box"' : 'class="birdNotFound box"'}>
        <img src="${model.app.sortedList[i].image}">
        <h2 id="birdName">${model.app.sortedList[i].bird_Name}</h2>
        </div>`;
    }
    return div;
}                   
function homeButton(){
    model.app.currentPage = "home"
    updateView()
}