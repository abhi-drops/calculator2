function displaynumber(num){
   result.value+=num
}

function clearbox() {
  result.value=''
}

function evaluateexp(){

  result.value=eval(result.value)

}

function removelastitem() {

  
  result.value=result.value.slice(0,-1)
}