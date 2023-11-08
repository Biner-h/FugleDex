function updateHomePageView() {
    model.app.linker.innerHTML = /*HTML*/ `
        <div class="search-container">
            <label for="text" class="fugledex">Fugledex: 
                <input type="text" id="search" placeholder="Finn fugl..."><div class="icon" onclick="search()">🔍</div>
            </label>
        </div>

        <div class="button-containers">
            <div class="allBtn" onclick="fortsett('allBirds')">Alle Fugler</div>
            <div class="foundBtn" onclick="fortsett('myBirds')">Alle Mine Funn</div>
            <label for="logg" id="loggetInn">Logget inn som: 
                <div id="logg" class="dropdownhome">
            </label>
            <div class="dropdown-toggle" onclick="toggleDropdown()">${model.app.loggedInUser}</div>
            <div class="dropdown-menu">
                <div class="dropdown-item" onclick="fortsett('startPage'); signOut();">Logg Ut</div>
            </div>
        </div>
        </div>
        <!-- Leaderboard includes all registered accounts -->
        <div class="bird-container">
            <h2>Mine ${render_title()} siste fugler</h2>
            <div class="bird-list">${vista()}</div>
        </div>

        <img class="img" src="src/Picture/Bird/Greenbird-logo.png">

        <div class="leaderboard-container">
            <h2>Leaderboard</h2>
            <div class="leaderboard-list">${render_Board()}</div>
        </div>`;
}

function toggleDropdown() {
    dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.style.display =
        dropdownMenu.style.display === "none" || dropdownMenu.style.display === ""
            ? "block"
            : "none";
}
/** Native search engine for birddex*/
function search() {
    alert("Ingen fugler funnet");
}

/** Renders the last 5 birds */
function vista() {
    let vista_Model = {
        /** Number of found birds */
        birdsLength: model.data.accounts[model.app.logged_In_Identyfier].birdsFound.length,
        /** Name of signed in user */
        signed_In_Name: model.data.accounts[model.app.logged_In_Identyfier],
        /** Current state of iteration */
        current_Bird: 0,
        /** Element function output - the value is HTML code */
        e: "",
    };
    if (vista_Model.signed_In_Name.name === model.app.loggedInUser) {
        if (vista_Model.birdsLength >= 5) {
            for (let c = vista_Model.birdsLength - 1; c >= vista_Model.birdsLength - 5; c--) {
                vista_Model.current_Bird = vista_Model.signed_In_Name.birdsFound[c];
                vista_Model.e += `<p>${model.data.birds[vista_Model.current_Bird].bird_Name}</p>`;
            }
        } else if (vista_Model.birdsLength < 5) {
            for (
                let c = vista_Model.birdsLength - 1;
                c >= Math.max(0, vista_Model.birdsLength - 5);
                c--
            ) {
                vista_Model.current_Bird = vista_Model.signed_In_Name.birdsFound[c];
                vista_Model.e += `<p>${model.data.birds[vista_Model.current_Bird].bird_Name}</p>`;
            }
        }

        console.log(vista_Model.e);
        return vista_Model.e;
    } else {
        console.log("Error-404 innvalid token");
    }
}

function render_Board() {
    let board_Model = {
        /** Account length */
        account: model.data.accounts,
        /** Number of found birds */
        birdsLength: model.data.accounts[model.app.logged_In_Identyfier].birdsFound.length,
        /** Name of signed in user */
        signed_In_Name: model.data.accounts[model.app.logged_In_Identyfier],
        e: "",
        bird_Count: 0,
    };
        for (let i = 0; i < board_Model.account.length; i++) {
            let selected = board_Model.account[i];
            console.log(selected)
            board_Model.bird_Count = 0;
            for (let x = 0; x <= selected.birdsFound[x]; x++) {board_Model.bird_Count++}
            board_Model.e += `<p>${selected.name}<span class="leaderboard-info">${board_Model.bird_Count} - fugler</span></p>`;
        }

    console.log(board_Model.signed_In_Name + "+");
    return board_Model.e;
}
/** <p>Linn<span class="leaderboard-info">7 - fugler</span></p>*/
