
let sum = document.querySelector(".sum1")
let substraction = document.querySelector(".substraction1")
let multiplication = document.querySelector(".multiplication1")
let divide = document.querySelector(".divide1")
let typingSide1 = document.querySelector(".typing1")
let typingSide2 = document.querySelector(".typing2")
let resultSide = document.querySelector(".last-result")

 
sum.onclick = function(){
    if (typingSide1.value == "" || typingSide2.value == "") {
        alert("Xanalardan heç birini boş saxlamayın.")
        return;
        
    }
    else{
        let result = parseFloat(typingSide1.value) + parseFloat(typingSide2.value);
        resultSide.value = result;
    }
 
}

substraction.onclick = function () {

    if (typingSide1.value == "" || typingSide2.value == "") {
        alert("Xanalardan heç birini boş saxlamayın.")
        return;
        
    }
    else{
        let result = parseFloat(typingSide1.value) - parseFloat(typingSide2.value);
        resultSide.value = result;
    }
   
}

multiplication.onclick = function () {
    
    if (typingSide1.value == "" || typingSide2.value == "") {
        alert("Xanalardan heç birini boş saxlamayın.")
        return;
        
    }
    else{
        let result = parseFloat(typingSide1.value) * parseFloat(typingSide2.value);
        resultSide.value = result;
    }
    
    
}

divide.onclick = function () {

    if (typingSide1.value == "" || typingSide2.value == "") {
        alert("Xanalardan heç birini boş saxlamayın.")
        return;
        
    }
    else{
        let result = parseFloat(typingSide1.value) / parseFloat(typingSide2.value);
        resultSide.value = result;
    }
   
}



