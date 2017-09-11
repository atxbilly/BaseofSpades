var hitcount = 0;
var dealerhandcount = 0;
var deckofcards= [];
var shoe = [];
var dealerhandtotal = 0;
var playerhandtotal = 0;
var cardacevalue = 0;
var dealeracetotal = 0;
var playeracetotal = 0;
var randocard4 = "";
var playerbust = false;
var dealerbust = false;
var playeracebust = false;
var dealeracebust = false;
var scores = {};
var scoresfiltered = [];
var pitcher = "";
var batter = "";
var hometeam = "";
var firstbase = false;
var secondbase = false;
var thirdbase = false;
var playerruns = 0;
var dealerruns = 0
var outs = 0;
var inning = 0;


function newGame() {
    buildshoe();
    playBall();
 }
function playBall(){
    playerhandtotal = 0;
    dealerhandtotal = 0;
    dealerhandcount = 0;
    playeracetotal = 0;
    dealeracetotal = 0;
    scoresfiltered = [];



    var ui = document.getElementById("UI");
    var uidoc = ui.getSVGDocument();

    var newhand = uidoc.getElementById("text839");
    newhand.addEventListener("click", playBall, false);

    
    var stand = uidoc.getElementById("text835");
    stand.addEventListener("click", doStand, false);

    var hit = uidoc.getElementById("text831");
    hit.addEventListener("click", doHit, false);
 
    document.getElementById("hitcard1").src = "";
    document.getElementById("hitcard2").src = "";
    document.getElementById("hitcard3").src = "";
    document.getElementById("hitcard4").src = "";
    document.getElementById("hitcard5").src = "";
    document.getElementById("hitcard6").src = "";
    document.getElementById("hitcard7").src = "";
    document.getElementById("hitcard8").src = "";

    document.getElementById("dealercard3").src = "";
    document.getElementById("dealercard4").src = "";
    document.getElementById("dealercard5").src = "";
    document.getElementById("dealercard6").src = "";
    document.getElementById("dealercard7").src = "";
    document.getElementById("dealercard8").src = "";
    document.getElementById("dealercard9").src = "";
    document.getElementById("dealercard10").src = "";
        
    if (inning == 0){
        decideHomeTeam();
        inning = inning + .5;
    }

   

    if (outs == 3){
        inning = inning + .5;
        outs = 0;
        if (batter == "playerone"){
            pitcher = "playerone";
            batter = "dealer";
        }
        else if (batter == "dealer"){
            pitcher = "dealer";
            batter = "playerone";
        }
    }
  
    hitcount = 0;

    if (shoe.length == 0) {

        buildshoe(); 
        alert("Shoe empty. Shuffling...");
    }
    else  
    {   
        var card1 = document.getElementById("card1");
        var randocard = shoe.pop();
        card1.src = randocard;
        playerhandtotal += getCardValue(randocard);
        aceCheck(randocard, "playerone");
 

        var card3 = document.getElementById("card3");
        var randocard3 = shoe.pop();
        card3.src = randocard3;
        dealerhandtotal += getCardValue(randocard3);
        aceCheck(randocard3, "dealer");

        var card2 = document.getElementById("card2");
        var randocard2 = shoe.pop();
        card2.src = randocard2;
        playerhandtotal += getCardValue(randocard2);
        aceCheck(randocard2, "playerone");

        var card4 = document.getElementById("card4");
        randocard4 = shoe.pop();
        card4.src = "Cards/Blue_Back.svg";
        dealerhandtotal += getCardValue(randocard4);
        aceCheck(randocard4, "dealer");
    }
    
    doHomeRunCheck();
}

function decideHomeTeam(){
    var ht = Math.floor(Math.random() * 2)
    if (ht == 0){
        hometeam = "dealer";
        pitcher = "dealer";
        batter = "playerone";
    }
    else {
        hometeam = "playerone";
        pitcher = "playerone";
        batter = "dealer";
    }
}

function doHomeRunCheck(){
    var homeruntie = false;
    var counttrue = 0;
    if (playeracetotal == 21 && dealeracetotal == 21){
        outs++;
        homeruntie = true;
        alert("Nice catch!" + pitcher);
        document.getElementById("card4").src = randocard4;
        counttrue += 1;
    }

    else if (playeracetotal == 21 && pitcher == "dealer" && homeruntie == false){
        playerruns += 1;
        alert("Home Run!" + batter);
        document.getElementById("card4").src = randocard4;
        counttrue += 1;
    }

    else if (playeracetotal == 21 && pitcher == "playerone" && homeruntie == false){
        outs++;
        alert("Nice Catch!" + pitcher);
        document.getElementById("card4").src = randocard4;
        counttrue += 1;
    }

    else if (dealeracetotal == 21 && pitcher == "playerone" && homeruntie == false){
        dealerruns += 1;
        alert("Home Run!" + batter);
        document.getElementById("card4").src = randocard4;
        counttrue += 1;
    }

    else if (dealeracetotal == 21 && pitcher == "dealer" && homeruntie == false){
        outs++;
        alert("Nice Catch!" + pitcher);
        counttrue += 1;
    }
    if (counttrue > 0){

        
    }
    
}

