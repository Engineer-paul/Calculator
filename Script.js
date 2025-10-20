
setInterval(()=>{
  const clock = document.getElementById("clock")
  const date = new Date
  clock.innerHTML = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
},100)

// code of button input display
function input(number){
  const screen = document.getElementById("screen")
  screen.value += number
}
//code for clearing input
function Clear(){
  const secScree = document.getElementById("screen2")
  const screen2 = document.getElementById("screen")
  screen2.value=''
  secScree.innerHTML = ''
}
// code to delete characters
function removeInput(){
  const screen3 = document.getElementById("screen")
  screen3.value =screen3.value.slice(0,-1)
}

//code to evaluate calculations
function Calculationresult(){
  var secScreen = document.getElementById("screen2")
  var screen4 = document.getElementById("screen")
  var expression = screen4.value
  try{
   var result=  eval(expression)
   
   secScreen.innerHTML = result
  }catch (err) {
    if(err instanceof syntaxError){
      secScreen.innerHTML = "INVALID EXPRESSION"
      secScreen.innerHTML = err.message;
    }else{
    }
  }
  
}