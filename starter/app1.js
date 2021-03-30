var scores,activePlayer,roundScore,dice
scores=[0,0]
activePlayer=0
roundScore=0
dice=0
dice=Math.floor(Math.random()*6)+1

document.querySelector('.dice').style.display='none'

document.querySelector('#current-'+activePlayer).textContent=dice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice')
    diceDOM.style.display='block'
    diceDOM.src='dice-'+dice+'.png'

    //create my future function

    document.getElementById('score-0').textContent='0'
    document.getElementById('score-1').textContent='0'
    document.getElementById('current-0').textContent='0'
    document.getElementById('current-1').textContent='0'


    if(dice!==1){
        //add score to update the round score
       // roundScore=roundScore+dice
       roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore

    }else{
        activePlayer===0?activePlayer=1:activePlayer=0
        roundScore=0;
    }

});

