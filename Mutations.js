
function mutation(arr) {
  var word1=arr[0].toLowerCase();
  var word2=arr[1].toLowerCase();
  if(word1.length<word2.length){
  for(var i =0;i<word1.length;i++){
    if(!word2.includes(word1[i]))
      return false;
    
  }
  return true;
}
  else{
    for(var j =0;j<word2.length;j++){
    if(!word1.includes(word2[j]))
      return false;
    
  }
  return true;
    
  }
  
}
  

mutation(["hello", "hey"]);
