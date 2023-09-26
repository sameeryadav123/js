let animals=['Dodo', 'Tiger', 'Penguin', 'Dodo']
  function lastIdx(arr,searching){

    for(let i=arr.length-1;i>=0;i--){
      if(arr[i] === searching){
        return i;
      }
    }
    return -1
  }

  console.log(lastIdx(animals,"Dodo"))
  console.log(lastIdx(animals,"Tiger"))