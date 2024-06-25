const box = document.getElementById("inputbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result= document.getElementById("result")
let temp;

function convert(event){
    event.preventDefault();
    if(tofahrenheit.checked){
        temp = (box.value * 9/5) + 32;
        result.innerHTML = temp.toFixed(1) + "° F";
    }
    else if(tocelsius.checked){
        temp = (box.value - 32) * 5/9;
        result.innerHTML = temp.toFixed(1) +"° C";
    }
    else{
        result.innerHTML = "Please select a conversion";
    }
}