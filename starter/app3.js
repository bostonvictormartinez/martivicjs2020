

var scores,roundScore,activePlayer,dice;

scores=[0,0];
roundScore=0;
activePlayer=0;
dice=Math.floor(Math.random()*6)+1;

document.querySelector('#current-'+activePlayer).textContent=dice;







//then add current score to global score
        //now redo function 1 repeat for player 2
    //dont forget hide dice end of player 2 turn