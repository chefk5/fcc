
function findLongestWord(str) {
  var words=str.split(" ");
  var max=words[0].length;
  for(var i=1;i<words.length;i++){
    if(max<words[i].length){
      max=words[i].length;
      
    }
    
  }
  
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
