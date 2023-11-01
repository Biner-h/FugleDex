function updateBirdInfoView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="container">
        <h1>Fugle info</h1>
        <h2 class="tilbake" onclick="tilbake()">Tilbake</h2>
        <h2 class="hjem" onclick="fortsett('home')">Hjem</h2>
        <img class="img" src="${model.app.sortedList[model.app.currentBird].image}">
        <div class="fugleInfo">
            <h2>${model.app.sortedList[model.app.currentBird].bird_Name}</h2>
            <p>Levetid: ${model.app.sortedList[model.app.currentBird].life_Span}</p>
            <p>Vekt: ${model.app.sortedList[model.app.currentBird].weight}</p>
            <p>Fart: ${model.app.sortedList[model.app.currentBird].speed_Descriptor}</p>
            <p>Størrelse: ${model.app.sortedList[model.app.currentBird].size}</p>
            <p>Bosted: ${model.app.sortedList[model.app.currentBird].area}</p>
        </div>
    </div>`
}

function showBirdInfo(index){
    model.app.currentBird = index
    fortsett('birdInfo')
    updateView()
}

function tilbake(){
    model.app.currentPage = model.app.pageOrigin;
    model.app.pageOrigin = "";
    updateView();
    
}
