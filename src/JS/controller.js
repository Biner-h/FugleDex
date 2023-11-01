"use strict";

/* All Birds */
initList();


////////////////////////////Sortering////////////////////////////////////////

function sortBirds(){
    switch (model.app.sortMethod) {
        case "vekt":
            vekt()
            break;
        case "fart":
            fart()
            break;
        case "size":
            size()
            break;
        case "lifespan":
            lifespan()
            break;
    }
}

function setSort(sortType){
    model.app.sortMethod = sortType
    sortBirds()
    updateView()
}

const vekt = () =>
{
    model.app.sortedList = [...model.app.sortedList.sort((a,b) => b.we - a.we)]
}

const fart = () =>
{
    model.app.sortedList = [...model.app.sortedList.sort((a,b) => b.speed - a.speed)]
}
const size = () => 
{
    model.app.sortedList = [...model.app.sortedList.sort((a,b) => b.si - a.si)]
}

const lifespan = () =>
{
    model.app.sortedList = [...model.app.sortedList.sort((a,b) => b.li - a.li)]
}
///////////////////////////////////////////////////////////////////////////////

function validator()
{
    for(let i = 0; i != model.data.accounts.length; i++)
    {
        if(model.data.accounts[i].user_Name == model.inputs.loginPage.user_Name && model.data.accounts[i].password == model.inputs.loginPage.password)
        {
            fortsett("home");
            model.app.loggedInAs.name
            break;
        }
    }
    if(model.data.accounts.length == model.data.accounts.length)
    {
        alert("Wrong username or password.");
        return;
    }

}


function fortsett(param)
{
    model.app.currentPage = param
    updateView()
}



const run = (bird)=>
{tracker.push(bird);console.log("Bird tracker " + bird);}

function showDropDown()
{document.getElementById("dropDown").classList.toggle("show");}

    
const swap = (csslinker,title,link) =>
{
    console.log(csslinker)
    console.log(title)
    const linker = document.querySelector('.headerTag');
    linker.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${csslinker}">
                        <title>${title}</title>`;
    document.body.style.backgroundImage = "url("+link+")"
    console.log(linker + " " + csslinker)
    console.log(model.app.pageOrigin);
    console.log(model.app.currentPage);
}

function initList() {
    model.app.sortedList = [...model.data.birds]
}