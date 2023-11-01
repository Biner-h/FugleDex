"use strict"; 
/** Model - Team C - 3 (c) */
let tracker = [];
const body = document.body;
const birds = document.querySelector('.birds');
const model = {
    app: {
        currentPage:"myBirds",
        pageOrigin:"",
        loggedInUser: "Linn",
        currentBird:null,
    },

    inputs: {
   
        loginPage: {
            user_Name: '',
            password: '',
        },
        
        registerPage: {
            user_Name: '',
            e_mail: '',  
            password:'', 
            Confirm_Password: '',
        },

        homePage: {
            search: '',
        },

        myBirdsPage: {
            selected_Sort: '',
        },

        allBirdsPage: {
            selected_Sort: '',
        }
    }, 

    data: {
        sortBirds: ["Vekt","Fart","Størrelse","Levetid"],
        leaderboard: [1,0,2],

        accounts: [{
            accountId:0,
            name: "Linn",
            user_Name:"LinnBird123",
            e_mail:"Linn123@Birdmail.org",
            password:"ILOVEBIRDS123",
            birdsFound:[0,1,5,2,2,2,7],
        },

        {
            accountId:1,
            name: "Eskil",
            user_Name:"Flying_Bird_420",
            e_mail:"eskil@Birdmail.org",
            password:"ChoreiElsker",
            birdsFound:[0,1,3],
        },

        {
            accountId:2,
            name: "Terje",
            user_Name:"prog_Bird",
            e_mail:"terje@Birdmail.org",
            password:"JavascriptElsker",
            birdsFound:[1,0],
        },
    ],
        sorted_Birds:[],
        birds: [

            {
            id:0,
            bird_Name: "Toco Toucan",
            found: true,
            image: "./src/Picture/Bird/tuco_Toucan.jpg",
            bird_Description: "Big bird",
            life_Span: "12 - 20 år",
            weight: "130 - 680 gram",
            size: "35 - 65 cm",
            speed: 64,
            speed_Descriptor: "64 km/t",
            area: "Oslo",
            },

            {
            id:1,
            bird_Name: "Kråke",
            found: true,
            image: "./src/Picture/Bird/krake.jpg",
            bird_Description: "Small bird",
            life_Span: "7 - 15 år",
            weight: "500 - 680 gram",
            size: "ca 48 - 54 cm",
            speed: 97,
            speed_Descriptor: "97 km/t",
            area: "Tromsø",
            },

            {
            id:2,
            bird_Name: "Fossekall",
            found: true,
            image: "./src/Picture/Bird/fosse.jpg",
            bird_Description: "Small bird",
            life_Span: "8 - 10 år",
            weight: "46 - 76 gram",
            size: "17 - 20 cm",
            speed: 24,
            speed_Descriptor: "24 km/t",
            area: "Lofoten",
            },

            {
            id:3,
            bird_Name: "Kjøttmeis",
            found: true,
            image: "./src/Picture/Bird/kjottmeis.jpg",
            bird_Description: "Small bird",
            life_Span: "15 år",
            weight: "14 - 22 gram",
            size: "12,5 - 14 cm",
            speed: 50,
            speed_Descriptor: "50 km/t",
            area: "Bergen",
            },

            {
            id:4,
            bird_Name: "Nøtteskrike",
            image: "./src/Picture/Bird/ntteskrike.jpg",
            found: false,
            bird_Description: "small bird",
            life_Span: "1 - 5 år",
            weight: "170 gram",
            size: "34 - 35 cm",
            speed: 32,
            speed_Descriptor: "64 km/t",
            area: "Kristiansand",
            },

            {
            id:5,
            bird_Name: "Blåmeis",
            found: false,
            image: "./src/Picture/Bird/blameis.jpg",
            bird_Description: "Small bird",
            life_Span: "3 år",
            weight: "11 gram",
            size: "12 cm",
            speed: 32,
            speed_Descriptor: "32 km/t",
            area: "Trondheim",
            },  

            {
            id:6,
            bird_Name: "Kongeørn",
            found: false,
            image: "./src/Picture/Bird/kong_orn.png",
            bird_Description: "Kongeørn er Norges nest største rovfugl, etter havørn.",
            life_Span: "14 - 20 år",
            weight: "2900 - 6000 gram",
            size: "66 - 90 cm",
            speed: 322,
            speed_Descriptor: "322 km/t",
            area: "Alta",
            },

            {
            id:7,
            bird_Name: "Hakkespett",
            found: false,
            image: "./src/Picture/Bird/DSC_2554a.jpg",
            bird_Description: "Small bird",
            life_Span: "6 - 11 år",
            weight: "70 - 98 gram",
            size: "20 - 24 cm",
            speed: 24,
            speed_Descriptor: "24 km/t",
            area: "Skien",
            },
        ]
    }
}