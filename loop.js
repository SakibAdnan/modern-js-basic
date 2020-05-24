//for loop
for(var i =0; i<=100; i++ ){
    //console.log(i); 
}

for(var i = 0; i <= 100; i++){
    if(i%2 === 1){
        //console.log(i + ' = Odd Number')
    }
}



for(var i = 0; i <= 100; i++){
    if(i%2 === 0){
        //console.log(i + ' = Even Number')
    }
}

var sum = 0;
for(var i = 0; i <= 100; i++){
    if(i%2 === 0){
        //console.log(sum + ' + ' + i + ' = ' + (sum+i));
    }
    //sum++
}
//console.log(sum)

var isWinner = 0;
while(isWinner < 1){
    var randomNum = Math.floor(Math.random() * 10 );
    if(randomNum === 7 ){
        console.log('Congratulation, You are Winner');
    }else{
        console.log('You are got ' + randomNum + ' Best wish for next time');
    }
    isWinner++
}

//Do While
// do{
//     Working code
// }while('condition');

//Nested loop
var n = 5;
for(var i = 1; i <= n; i++){
    var string = ' ';
    for(var j = 1; j <=i; j++){
        string += j + ' '
    }
    console.log(string)
}

var n = 5;
for(var i = 1; i <= n; i++){
    var string = ' ';
    for(var j = 1; j <=i; j++){
        string += '* '
    }
    console.log(string)
}

for(var i = 0; i <= 10; i++){
    if(i === 4 || i === 7){
        continue
    }else{
        console.log(i);
    }
}