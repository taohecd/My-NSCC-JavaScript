// Code goes here

var dealercards=[];
var playercards=[];
var dealerscore=0;
var playerscore=0;

var deck_id="";

var finalresult=-1;//0:draw(21:21), 1:playerwin, 2:dealerwin, 3:all lose

function gameload()
{
    btnStart.addEventListener("click", onStart);
    btnHit.addEventListener("click", onHit);
    btnStay.addEventListener("click", onStay);
}

function CreateNewDeck()
{
    //Resets all variables as well as removing the cards that were played
    deck_id="";
    dealercards=[];
    playercards=[];
    dealerscore=0;
    playerscore=0;
    finalresult=-1;

    //Put in the specified ID
    document.getElementById("dealer_score").innerHTML="";

    document.getElementById("player_score").innerHTML="";

    document.getElementById('dealer_cards').innerHTML="";
    
    document.getElementById('player_cards').innerHTML="";

    gameResult();

    var xmlhttp = new XMLHttpRequest();
    var url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

    xmlhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var responseData = JSON.parse(this.responseText);
            deck_id=responseData.deck_id;

            console.log(deck_id);

            shufflecards(true, 2);
            shufflecards(false, 2);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function drawCard(toDealer,cardimg)
{
    var img = document.createElement('img');
    img.setAttribute('src',cardimg);
    if (toDealer)
    {
        document.getElementById('dealer_cards').appendChild(img);
    }
    else
    {
        document.getElementById('player_cards').appendChild(img);
    }
}

function CountScore(toDealer, card)
{
    var currentscore=0;
    if (toDealer)
    {
        currentscore=dealerscore;
    }
    else
    {
        currentscore=playerscore;
    }

    if ((card.value=="KING")||(card.value=="QUEEN")||(card.value=="JACK"))
    {
        currentscore+=10;
    }
    else if (card.value=="ACE")
    {
        currentscore+=11;
    }
    else
    {
        currentscore+=parseInt(card.value);
    }

    if (toDealer)
    {
        dealerscore=currentscore;
    }
    else
    {
        playerscore=currentscore;
    }
}

function shufflecards(toDealer,number)
{
    var cards=toDealer?dealercards:playercards;

    var xmlhttp = new XMLHttpRequest();
    var url = "https://deckofcardsapi.com/api/deck/"+deck_id+"/draw/?count="+number;

    xmlhttp.onreadystatechange = function() {

        console.log(this.readyState);

        if (this.readyState == 4 && this.status == 200) {

            var responseData = JSON.parse(this.responseText);

            console.log(responseData);
            if (responseData.success)
            {
                responseData.cards.forEach(function (item)
                {
                    cards.push(item);

                    CountScore(toDealer, item);

                    drawCard(toDealer,item.image);
                    CheckResult();
                    gameResult();

                });
            }
        }

    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function  onStart()
{
    if (CreateNewDeck())
    {
    }
}

function CheckResult()
{
    if (dealerscore==21&&playerscore==21)
    {
        finalresult=0;
    }
    else if (dealerscore>21&&playerscore<=21)
    {
        finalresult=1;
    }
    else if (dealerscore<21&&playerscore==21)
    {
        finalresult=1;
    }
    else if (dealerscore<=21&&playerscore>21)
    {
        finalresult=2;
    }
    else if (dealerscore==21&&playerscore<21)
    {
        finalresult=2;
    }
    else if (dealerscore>21&&playerscore>21)
    {
        finalresult=3;
    }
    gameResult();
}

function gameResult()
{
    var showstr="";
    var btnstyle="btn";
    switch(finalresult)
    {
        case -1:
            showstr="Let's Play Blackjack";
            btnstyle="btn";
            break;
        case 0:
            showstr="Draw!(both win)";
            btnstyle="btnred";
            break;
        case 1:
            showstr="Player wins!";
            btnstyle="btnred";
            break;
        case 2:
            showstr="Dealer wins!";
            btnstyle="btnred";
            break;
       case 3:
            showstr="Draw!(both lose)";
            btnstyle="btnred";
        break;
    }

    document.getElementById("dealer_score").innerHTML="Dealer: "+dealerscore;

    document.getElementById("player_score").innerHTML="Player: "+playerscore;

    document.getElementById("banner").innerHTML=showstr;

    document.getElementById("btnHit").className=btnstyle;

    document.getElementById("btnStay").className=btnstyle;
}

function onHit()
{
    if (finalresult!=-1)
        return;

    shufflecards(false, 1); //Dealing cards to players

    //shufflecards(true, 1); 
}

function onStay()
{
    if (finalresult!=-1)
        return;

    shufflecards(true, 1); //Dealing cards to the dealer
}
