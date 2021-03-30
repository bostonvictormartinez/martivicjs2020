var uno
var dos
var tres
var cuatro
var cinco
var seis

function rollDice(roll) {
    if(roll===1){
    console.log('one')
}
else if(roll===2){
    console.log('two')
}

}
rollDice(2)

function randoNum() {
    someRan=Math.random(rollDice)
    return someRan
    
    
}
console.log(randoNum())
var random=Math.random(rollDice)
console.log(random)

if(random<.15){
    console.log('ur lucky');
}else if(random>.15&&random<.50){
    console.log('not lucky');
    {console.log('try again')}

}
