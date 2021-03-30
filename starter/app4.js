

var scores,roundScore,activePlayer,dice;

scores=[0,0];
roundScore=0;
activePlayer=0;

//document.querySelector('#current-'+activePlayer).textContent=dice;

document.querySelector('.dice').style.display='none'

document.getElementById('score-0').textContent='0'
document.getElementById('score-1').textContent='0'
document.getElementById('current-0').textContent='0'
document.getElementById('current-1').textContent='0'


document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice')
    diceDOM.style.display='block'
    diceDOM.src='dice-'+dice+'.png';

    if(dice!==1){
        roundScore=roundScore+dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;

    }else{
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;

        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0'

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';


    }


});

document.querySelector('.btn-hold').addEventListener('click',function(){

scores[activePlayer]=scores[activePlayer]+roundScore

document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
 
if(scores[activePlayer]>=100){
    document.querySelector('#name-'+activePlayer).textContent='winner'
}
else{
   roundScoreUp() 
}


})
function roundScoreUp(){activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;

    document.getElementById('current-0').textContent='0'
    document.getElementById('current-1').textContent='0'

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}