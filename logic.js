function display(num){
       result.value +=num
}
function clearAll(){
    result.value=" "
}
function back(){
    result.value = result.value.slice(0,-1)
}
function calcualte1(){
    try{
    result.value = eval(result.value)
}
catch(error){
    result.style.color='red'
    
     result.value = 'syntax error'
     setTimeout(()=>{
        result.value=" "
     },1000)
}
}
