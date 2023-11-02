"use strict"; 
/** Model - Team C - 3 (c) */
let tracker = [];
let e;
const body = document.body;
const birds = document.querySelector('.birds');
const model = {
    app: {
        currentPage:"startPage",
        pageOrigin:"",
        loggedInUser: "",
        currentBird:null,
        sortMethod:"size",
        sortedList:[],
    },

    inputs: {
        
        startPage: {
            
        },

        loginPage: {
            user_Name: '',
            password: '',
        },
        
        registerPage: {
            accountId:0,
            user_Name: '',
            e_mail: '',  
            password:'', 
            
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
            user_Name:"",
            e_mail:"Linn123@Birdmail.org",
            password:"",
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
        {
            accountId:3,
            name: "Torstein",
            user_Name:"Tor_Bird",
            e_mail:"tor@Birdmail.org",
            password:"cppElsker",
            birdsFound:[1,2,5],
        },
        {
            accountId:4,
            name: "Biner",
            user_Name:"biner",
            e_mail:"biner@Birdmail.org",
            password:"1",
            birdsFound:[1,0,4,2,6,],
        },
        {
            accountId:5,
            name: "Nirujan",
            user_Name:"LazyBird",
            e_mail:"niru@Birdmail.org",
            password:"Birdylover",
            birdsFound:[1,4,3],
        },
        {
            accountId:6,
            name: "Pål",
            user_Name:"pal_Bird",
            e_mail:"pal@Birdmail.org",
            password:"PSlover",
            birdsFound:[1,0],
        },
    ],
    birds: [

        {
        id:0,
        bird_Name: "Toco Toucan",
        found: true,
        image: "./src/Picture/Bird/tuco_Toucan.jpg",
        bird_Description: "Big bird",
        life_Span: "12 - 20 år",
        li: 20, 
        weight: "130 - 680 gram",
        we: 680,
        size: "35 - 65 cm",
        si: 65,
        speed_Descriptor: "64 km/t",
        speed: 64,
        area: "Oslo",
        },

        {
        id:1,
        bird_Name: "Kråke",
        found: true,
        image: "./src/Picture/Bird/krake.jpg",
        bird_Description: "Small bird",
        life_Span: "7 - 15 år",
        li: 15,
        weight: "500 - 680 gram",
        we: 680,
        size: "ca 48 - 54 cm",
        si: 54,
        speed_Descriptor: "97 km/t",
        speed: 97,
        area: "Tromsø",
        },

        {
        id:2,
        bird_Name: "Fossekall",
        found: true,
        image: "./src/Picture/Bird/fosse.jpg",
        bird_Description: "Small bird",
        life_Span: "8 - 10 år",
        li: 10,
        weight: "46 - 76 gram",
        we: 76,
        size: "17 - 20 cm",
        si: 20,
        speed_Descriptor: "24 km/t",
        speed: 24,
        area: "Lofoten",
        },

        {
        id:3,
        bird_Name: "Kjøttmeis",
        found: false,
        image: "./src/Picture/Bird/kjottmeis.jpg",
        bird_Description: "Small bird",
        life_Span: "15 år",
        li: 15,
        weight: "14 - 22 gram",
        we: 22,
        size: "12,5 - 14 cm",
        si: 14,
        speed_Descriptor: "50 km/t",
        speed: 50,
        area: "Bergen",
        },

        {
        id:4,
        bird_Name: "Nøtteskrike",
        image: "./src/Picture/Bird/ntteskrike.jpg",
        found: false,
        bird_Description: "small bird",
        life_Span: "1 - 5 år",
        li: 5,
        weight: "170 gram",
        we: 170,
        size: "34 - 35 cm",
        si: 35,
        speed_Descriptor: "32 km/t",
        speed: 32,
        area: "Kristiansand",
        },

        {
        id:5,
        bird_Name: "Blåmeis",
        found: false,
        image: "./src/Picture/Bird/blameis.jpg",
        bird_Description: "Small bird",
        life_Span: "3 år",
        li: 3,
        weight: "11 gram",
        we: 11,
        size: "12 cm",
        si: 12,
        speed_Descriptor: "30 km/t",
        speed: 30,
        area: "Trondheim",
        },  

        {
        id:6,
        bird_Name: "Kongeørn",
        found: true,
        image: "./src/Picture/Bird/kong_orn.png",
        bird_Description: "Kongeørn er Norges nest største rovfugl, etter havørn.",
        life_Span: "14 - 20 år",
        li: 20,
        weight: "2900 - 6000 gram",
        we: 6000,
        size: "66 - 90 cm",
        si: 90,
        speed_Descriptor: "322 km/t",
        speed: 322,
        area: "Alta",
        },

        {
        id:7,
        bird_Name: "Hakkespett",
        found: false,
        image: "./src/Picture/Bird/DSC_2554a.jpg",
        bird_Description: "Small bird",
        life_Span: "6 - 11 år",
        li: 11,
        weight: "70 - 98 gram",
        we: 98,
        size: "20 - 24 cm",
        si: 24,
        speed_Descriptor: "24 km/t",
        speed: 24,
        area: "Skien",
        },
    ]
    }
}