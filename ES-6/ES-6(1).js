// PROBLEM 3
// Problem 3
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]
// Do this Problem using Arrow function.



let convertUpperToLower=(arr)=>{

    let newArray=[];
    
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";

    for(let i=0;i<arr.length;i++){

        let str=arr[i];

        let bag="";
        for(let j=0; j<str.length;j++){

            for(let k=0 ;k<upper.length;k++){
                if(str[j] === upper[k] ){
                    bag+=lower[k]
                }
            }
        }
        console.log(bag)
        newArray.push(bag)
    }
    console.log(newArray)
}
convertUpperToLower(["MA", "SA", "I", "SCH", "OOL"])



