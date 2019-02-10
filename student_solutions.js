/***
 * 
Problem 1: Write a function that takes in a string and returns the reverse of 
it. For example, if you pass  ‘Alrighty then’ It should return ‘neht ythgirlA’.


Problem 2: Write a function that takes in a string or sentence and reverses 
in terms of words. For example, if you pass “Have a nice day” it should 
return “day nice a Have”.

                  a. First write the solution with regular loop
                  b. Then write another version using the split, reverse etc.(built in functions).


Problem 3: Write a function that takes a string and counts how many vowels it 
has if any. For example,  “I like the park”, it should return 5( I i e e a).


Problem 4: Write a function that takes a string and checks if it’s a 
Palindrome or not. Palindrome are that if you reverse it, you get the same 
string. For example, ‘AbbA’ , ‘mam’, ‘AbcddcbA’ are palindrome.

                     a.Write this with regular looping at first
                     b. Then try to see if you can do it with split and reverse methods.


Problem 5: Write a function that returns how many times a word repeates in a
sentence. For example, "I am a huge huge fan!","huge" should return 2
If it can't find the word it should return 0
                                            
*/

/*
Problem 1: Write a function that takes in a string and returns the reverse of 
it. For example, if you pass  ‘Alrighty then’ It should return ‘neht ythgirlA’. */

//Problem1 solution
function revStr(str){
    //"Alrigthy then" should return "neht yhtgirlA"
    let output='';
    for(let i=str.length-1; i>=0; i--){
        //output=output+str[i];
        output+=str[i];
    }
    return output;
}

let str="Alrighty then";
console.log(revStr(str));

//Problem2 solution b

function reverseWords(str){
    //Have a nice day
    /*
    let arr=str.split(' ');
    //arr=['Have','a','nice','day']
     arr.reverse();
    //arr=['day','nice','a','Have']
     let str=arr.join(' ');
     return str;
     */
    return str.split(' ').reverse().join(' ');
}

function reverseWords_V2(str){
    //Have a nice day --> day nice a Have
    let output='';
    let lastSpaceIndex=str.length;
    for(let i=str.length-1; i>=0; i--){
        if(str[i]==' '){
            output +=' '+str.substring(i+1,lastSpaceIndex);
            lastSpaceIndex=i;
        }
    }
    output +=' '+str.substring(0,lastSpaceIndex);
    return output;
}
console.log(reverseWords_V2('Have a nice day'));

let arr2=[1,2,3,4,5];
let arr3=[6,7,8,9];

function myFunc(){
    //Inside function if you use let then it creates a separate context
    //But if you dont use let; then it will point to global variables
    let arr2=[10,11,12];
    let arr3=[13,14,15];
    arr2=arr3;
}
myFunc();
console.log('arr2:',arr2);
console.log('arr3:',arr3);


/*
Problem 3: Write a function that takes a string and counts how many vowels it 
has if any. For example,  “I like the park”, it should return 5( I i e e a).
*/

function countVowels(str){
    //let vowelsArr=['a','e','i','o','u'];
    str=str.toLowerCase();
    let countVowels=0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='a' ||str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            countVowels++;
        }
    }
    return countVowels;

}
//I lIkE the park should return 5
function countVowels_V2(str){
    //str=str.toLowerCase();
    vowelStr='aeiouAEIOU';
    let countVowels=0;
    for(let i=0; i<str.length; i++){
        if(vowelStr.includes(str[i])){
            countVowels++
        }
    }
    return countVowels;
}

console.log(countVowels_V2('I lIke ThE pArk'));
/*
Problem 4: Write a function that takes a string and checks if it’s a 
Palindrome or not. Palindrome are that if you reverse it, you get the same 
string. For example, ‘AbbA’ , ‘mam’, ‘AbcddcbA’ are palindrome.

                     a.Write this with regular looping at first
                     b. Then try to see if you can do it with split and reverse methods.
*/

function isPalindrome(str){
    str=str.toLowerCase();
    let boolPalin=false;
    //If str is man then it should be nam
    if(str==str.split('').reverse().join('')){
        boolPalin=true;
    }
    return boolPalin;
}

console.log('AbbA is palindore?:',isPalindrome('AbbA'));
console.log('aBBA is palindore?:',isPalindrome('aBBA'));
console.log('asdfs is palindore?:',isPalindrome('asdfs'));

//racecarb  
function isPalindrome_V2(str){
    let len=str.length;
    for(let i=0; i<len; i++){
        if(str[i]!=str[len-1-i]){
            return false;
        }
    }
    return true;
}

console.log('AbbA is palindore?:',isPalindrome_V2('AbbA'));
console.log('aBBA is palindore?:',isPalindrome_V2('aBBA'));
console.log('asdfs is palindore?:',isPalindrome_V2('racecar'));


function repeatTimes(word,time){
    let output=''
    for(let i=0; i<time; i++){
       output +=' '+word;
    }
    return output;
}

str="Because I am happy "
str.repeat(27);

str="I am happy";
console.log(str.slice(0,5));
console.log(str.substring(0,5));
console.log(str);
//str.splice(0,5);

/*
Problem 5: Write a function that returns how many times a word repeates in a
sentence. For example, "I am a huge huge fan!","huge" should return 2
If it can't find the word it should return 0
*/

function findRepeats(str,word){
     let found=0;
     let strArr=str.split(' ');
     for(let i=0; i<strArr.length; i++){
         if(strArr[i]==word){
             found++;
         }
     }
     return found;
}

console.log(findRepeats("I am a huge huge fan!","huge"));


