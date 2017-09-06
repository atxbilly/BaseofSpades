var hitcount = 0;
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
    
    // document.getElementById("hitcard1").src = 200;
    // document.getElementById("hitcard2").src = 200;
    // document.getElementById("hitcard3").src = 200;
    // document.getElementById("hitcard4").src = 200;
    // document.getElementById("hitcard5").src = 200;
    // document.getElementById("hitcard6").src = 200;
    // document.getElementById("hitcard7").src = 200;
    // document.getElementById("hitcard8").src = 200;

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

        var card3 = document.getElementById("card3");
        var randocard3 = shoe.pop();
        card3.src = randocard3;

        var card2 = document.getElementById("card2");
        var randocard2 = shoe.pop();
        card2.src = randocard2;

        var card4 = document.getElementById("card4");
        var randocard4 = shoe.pop();
        card4.src = randocard4;};
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
    hitcount++;
}

function doStand(){
    var dealercard3String = shoe.pop();
    var dealercard3Image = document.getElementById("dealercard3");
    dealercard3Image.style.height = 200;
    dealercard3Image.src = dealercard3String;
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

var hitcards = ["hitcard1", "hitcard2", "hitcard3", "hitcard4", "hitcard5", "hitcard6", "hitcard7", "hitcard8"]
var shuffleddeck = [];


