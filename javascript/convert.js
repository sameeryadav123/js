// Problem-6
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block



function convert(str){
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";
    
    for(let i=0; i<str.length;i++){
      let o=str[i];
      let bag="";
      for(let j=0; j<lower.length;j++){
        if(o == lower[j]){
          bag+=upper[j]
        }
        if(o == upper[j]){
          bag+=lower[j]
        }
      }
      let container="";
      container+=bag
      console.log(container)
    }
      
    }
    
    function upperToLowerAndLowerToUpper(){
       convert( "Test");
    }
    upperToLowerAndLowerToUpper()