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

//Problem 1
function reverseStr(str){
    let output='';
    for(let i=(str.length-1); i>=0; i--){
         output=output+str[i];
         //output+=output+str[i];
    }
    return output;
}

//Problem 2 : with regular loop
function reverseWords(str){
    let output='';
    let lastWordIndex=str.length;
    for(let i=(str.length-1); i>=0; i--){
        if(str[i]==' '){
            //This means it's the end of a word
            word=str.substring(i+1,lastWordIndex);
            console.log(word);
            lastWordIndex=i;
            output +=' '+word;
        }
    }
    output +=' '+str.substring(0,str.indexOf(' '));
    return output;
}

//Problem 2 : with split and reverse
function reverseWords_V2(str){
     return str.split(' ').reverse().join(' ');
}

//Problem 3: count number of vowels

function countVowels(str){
    let vowelCount=0;
    for(let i=0; i<str.length; i++){
        if('AEIOUaeiou'.includes(str[i])){
           vowelCount++;
        }
    }
    return vowelCount;
}

//Problem 4:  check if a string is Palindrome AbbA, abcddcba etc.

function isPalindrome(str){
   for(let i=0; i<str.length; i++){
       //loop through first to last
       if(str[i]!=str[str.length-1-i]){
           return false;
       }
   }
   return true;
}

//Problem 4:  Palindrome: using split, reverse version

function isPalindrome_V2(str){
    if(str.split('').reverse().join('')==str){
        return true;
    }
    return false;
    
}

//Problem 5: Find count of word


function findCountOfWord(str,word){
    let count=0;
    arr=str.split(' ');
    for(let i=0; i<arr.length; i++){
        if(arr[i]==word){
            count++;
        }
    }
    return count;
}



