// Declare your arrays here
let action = ["god1.webp", "god2.webp", "god4.jpg"]

let comedy = ["zilla.jpg", "gxk.jpg", "gvm.jpg"]

let horror = ["god3.jpg", "skull.jpg", "candy.jpg"]

let div = document.querySelector("div")
// Make sure to declare your HTML elements as variables! 
let input = document.querySelector("input")
// Submit Button 
let submitButton = document.querySelector("button");

submitButton.addEventListener("click", function () {
    if (input.value === "comedy") {
        comedy.forEach(function (Cmovies) {
            console.log(Cmovies)
            let p = document.createElement("img")
            p.src = Cmovies;
            div.appendChild(p)
        })
    }
    console.log(movieInput);
})
submitButton.addEventListener("click", function () {
    if (input.value === "horror") {
        horror.forEach(function (Hmovies) {
            console.log(Hmovies)
            let p = document.createElement("img")
            p.src = Hmovies;
            div.appendChild(p)
        })
    }
    console.log(movieInput);
})
  
submitButton.addEventListener("click", function () {
    if (input.value === "action") {
        action.forEach(function (Amovies) {
            console.log(Amovies)
            let p = document.createElement("img")
            p.src = Amovies;
            div.appendChild(p)
        })
    }
    console.log(movieInput);
})



