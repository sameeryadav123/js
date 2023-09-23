//  print pattern 
//     0 
//   0 1 0 
// 0 1 2 1 0 
// 0 1 2 1 0 
//   0 1 0 
//     0 




function roboust(n){

    for(let i=0; i<=n;i++){
        
        let bag="";
        for(let j=0; j<= n-i-1;j++){
            bag+="  ";
        }
        for(let k=0;k<=i;k++){
            bag+=k+" ";
        }
        for(let l=i-1;l>=0;l--){
            bag+=l+" ";
        }
        console.log(bag)
    }
}
roboust(2)

function patternPrinting(n) {
   
    
for(let i=n; i>=0;i--){
    
    let bag="";
    
    for(let j=0; j<=n-i-1;j++){
        bag+="  ";
    }
    for(let k=0; k<=i;k++){
        bag+=k+" ";
    }
    for(let l=i-1;l>=0;l--){
        bag+=l+" ";
    }
    console.log(bag);
}
}
patternPrinting(2)