function populatedeckofcards(){
    deckofcards = [];
    for (n = 0; n < 52; n++){
        var c = cards[n];
        deckofcards.push(c);
     }
}
function shuffdeck(){
    deckofcards= [];
    populatedeckofcards();
    shuffleddeck = [];
    for (i = 0; i < 52; i++){
        var n = Math.floor(Math.random() * cards.length)
        var cardpicked = deckofcards[n];
        if (cardpicked in shuffleddeck)
            {}
        else {shuffleddeck.push(cardpicked);}
    }
}

function buildshoe(){
    
    for (g=0; g < 8; g++){
        shuffdeck();
        for (j=0; j < 52; j++){
            var card = shuffleddeck[j];
            shoe.push(shuffleddeck[j])
        }
    }
}

function doHit(){
    var hitcardString = shoe.pop();
    aceCheck(hitcardString, "playerone");
    var hitcardID = hitcards[hitcount];
    var hitcardImage = document.getElementById(hitcardID);
    hitcardImage.src = hitcardString;
    hitcardImage.style.height = 100;
    playerhandtotal += getCardValue(hitcardString);
    hitcount++;
    playerscorelabel.textContent = playerhandtotal;
    if (playerhandtotal == 21){
        doStand();
    }
    if (playerhandtotal > 21){
        doWinLogic();
    }
}

function doStand(){


    while (dealerhandtotal < 18){
        var dealercardString = shoe.pop();
        aceCheck(dealercardString, "dealer");
        var dealercardID = dealercards[dealerhandcount];
        var dealercardImage = document.getElementById(dealercardID);
        dealercardImage.style.height = 100;
        dealercardImage.src = dealercardString;
        dealerhandtotal += getCardValue(dealercardString);
        dealerhandcount++;
    }
    if (dealerhandtotal > 17){
        revealDealerHand();
    }
}
function revealDealerHand(){
        card4.src = randocard4;
        doWinLogic();   
}
    
function doWinLogic(){
    
    card4.src = randocard4;


    scores["ph"] = playerhandtotal;
    scores["dh"] = dealerhandtotal;
    scores["pa"] = playeracetotal;
    scores["da"] = dealeracetotal;
    
    for (var property in scores){
        scoresfiltered.push([property, scores[property]]);
    }

    scoresfiltered.sort(function(a,b){
        return a[1] - b[1];
    });

    for (i = 0; i < scoresfiltered.length; i++){
        var k = scoresfiltered[i][1];
        if (k > 21){
            scoresfiltered.splice(i,2);
        }
    }

    scoresfiltered.sort(function(a,b){
        return a[1] - b[1];
    });

    var winningscore = scoresfiltered[scoresfiltered.length - 1];

    if (winningscore[0][0] == "d" && pitcher == "dealer"){
        outs++;
    }

    else if (winningscore[0][0] == "d" && pitcher == "playerone"){
        dealerruns+= 1;
    }

    else if (winningscore[0][0] == "p" && pitcher == "playerone"){
        outs++;
    }
    else if (winninngscore[0][0] == "p" && pitcher == "dealer"){
        playerruns += 1;
    }
}

function getCardValue(cardstring){
    var cvalue = cardvalues[cardstring];
    return cvalue;
}

function aceCheck(cardtocheck, player){
    if (cardtocheck == "Cards/AC.svg" ||
        cardtocheck == "Cards/AD.svg" ||
        cardtocheck == "Cards/AH.svg" ||
        cardtocheck == "Cards/AS.svg"){
    
            cardacevalue = 11;
    }
    else {
        cardacevalue = getCardValue(cardtocheck);
    }
    if (player == "playerone"){
        playeracetotal += cardacevalue;
    }
    if (player == "dealer"){
        dealeracetotal += cardacevalue;
    }
}

var scoreids = ["ph", "dh", "pa", "da"];

