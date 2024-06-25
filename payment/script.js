const subcribe = document.getElementById("checkbox1")
const visa = document.getElementById("visabtn")
const masterCard = document.getElementById("masterCardbtn")
const rupay = document.getElementById("rupaybtn")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const button = document.getElementById("update")


button.onclick = function () {

// ternary operation to reduce if and else operation
    ternary = subcribe.checked ? "You are subscribed to our newsletter" : "You are not subscribed to our newsletter";
    result1.textContent = ternary;
// switch function to reduce many else if operations
    switch (true) {
        case visa.checked:
            result2.textContent = "You have selected Visa"
            break;
        case masterCard.checked:
            result2.textContent = "You have selected MasterCard"
            break;

        case rupay.checked:
            result2.textContent = "you have selected rupay"
            break;
        default:
            result2.textContent = "You have not selected any payment method"
            break;
    }
}
