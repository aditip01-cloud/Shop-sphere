let btn1 = document.querySelector(".clothes");
let btn2 = document.querySelector(".stationary");
let btn3 = document.querySelector(".jewellery");

if (btn1) {
    btn1.addEventListener("click", () => {
        window.location.href = "electronics.html";
    });
}

if (btn2) {
    btn2.addEventListener("click", () => {
        window.location.href = "stationary.html";
    });
}

if (btn3) {
    btn3.addEventListener("click", () => {
        window.location.href = "jewel.html";
    });
}

let cart = document.querySelectorAll(".cart");

cart.forEach(x => {
    x.addEventListener("click", () => {
        alert("Item added to cart Successfully");
    });
});

let remove = document.querySelectorAll(".remove");

remove.forEach(y => {
    y.addEventListener("click", () => {
        alert("Item removed from the cart Successfully");
    });
});