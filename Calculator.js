
let outPutScreen=document.getElementById("outPutScreen")
let calculator=document.getElementById("calculator")
function display(num){
   outPutScreen.value+=num
}

function calculate(){
    try{
        outPutScreen.value=eval(outPutScreen.value)
        return
    }
    catch(err){
        alert("Invalid Input")
    }   
}

function remove(){
    outPutScreen.value=outPutScreen.value.slice(0,-1)
}

function cancel(){
    outPutScreen.value=""
}
