console.log('Hello from variables and arrays');

/*
  
*/


//es6 it's very good at keeping context of variable
//let, const
let x=5;
x=7; ////this will give error
console.log('x',x);

{
    let x=10;
    console.log('x value inside block scope:',x);
}

console.log('x value outside block scope:',x);

//es6 has new modifer called const
const y='I cant be changed';
//y='lets change this';

//const is useful for defining a function, or variables that you know wont change

const myFunction=function(){

};

let a=50;
//let z=100; //same scope
for(let z=0;z<10;z++){ //different scope
    console.log('z:',z);
    
}
let z=50; //same scope


//leaking the variable outside of for loop context
///WHICH IS A BAD THING!
console.log('z outside for:',z);

x=150;

for(x=0;x<10;x++){
    console.log('something else');
}
x=10;
//// adding number and strings

a=10;
let b=5;

console.log('a+b',a+b);

console.log(5+10+parseInt('5')); //155 

console.log(parseFloat('3.5')+parseFloat('2.5'));

console.log('3.5'*'2');

console.log('Number.MAX_VALUE IS',Number.MAX_VALUE);
console.log('Number.MIN_VALUE IS',Number.MIN_VALUE);
console.log('Infinity is',typeof Infinity);

////review array structure

///array methods, push, pop, shift, unshift, splice, slice, indexOf
///forEach, map, filter, reduce, join

let arr=['apple','banana','cherry','kiwi','mango','kiwi'];
console.log('index of cherr is:',arr.indexOf('cherr'));
console.log('last index of kiwi :',arr.lastIndexOf('kiwi'));

for(let i=0; i<arr.length; i++){
    //looping through array
    //arr[i]=arr[i]+' pie';
    //console.log(arr[i]+' pie');
}

arr.push('pineapple','star fruit');

let fruit=arr.pop();
console.log(fruit);

arr.unshift('aaaple');
console.log(arr);
arr.shift('aaaple');
//'apple*banana*cherry*kiwi'
console.log(arr.join('*'));









