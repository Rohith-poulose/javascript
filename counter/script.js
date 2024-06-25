let count = 0
var num = document.getElementById("num")


function add(){
    count ++
    num.textContent=count
}


function minus(){
    --count
    num.textContent=count
}
function reset(){
    count=0
    num.textContent=count
}