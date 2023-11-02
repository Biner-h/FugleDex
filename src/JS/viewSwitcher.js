function updateView(){
    switch(model.app.currentPage)
    {
        case "startPage":
            updateStartPageView();
            swap("./src/CSS/StartPage.css","Startside","src/Picture/startPage.jpg")
            break;

        case "login":
            updateLoginPageView()
            swap("./src/CSS/loginPage.css","Logg inn","src/Picture/login_reg.jpg")
            break;

        case "register":
            updateRegisterPageView()
            swap("./src/CSS/registerPage.css","Registrer deg","src/Picture/login_reg.jpg")
            break;
                
        case "home":
            updateHomePageView()
            swap("./src/CSS/homePage.css","Hjem","src/Picture/home.jpg")
            model.app.pageOrigin = "home";
            break;

        case "allBirds":
            console.log("allBirdsFirst")
            updateAllBirdsView()
            swap("./src/CSS/allBirdsPage.css","Alle fugler","src/Picture/alle_Fugler.jpg")
            model.app.pageOrigin = "allBirds";
            console.log("allBirds")
            break;
            
        case "myBirds":
            updateMyBirdsView();
            swap("./src/CSS/myBirdsPage.css","Alle mine funn","src/Picture/mine_funn.png");
            model.app.pageOrigin = "myBirds";
            break;

        default:
            updateBirdInfoView()
            swap("./src/CSS/birdInfoPage.css","Fugle info","src/Picture/bird_Info.jpg")
            break;
    }
}
