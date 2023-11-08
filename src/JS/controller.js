"use strict";

/* All Birds */
// initLeaderboard();
initList();
/** Checks how to sort between the birds */
function sortBirds() {
    switch (model.app.sortMethod) {
        case "vekt":
            vekt();
            break;
        case "fart":
            fart();
            break;
        case "size":
            size();
            break;
        case "lifespan":
            lifespan();
            break;
    }
}
/** Saves the sort method */
function setSort(sortType) {
    model.app.sortMethod = sortType;
    sortBirds();
    updateView();
}
/** Deletes the registration fields after a sucessful upload */
const clear_registration = () => {
    model.inputs.registerPage.user_Name = "";
    model.inputs.registerPage.name = "";
    model.inputs.registerPage.password = "";
    model.inputs.registerPage.e_mail = "";
};
/** Deletes the current logged in user field */
const clear_login = () => {
    model.inputs.loginPage.password = "";
    model.inputs.loginPage.user_Name = "";
};
/** Signing user out of the app */
const signOut = () => {
    model.app.loggedInUser = "";
    model.app.logged_In_Identyfier = null;
};
/** Sort bird by uploads new users to the back-end */
const upload = () => {
    model.data.accounts.push(model.inputs.registerPage);
};
/** Sort bird by life weight */
const vekt = () => {
    model.app.sortedList = [...model.app.sortedList.sort((a, b) => b.we - a.we)];
};
/** Sort bird by speed */
const fart = () => {
    model.app.sortedList = [...model.app.sortedList.sort((a, b) => b.speed - a.speed)];
};
/** Sort bird by size */
const size = () => {
    model.app.sortedList = [...model.app.sortedList.sort((a, b) => b.si - a.si)];
};
/** Sort bird by life span */
const lifespan = () => {
    model.app.sortedList = [...model.app.sortedList.sort((a, b) => b.li - a.li)];
};

/** Validates the login credentials and finds a corrusponding account */
function validator() {
    let i;
    for (i = 0; i != model.data.accounts.length; i++) {
        if (
            model.data.accounts[i].user_Name == model.inputs.loginPage.user_Name &&
            model.data.accounts[i].password == model.inputs.loginPage.password
        ) {
            model.app.loggedInUser = model.data.accounts[i].name;
            model.app.logged_In_Identyfier = model.data.accounts[i].accountId;
            fortsett("home");
            return;
        }
    }

    if (true) {
        alert("Wrong username or password.");
        return;
    }
}

function regValidator() {
    const root = model.data.accounts[model.data.accounts.length];
    console.log();
}

/** Handles the transition between sites */
function fortsett(param) {
    model.app.currentPage = param;
    updateView();
}
/** Tracks the mouse cursor on all birds page */
const run = (bird) => {
    tracker.push(bird);
    console.log("Bird tracker " + bird);
};

function render_title() {
    let formatted = model.data.accounts[model.app.logged_In_Identyfier].birdsFound.length;
    return model.data.accounts[model.app.logged_In_Identyfier].birdsFound.length < 5
        ? formatted
        : 5;
}

function showDropDown() {
    document.getElementById("dropDown").classList.toggle("show");
}

/** Eventhandler for changing css file  */
const swap = (csslinker, title, link) => {
    console.log(csslinker);
    console.log(title);
    const linker = document.querySelector(".headerTag");
    linker.innerHTML = /*HTML*/ `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${csslinker}">
                        <title>${title}</title>`;
    document.body.style.backgroundImage = "url(" + link + ")";
    console.log(linker + " " + csslinker);
    console.log(model.app.pageOrigin);
    console.log(model.app.currentPage);
};

/** Function that aid the sorting functions */
function initList() {
    model.app.sortedList = [...model.data.birds];
}

function initLeaderboard() {
    model.app.leaderBoard = [
        ...model.data.accounts.sort((a, b) => b.birdsFound.length - a.birdsFound.length),
    ];
    console.log(model.app.leaderBoard);
}
