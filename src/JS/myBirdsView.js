updateView();

function updateMyBirdsView(){
    model.app.linker.innerHTML = /*HTML*/`
    <div class="container"> 
    <h1>Alle mine funn</h1>
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
<div class="home" onclick="fortsett('home')">Hjem</div>
<div class="birds">${showMyBirds(model)}</div>
    </div>`;
}

function showMyBirds(model)
{
    let myList = model.app.sortedList.filter((bird) => bird.found === true);

    let div = "";
    for(let i = 0; i < myList.length; i++)
    {
        div += /*HTML*/`<div onclick="showBirdInfo(${myList[i].id})" class="birdFound box">
        <img src="${myList[i].image}">
        <h2 id="birdName">${myList[i].bird_Name}</h2>
        </div>`;
    }
    return div;
}