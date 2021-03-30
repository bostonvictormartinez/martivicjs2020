/*

var activePlayer, roundScore, scores, dice;

activePlayer=0;
roundScore=0;
scores=[0,0];


document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';



document.querySelector('.btn-roll').addEventListener('click',function(){


    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice')
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    if(dice!==1){ //not a one
        roundScore=roundScore+dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;

    }else{//dice is 1
        
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;

            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');


    }



})


document.querySelector('.btn-hold').addEventListener('click',function(){
    scores=[];
    document.querySelector('#score-'+activePlayer).textContent=roundScore
    activePlayer===0?activePlayer=1:activePlayer=0;

        document.getElementById('score-0').style.display='block';
        document.getElementById('score-1').style.display='block';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        





})













var dice, roundScore, activePlayer, scores

roundScore=0
activePlayer=0
scores=[0,0]


        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0'
        document.getElementById('score-0').textContent='0'
        document.getElementById('score-1').textContent='0'


document.querySelector('.btn-roll').addEventListener('click',function(){

    var dice=Math.floor(Math.random()*6)+1
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';


    if(dice!==1){//is 2,3,4,5 or 6

        roundScore=roundScore+dice
        document.querySelector('#current-'+activePlayer).textContent=roundScore

        




    }else if(dice===6){

        console.log('one more roll and you lose.')


    }
    
    else{

        activePlayer===0?activePlayer=1:activePlayer=0
        roundScore=0

        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0'

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

        
        


    }




})

document.querySelector('.btn-hold').addEventListener('click',function(){

    scores[activePlayer]=scores[activePlayer]+roundScore

    

            if(scores[activePlayer]>=30){
                document.querySelector('#name-'+activePlayer).textContent='Winner'
            }else{

                document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]

    activePlayer===0?activePlayer=1:activePlayer=0
        roundScore=0

        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0'

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

            }


    


})





*/

/*

var dice, roundScore, activePlayer, scores;

roundScore=0
activePlayer=0
scores=[0,0]




        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0'
        document.getElementById('score-0').textContent='0'
        document.getElementById('score-1').textContent='0'

        var lastDice;


document.querySelector('.btn-roll').addEventListener('click',function(){

    var dice=Math.floor(Math.random()*6)+1
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';


    if(dice===6 &&lastDice===6){

       
        
        scores[activePlayer]=0
        document.querySelector('#score-'+activePlayer).textContent='0'
        console.log('you lose')
        




    }else if(dice!==1){//is 2,3,4,5 or 6


        roundScore=roundScore+dice
        document.querySelector('#current-'+activePlayer).textContent=roundScore



    }  
        else{

        activePlayer===0?activePlayer=1:activePlayer=0
        roundScore=0

        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0'

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

        
        


    }

         lastDice=dice


})

document.querySelector('.btn-hold').addEventListener('click',function(){

    scores[activePlayer]=scores[activePlayer]+roundScore

    

            if(scores[activePlayer]>=30){
                document.querySelector('#name-'+activePlayer).textContent='Winner'
            }else{

                document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]

    activePlayer===0?activePlayer=1:activePlayer=0
        roundScore=0

        document.getElementById('current-0').textContent='0'
        document.getElementById('current-1').textContent='0'

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

            }


    


})











*/



var activePlayer, roundScore, scores, inputScores2

var rolledDice

activePlayer=0
roundScore=0
scores=[0,0]


document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';


document.querySelector('.btn-roll').addEventListener('click',function(){

    var dice=Math.floor(Math.random()*6)+1

    var diceDOM=document.querySelector('.dice')
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    if(dice===6&&rolledDice===6){

        console.log('you lose double six')
    }


    else if(dice!==1){//is 2,3,4,5 or 6

        roundScore=roundScore+dice
        document.querySelector('#current-'+activePlayer).textContent=roundScore



    }else{//dice is a 1 crap out

        roundScore=0
        activePlayer===0?activePlayer=1:activePlayer=0;

        document.querySelector('#current-0').textContent='0';
        document.querySelector('#current-1').textContent='0';



    }

        rolledDice=dice;

})



document.querySelector('.btn-hold').addEventListener('click', function(){

    scores[activePlayer]=scores[activePlayer]+roundScore

    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]

    var inputScores2=document.querySelector('.set-new-score').value

    if(inputScores2){
        console.log('this is the new number' + inputScores2)
    }

    else if(scores[activePlayer]>=100){
        console.log('100 is a winner')

    }else{
        roundScore=0
        activePlayer===0?activePlayer=1:activePlayer=0;

        document.querySelector('#current-0').textContent='0';
        document.querySelector('#current-1').textContent='0';

    }
    



})














