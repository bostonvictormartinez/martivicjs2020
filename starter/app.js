/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game



//id= current-0
//id=current-1
 
var scores,roundScore, activePlayer,dice
scores=[0,0];
roundScore=0;
activePlayer=0;

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0'
document.getElementById('score-1').textContent='0'
document.getElementById('current-0').textContent='0'
document.getElementById('current-1').textContent='0'

document.querySelector('.btn-roll').addEventListener('click',function () {
    var dice=Math.floor(Math.random()*6)+1

    
    
    
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
   // document.querySelector('.dice').display='block';    

   
   if(dice!==1){
       roundScore+=dice;
       document.querySelector('#current-'+activePlayer).textContent=roundScore;

   }else{
       activePlayer===0?activePlayer=1:activePlayer=0;
    /*   if(activePlayer===0){
           activePlayer=1;
       }else{
           activePlayer=0
       }
       roundScore=0

       document.getElementById('current-0').textContent=('0')
       document.getElementById('current-1').textContent=('0')

       document.querySelector('.player-0-panel').classList.remove('active');
       document.querySelector('.player-1-panel').classList.add('active');

   }


});


*/


var activePlayer=0
var roundScore=0
var scores=[0,0]
var dice=0


dice=Math.floor(Math.random()*6)+1
document.querySelector('.dice').style.display='none';
document.querySelector('#current-'+activePlayer).textContent='dice';

document.querySelector('.btn-roll').addEventListener('click', function () {



    var dice=Math.floor(Math.random()*6)+1
    var diceDOM=document.querySelector('dice');
    diceDOM.style.display='block'
    diceDOM.src='.dice'+dice+'.png'
    
})








