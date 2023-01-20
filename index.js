// Pseudocode
// All upper case letters convert to lower case letters
// s = s.toLowerCase()
// removing all none alphanumaric characters
// s = s.replace(/\W|_|\s/g," ")
// reverse the string and store it in a new variable
// let reversed = s.split('').reverse().join('')
//campare
// if s is equal to reversed 
// return true 
// else false 
 function palindrome(s){
   s = s.toLowerCase().replaceAll(/\W|_|\s/g,"")
   let reversed =  s.split('').reverse().join('')
   if(s === reversed){
      return true
   }else{
      return false 
   }
 }
console.log(palindrome("A man, a plan, a canal: Panama"))
