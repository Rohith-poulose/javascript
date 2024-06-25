
// function update() {
//     var str = document.getElementById("words").value;
//     cleanstr = str.replace(/[ ]/g, "").toLowerCase();
//     let words = cleanstr.split('').reverse().join("");
//     var result = document.getElementById("result");
//     if (cleanstr == words) {
//         result.innerHTML = "is palindrome";
//         console.log('palindrome')
//     }
//     else {
//         result.innerHTML = "is not palindrome";
//         console.log('not palindrome')
//     }
// }
// let i=0;
// for(i;i<=10;i++){
//     console.log(i)
// }
// console.log(`last num is ${i}`)
// while(i<=20){
//     console.log(i)
//     i++;
// }
// console.log(`last num is ${i}`)
// let j=10;
// do{
//     console.log(j)
//     console.log('do while')

//     j--;
// }while(j>1)





const body = document.querySelector('body');
const button = document.getElementById('btn');
const color = document.getElementById('color');
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f']


button.addEventListener('click', function () {
    let hexcode = '#';
    for (let i = 0; i < 6; i++) {
        hexcode += randhexcolor()
    }
    body.style.background = hexcode;
    color.textContent = hexcode
})

function randhexcolor() {
    let hexcolor = Math.floor(Math.random() * 16);
    return hex[hexcolor]
}
let nums = [1,2,5,7,9];
let target = 14;
function twosum (nums,target){
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++)
    if(nums[i]+nums[j]==target)
        return [ i ,j ]
}   
}
console.log(twosum(nums,target));