var hitcount = 0;
var dealerhandcount = 0;
var deckofcards= [];
var shoe = [];
var dealerhandtotal = 0;
var playerhandtotal = 0;

    
function init(){
    var play = document.getElementById("play");
    play.addEventListener("click", newGame, true);
    buildshoe();
}

function newGame() {
    var hit = document.getElementById("hit");
    hit.addEventListener("click", doHit, true);
    var stand = document.getElementById("stand");
    stand.addEventListener("click", doStand, true);
    
    document.getElementById("hitcard1").style.height = 200;
    document.getElementById("hitcard2").style.height = 200;
    document.getElementById("hitcard3").style.height = 200;
    document.getElementById("hitcard4").style.height = 200;
    document.getElementById("hitcard5").style.height = 200;
    document.getElementById("hitcard6").style.height = 200;
    document.getElementById("hitcard7").style.height = 200;
    document.getElementById("hitcard8").style.height = 200;
    
    hitcount = 0;
    if (shoe.length == 0) {

        buildshoe(); 
        alert("Deck empty. Shuffling...");
    }
    else  
    {   
        var card1 = document.getElementById("card1");
        var randocard = shoe.pop();
        card1.src = randocard;
        playerhandtotal += getCardValue(randocard);

        var card3 = document.getElementById("card3");
        var randocard3 = shoe.pop();
        card3.src = randocard3;
        dealerhandtotal += getCardValue(randocard3);

        var card2 = document.getElementById("card2");
        var randocard2 = shoe.pop();
        card2.src = randocard2;
        playerhandtotal += getCardValue(randocard2);
        alert(playerhandtotal);

        var card4 = document.getElementById("card4");
        var randocard4 = shoe.pop();
        card4.src = randocard4;};
        dealerhandtotal += getCardValue(randocard4);
        alert(dealerhandtotal);
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
    var hitcardID = hitcards[hitcount];
    var hitcardImage = document.getElementById(hitcardID);
    hitcardImage.src = hitcardString;
    playerhandtotal += getCardValue(hitcardString);
    alert(playerhandtotal);
    hitcount++;
}

function doStand(){
    while (dealerhandtotal < 18){
        var dealercardString = shoe.pop();
        var dealercardID = dealercards[dealerhandcount];
        var dealercardImage = document.getElementById(dealercardID);
        dealercardImage.style.height = 200;
        dealercardImage.src = dealercardString;
        dealerhandtotal += getCardValue(dealercardString);
        dealerhandcount++;
    }
    alert(dealerhandtotal);
}

function getCardValue(cardstring){
    var cvalue = cardvalues[cardstring];
    return cvalue;
}

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
cardvalues["Cards/1DC.svg"] = 10;
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
