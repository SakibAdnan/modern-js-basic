var a = 10;
var b = 11;

//======== If condition ===========
if( a > b ){
    console.log('A is grater then B')
}
if( a < b ){
    console.log('A is less then B')
}
if( b % 2 === 1 ){
    console.log('A is Odd number');
}
if( a % 2 === 0 ){
    console.log('A is Even number');
}
if(a % 2 === 1){
    console.log('A is Odd number');
}else{
    console.log('A is Even number');
}

// ============ Else condition ==============
var sakib = 22;
var rakib = 15;
if( sakib > rakib ){
    console.log('Sakiib Rakiber cahite boro')
}else{
    console.log('Rakib Sakib er  cahite chto')
}

//=========== Else If ======================
var num1 = 10
var num2 = 20

if(num1 > num2){
    console.log(num1 + ' is greter then ' + num2);
}else if(num1 < num2){
    console.log(num1 + ' is Smaller then ' + num2);
}else{
    console.log('There are booth same');
}

//======== Conditional day tracker ==============

var date = new Date();
//console.log(date);
var today = date.getDay();
//console.log(today);

if(today === 0){
    console.log('Tody is Sunday');
}else if(today === 1){
    console.log('Tody is Monday');
}else if(today === 2){
    console.log('Tody is Tuesday');
}else if(today === 3){
    console.log('Tody is Wednesday');
}else if(today === 4){
    console.log('Tody is Thursday');
}else if(today === 5){
    console.log('Tody is Friday');
}else if(today === 6){
    console.log('Tody is Saturday');
}else{
    console.log('The input is invalid please try agin latter ');
}