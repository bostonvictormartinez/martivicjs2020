var scores, activePlayer, roundScore, dice;

scores=[0,0];
activePlayer=0;
roundScore=0;

document.querySelector('.dice').style.display='none';
//document.querySelector('#current-'+activePlayer).textContent=dice;

document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';



document.querySelector('.btn-roll').addEventListener('click',function(){

    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-' + dice +'.png'

    if(dice!==1){

        document.querySelector('#current-'+activePlayer).textContent=roundScore
        roundScore=roundScore+dice;

    }else{

        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0'

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');


    }

})


document.querySelector('.btn-hold').addEventListener('click',function(){
    scores[activePlayer]=scores[activePlayer]+roundScore
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=20){
        document.querySelector('#name-'+activePlayer).textContent='Winner'
document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
    }
    

    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0

    

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0'

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

   
    

})



document.querySelector('.btn-new').addEventListener('click',function(){
   document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';
scores=[0,0];
activePlayer=0;
roundScore=0;
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')



})