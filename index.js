// add solution here
function theBeatlesPlay(arraym,arrayi){
  var array=[]
  for (let i=0;i<arraym.length;i++){
    array.push(arraym[i]+" plays "+arrayi[i])
  }
  return array
}
function iLoveTheBeatles(number){
  var array=[]
  do{
    array.push('I love the Beatles!')
    number++
  } while (number<15)
  return array
}