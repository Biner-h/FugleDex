function updateHomePageView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="search-container">
    <label for="search" class="fugledex">Fugledex: </label>
    <input type="text" placeholder="Search birds..."><div class="icon" onclick="search()">🔍</div>
    </div>
    <div class="buttonContainers">
    <div class="backBtn">Tilbake</div>
    <div class="allBtn">Alle Fugler</div>
    <div class="foundBtn">Alle Mine Funn</div>
    <label for="logg" id="loggetInn">Logget inn som: </label>
    </div>

    <div class="leaderboardContainer">
        <h2>Leaderboard</h2>
        <ul class="leaderboard-list">
            <li>Linn<span class="leaderboard-info">5 - Toca Toucan</span></li>
            <li>Eskil</li>
            <li>Terje</li>
        </ul>
    </div>
    `
}

