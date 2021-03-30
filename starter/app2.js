var scores, activePlayer, roundScore, dice;

scores=[0,0];
activePlayer=0;
roundScore=0;
dice=Math.floor(Math.random()*6)+1

document.querySelector('.dice').style.display='block';

document.querySelector('#current-'+activePlayer).textContent=dice;

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';





document.querySelector('.btn-roll').addEventListener('click',function(){

    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    if(dice!==1){

        roundScore=roundScore+dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;

    }else{
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0

        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0'
//log to current
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

  //hide dice

  //

        activePlayer[scores]=activePlayer[scores]+roundScore
        





    }
})