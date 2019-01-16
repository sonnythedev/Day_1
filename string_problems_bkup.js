/***
 * Various string/array related exercies
 */

console.log('Hello from Term2 Day 1');

/*
Common string methods.
               i. indexOf(str), indexOf(str, indextostart), lastIndexOf(str), 
               includes(str), split(), length
                
                substring, substr, slice, splice 
                str.replace(oldstr,newstr)
                toLowerCase(), toUpperCase()
                str.concat(str2,str3,str4...) */

//Problem 1: Find out the length of a string

let str1="I am having a good good day"; //should be 22

console.log(str1.length);

//Problem 2: Find out the index of certain string(if exists)

console.log('index of good is:',str1.indexOf('good'));
console.log('search good:',str1.search('good'));


console.log('index of last good is:',str1.lastIndexOf('good'));

//Problem 3: Find out if a string is part of string

console.log('Does food exists?:',str1.includes('food'));
console.log('Does day exists?:',str1.includes('day'));

//Problem 4: Find substring/substr argument 1 is the strting index, argument 2 is the ending index


console.log('Substr of day:',str1.substr(23,27));



//Problem 5: Explore splice //Splice doesn't exist for string

//Problem 6: explore replace function

console.log('replace good with bad:',str1.replace('good','bad'));
console.log('replace good with bad:',str1.replace(/good/g,'bad'));
console.log(str1);

console.log('Slice of str1:',str1.slice(23,27));
console.log('str1:',str1);

str1="I AM HAVING A nice DAY still!";

console.log('demoing tolowercase:',str1.toLowerCase());
console.log('demoing toUpperCase:',str1.toUpperCase());

str1="I";
let str2="Like";
let str3="Smoothie";
let str4="A lot";

let output=str1.concat(' ',str2,' ',str3,' ',str4);
console.log('concat few strings together:',output);

//Problem 7: Demoing split function

console.log('After split:',output.split(" "));

console.log('After split then reverse:',output.split(" ").reverse());

//Problem 8: Demoing repeat function

str1="Goal!";

console.log('repeat 5 times:',str1.repeat(5));

//Problem 9 explore charAt and charCodeAt functions
str1="AaBbCc123";
console.log('char at 0 is:',str1.charAt(0));
console.log('char at 2 is:',str1.charAt(2));

console.log('char code at 0 is:',str1.charCodeAt(0));
console.log('char code at 1 is:',str1.charCodeAt(1));
console.log('char code at 2 is:',str1.charCodeAt(2));
console.log('char code at 2 is:',str1.charCodeAt(3));
console.log('char code at 6 is:',str1.charCodeAt(6));
console.log('char code at 7 is:',str1.charCodeAt(7));

//Problem 10: explore startsWith, endsWith

str1="              Learning is           cool               ";

console.log('starts With Learn:',str1.startsWith("Learn"));

console.log('Ends With cool:',str1.endsWith("cool"));

//Problem 11: Trim a string
console.log('before trim:',str1);
console.log('trim the string:',str1.trim());

////function has a name. it might have parameters or function arguments.
///it might do any type of calculation. It might return value. If it doesn't
//return value, then when we call it, it wont return any value and will be undefined

function addGreeting(name){
    let output="Hello there "+name;
    return output;
}

function doubleMe(num){
     2*num;
     //return 2*num;
}

console.log('addGreeting(sonny):',addGreeting('sonny'));
console.log('doubleMe(num):',doubleMe(4));




