"use strict";

/* All Birds */
initList();

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

function validator()
{
    let i;
    for(i = 0; i != model.data.accounts.length; i++)
    {
        if(model.data.accounts[i].user_Name == model.inputs.loginPage.user_Name 
            && 
            model.data.accounts[i].password == model.inputs.loginPage.password)
        {
            model.app.loggedInUser = model.data.accounts[i].name;
            fortsett("home");
            return;
        }
    }

    if(true)
    {
        alert("Wrong username or password.");
        return;
    }
}

function regValidator()
{
    const root = model.data.accounts[model.data.accounts.length];
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
    linker.innerHTML = /*HTML*/`
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

/* function generateLastFive(){
    for(i=0; i < model.data.accounts.length; i++){
        if(model.data.accounts[i].birdsFound.length < 5){
            html = ""
            return html
        }
        
        model.data.accounts[i].birdsFound
    }
    console.log(model.data.accounts[0].birdsFound.length)
} */

const birdsFound = [5,2,2,2,7,3,1]
    const birdsFound2 = [2,3]

    updateView()
    function updateView(){
        let html = "";
        html += `<div>${checkIfLastFive(birdsFound)}</div>
        <div>${checkIfLastFive(birdsFound2)}</div>
        `
        document.getElementById('app').innerHTML = html;
    }
    
    function checkIfLastFive(arr){
        return arr.slice(-5);
    }