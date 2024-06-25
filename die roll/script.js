const roll = document.getElementById("btn");

roll.onclick = function () {
    const box = document.getElementById("box").value;
    const dice = document.getElementById("dice");
    const result = document.getElementById("result");
    const rElement = [];
    const image = [];

    for (let i = 0; i < box; i++) {
        const randomnum = Math.floor(Math.random() * 6) + 1;
        rElement.push("dice="+randomnum);
        image.push(`<img src="images/${randomnum}.jpg" alt="dice${randomnum}">`);
    }
    result.textContent=rElement.join('');
    dice.innerHTML = image.join('');
 }
// const roll = document.getElementById("btn");

// roll.onclick = function () {
//     const box = document.getElementById("box").value;
//     const dice = document.getElementById("dice");
//     const result = document.getElementById("result");
//     const rElement = [];
//     const image = [];

//     for (let i = 0; i < box; i++) {
//         const randomnum = Math.floor(Math.random() * 6) + 1;
//         rElement.push(randomnum);
//         image.push(`<img src="images/${randomnum}.jpg" alt="dice${randomnum}">`);
//     }

//     // Convert array to string and set as text content
//     result.textContent = rElement.join(', '); // Join the array elements with a comma

//     // Display the rolled dice images
//     dice.innerHTML = image.join('');
// }
