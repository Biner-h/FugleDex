"use strict";

/* All Birds */
    
const vekt = () =>
{
    
}

const fart = () =>
{
    let ret;
    let model_Sorted = 
    {
        data: 
        {
            birds:
            [
                model.data.birds[6],
                model.data.birds[1],
                model.data.birds[3],
            ]
        }
    }
    birds = showBirds(model_Sorted);

    return;
}
const size = () => 
{

}

const lifespan = () =>
{
    
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