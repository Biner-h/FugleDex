function updateBirdInfoView(){
    document.getElementById("app").innerHTML = `
    <div class="container">
        <h1>Fugle info</h1>
        <h2 class="tilbake" onclick="tilbake()">Tilbake</h2>
        <h2 class="hjem" onclick="homeButton()">Hjem</h2>
        <img class="img" src="${model.data.birds[model.app.currentBird].image}">
        <div class="fugleInfo">
            <h2>${model.data.birds[model.app.currentBird].bird_Name}</h2>
            <p>Levetid: ${model.data.birds[model.app.currentBird].life_Span}</p>
            <p>Vekt: ${model.data.birds[model.app.currentBird].weight}</p>
            <p>Fart: ${model.data.birds[model.app.currentBird].speed_Descriptor}</p>
            <p>Størrelse: ${model.data.birds[model.app.currentBird].size}</p>
            <p>Bosted: ${model.data.birds[model.app.currentBird].area}</p>
        </div>
    </div>`
}

function showBirdInfo(index){
    model.app.currentBird = index
    model.app.currentPage = "birdInfo"
    updateView()
}

function tilbake(){
    model.app.currentPage = model.app.pageOrigin;
    model.app.pageOrigin = "";
    updateView();
    
}

function homeButton(){
    model.app.currentPage = "home"
    updateView()
}