// add solution here
function theBeatlesPlay(arraym,arrayi){
  var array=[]
  for (let i=0;i<arraym.length-1;i++){
    array.push(arraym[i]+" plays "+arrayi[i])
  }
  return array
}