var cards = [
    "Cards/2C.svg", "Cards/2D.svg", "Cards/2H.svg", "Cards/2S.svg",
    "Cards/3C.svg", "Cards/3D.svg", "Cards/3H.svg", "Cards/3S.svg",
    "Cards/4C.svg", "Cards/4D.svg", "Cards/4H.svg", "Cards/4S.svg",
    "Cards/5C.svg", "Cards/5D.svg", "Cards/5H.svg", "Cards/5S.svg",
    "Cards/6C.svg", "Cards/6D.svg", "Cards/6H.svg", "Cards/6S.svg",
    "Cards/7C.svg", "Cards/7D.svg", "Cards/7H.svg", "Cards/7S.svg",
    "Cards/8C.svg", "Cards/8D.svg", "Cards/8H.svg", "Cards/8S.svg",
    "Cards/9C.svg", "Cards/9D.svg", "Cards/9H.svg", "Cards/9S.svg",
    "Cards/10C.svg","Cards/10D.svg", "Cards/10H.svg", "Cards/10S.svg",
    "Cards/JC.svg", "Cards/JD.svg", "Cards/JH.svg", "Cards/JS.svg",
    "Cards/QC.svg", "Cards/QD.svg", "Cards/QH.svg", "Cards/QS.svg",
    "Cards/KC.svg", "Cards/KD.svg", "Cards/KH.svg", "Cards/KS.svg",
    "Cards/AC.svg", "Cards/AD.svg", "Cards/AH.svg", "Cards/AS.svg",
]

var hitcards = ["hitcard1", "hitcard2", "hitcard3", "hitcard4", 
                "hitcard5", "hitcard6", "hitcard7", "hitcard8"]
var dealercards = ["dealercard3", "dealercard4", "dealercard5", 
                    "dealercard6", "dealercard7", "dealercard8", 
                    "dealercard9", "dealercard10"] 
var shuffleddeck = [];

var cardvalues = {};
cardvalues["Cards/2C.svg"] = 2;
cardvalues["Cards/3C.svg"] = 3;
cardvalues["Cards/4C.svg"] = 4;
cardvalues["Cards/5C.svg"] = 5;
cardvalues["Cards/6C.svg"] = 6;
cardvalues["Cards/7C.svg"] = 7;
cardvalues["Cards/8C.svg"] = 8;
cardvalues["Cards/9C.svg"] = 9;
cardvalues["Cards/10C.svg"] = 10;
cardvalues["Cards/JC.svg"] = 10;
cardvalues["Cards/QC.svg"] = 10;
cardvalues["Cards/KC.svg"] = 10;
cardvalues["Cards/AC.svg"] = 1;

cardvalues["Cards/2D.svg"] = 2;
cardvalues["Cards/3D.svg"] = 3;
cardvalues["Cards/4D.svg"] = 4;
cardvalues["Cards/5D.svg"] = 5;
cardvalues["Cards/6D.svg"] = 6;
cardvalues["Cards/7D.svg"] = 7;
cardvalues["Cards/8D.svg"] = 8;
cardvalues["Cards/9D.svg"] = 9;
cardvalues["Cards/10D.svg"] = 10;
cardvalues["Cards/JD.svg"] = 10;
cardvalues["Cards/QD.svg"] = 10;
cardvalues["Cards/KD.svg"] = 10;
cardvalues["Cards/AD.svg"] = 1;

cardvalues["Cards/2H.svg"] = 2;
cardvalues["Cards/3H.svg"] = 3;
cardvalues["Cards/4H.svg"] = 4;
cardvalues["Cards/5H.svg"] = 5;
cardvalues["Cards/6H.svg"] = 6;
cardvalues["Cards/7H.svg"] = 7;
cardvalues["Cards/8H.svg"] = 8;
cardvalues["Cards/9H.svg"] = 9;
cardvalues["Cards/10H.svg"] = 10;
cardvalues["Cards/JH.svg"] = 10;
cardvalues["Cards/QH.svg"] = 10;
cardvalues["Cards/KH.svg"] = 10;
cardvalues["Cards/AH.svg"] = 1;

cardvalues["Cards/2S.svg"] = 2;
cardvalues["Cards/3S.svg"] = 3;
cardvalues["Cards/4S.svg"] = 4;
cardvalues["Cards/5S.svg"] = 5;
cardvalues["Cards/6S.svg"] = 6;
cardvalues["Cards/7S.svg"] = 7;
cardvalues["Cards/8S.svg"] = 8;
cardvalues["Cards/9S.svg"] = 9;
cardvalues["Cards/10S.svg"] = 10;
cardvalues["Cards/JS.svg"] = 10;
cardvalues["Cards/QS.svg"] = 10;
cardvalues["Cards/KS.svg"] = 10;
cardvalues["Cards/AS.svg"] = 1;
