
function updateBirdInfoView(){
    let birdToShow = model.data.birds.find((bird) => bird.id === model.app.currentBird)
    model.app.linker.innerHTML = /*HTML*/`
    <div class="container">
        <h1>Fugle info</h1>
        <h2 class="tilbake" onclick="tilbake()">Tilbake</h2>
        <h2 class="hjem" onclick="fortsett('home')">Hjem</h2>
        <img class="img" src="${birdToShow.image}">
        <div class="fugleInfo">
            <h2>${birdToShow.bird_Name}</h2>
            <p>Levetid: ${birdToShow.life_Span}</p>
            <p>Vekt: ${birdToShow.weight}</p>
            <p>Fart: ${birdToShow.speed_Descriptor}</p>
            <p>Størrelse: ${birdToShow.size}</p>
            <p>Bosted: ${birdToShow.area}</p>
            <button class="isFoundButton" onclick="haveFound()">Finn<button>
        </div>
    </div>`
}

function showBirdInfo(birdId){
    model.app.currentBird = birdId
    fortsett('birdInfo')
    updateView()
}

function tilbake(){
    model.app.currentPage = model.app.pageOrigin;
    model.app.pageOrigin = "";
    updateView();
    
}
