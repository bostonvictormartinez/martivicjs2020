var scores=[0,0];
var activePlayer=0;
var roundScore=0;
var lastRoll

document.querySelector('.dice').style.display='none'

document.getElementById('current-0').textContent='0'
document.getElementById('current-1').textContent='0'
document.getElementById('score-0').textContent='0'
document.getElementById('score-1').textContent='0'





document.querySelector('.btn-roll').addEventListener('click',function(){
    
    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    if(dice===6&&lastRoll===6){
        scores[activePlayer]=0;
        document.querySelector('#score-'+activePlayer).textContent='0'
 
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active')

        document.querySelector('.player-1-panel').classList.toggle('active')
        

    }

    else if(dice!==1){
   // if(dice!==1){

        roundScore=roundScore+dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;

       
        
    }else{
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        document.querySelector('.player-0-panel').classList.toggle('active')

        document.querySelector('.player-1-panel').classList.toggle('active')
        



    }

    var lastRoll=dice
})

document.querySelector('.btn-hold').addEventListener('click', function(){

    scores[activePlayer]=scores[activePlayer]+roundScore

    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]

var input=document.querySelector('#setScore').value;
console.log(input)

    if(scores[activePlayer]>=30){
        document.querySelector('#name-'+activePlayer).textContent='Winner'
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-0-panel').classList.add('winner')
        document.querySelector('.player-1-panel').classList.add('winner')
        document.querySelector('.player-0-panel').classList.remove('active')
        document.querySelector('.player-1-panel').classList.remove('active')

    }else{
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
    
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
    
        document.querySelector('.player-0-panel').classList.toggle('active')
    
        document.querySelector('.player-1-panel').classList.toggle('active')
        

    }

   

    

})

document.querySelector('.btn-new').addEventListener('click',function(){

        document.querySelector('.player-0-panel').classList.remove('active')
        document.querySelector('.player-1-panel').classList.remove('active')

        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0'
        document.getElementById('score-0').textContent='0'
        document.getElementById('score-1').textContent='0'
        
        document.querySelector('#name-0').textContent='Player 1'
        document.querySelector('#name-1').textContent='Player 2'
        activePlayer=0;
        scores=[0,0];
        roundScore=0




})