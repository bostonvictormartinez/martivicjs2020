//console.log(this)

function age(yrBrn){
    console.log(2020-yrBrn)

}
age(1975)

function age(yrBrn){
    console.log(2020-1975);
    console.log(this);

}

age(1990);


var john={
    name:'john',
    yearBrn:1990,
    calcAges:function(){
        console.log(this);
        console.log(this.yearBrn);
        console.log(2020-this.yearBrn)
    }

}
john.calcAges()



var mike={
    name:'mike',
    yrBrn:1984

}

mike.calcAges=john.calcAges;
mike.calcAges();
