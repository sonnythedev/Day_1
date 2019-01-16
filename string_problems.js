/***
 * Various string/array related exercies
 */

console.log('Hello from Term2 Day 1');

/*
Common string methods.
               i. indexOf(str), indexOf(str, indextostart), 
               lastIndexOf(str), 
               includes(str), split(), length
                
                substring, substr, slice, splice 
                str.replace(oldstr,newstr)
                toLowerCase(), toUpperCase()
                str.concat(str2,str3,str4...) */

//Problem 1: Find out the length of a string

/* 
Javascript Data Types:

1. string  ---> 'I am a string', '', '123'
2. boolean  ---> true/false 
3. array   ----> [1,2,3], ['apple','orange','banana'], [1,'abc',true]
4. object  ---> {
                   'name':'John Doe',
                   'occupation':'Coder',
                   'age':'not telling',
                    
                }
                
5. number
     a. Integer  -1,2,3,100 etc
     b. Float   ->1.3
     math library/class has many math related fucntion
     math.round(2.3), math.ceil(2.3), math.random(), math.max()
     math.min()

     parseInt('123abc'), toFixed(2.343,2)

6. null --->let x=null; let x;
7. undefined ---> the variable doesn't exist

== , ===

5=='5' //true  if(x==='125'){

               }
5==='5' //false

*/

let str1="I am having a good good day"; //should be 22

console.log(str1,str1.length);


console.log('index of good is:',str1.indexOf('good'));

console.log('index of second good is:',str1.indexOf('good', str1.indexOf('good')+1));

console.log('index of bad is:',str1.indexOf('bad'));

console.log('last index of good is:',str1.lastIndexOf('good'));

//Problem 2: Find out the index of certain string(if exists)

console.log('includes good?:',str1.includes('good')); //returns 
//either true or false
console.log('includes bad?:',str1.includes('bad'));
//console.log('index of good is:',str1.indexOf('good'));

//substring/substr

str1="I like soccer";
console.log('substr 0,6 is:',str1.substring(0,6));

//toLowerCase(), toUpperCase()
str1="I likE SoCCer";
console.log('to lower case is:',str1.toLowerCase());
console.log('to upper case is:',str1.toUpperCase());

//concat

str1="Have a";
let str2="Good";
let str3="Day";

let output=str1.concat(' ',str2,' ',str3);
console.log('output after concat is:',output);

//split -> splits the string based on the delimeter passed on the second parameter
let str="Jim*Michael*Danny*TheSupaStar";
let arr=str.split('*');
console.log('arr after splitting is:',arr);

//typeof --> it's a operator, and it lets you check the data type of variable

let a='I am a string';
let b=25;
let c='25';
let d=[1,2,3,4,'banana',5,6];
let e={}; 
let f=null;
let g=undefined;

console.log('type of:',a,': ',typeof a);
console.log('type of:',b,': ',typeof b);
console.log('type of:',c,': ',typeof c);
console.log('type of:',d,': ',typeof d);
console.log('type of:',e,': ',typeof e);
console.log('type of:',f,': ',typeof f);
console.log(g);

console.log('null and undefined comparison',null===undefined);

////Continuation of some more string methods
str1="I like like like you a lot";
console.log('replace like with dislike(first occurance):',str1.replace('like','dislike'));
console.log('replace like with dislike(globally):',str1.replace(/like/g,'dislike'));

//charAt charCodeAt

str1="AaBbCcDdEe123";
console.log('charAt 0 is:',str1.charAt(0));
console.log('charAt 1 is:',str1.charAt(1));
console.log('charAt 10 is:',str1.charAt(9));

console.log('charCodeAt 0 is:',str1.charCodeAt(0));
console.log('charCodeAt 1 is:',str1.charCodeAt(1));
console.log('charCodeAt 2 is:',str1.charCodeAt(2));
console.log('charCodeAt 3 is:',str1.charCodeAt(3));

console.log('charCodeAt 10 is:',str1.charCodeAt(10));

//explore slice and splice methods on string
str1="Have a nice day";
//slice and substring/substr has same functionality
console.log('slice at 0,5:',str1.slice(0,5));
//console.log('splice at 0,5:',str1.splice(0,5));







