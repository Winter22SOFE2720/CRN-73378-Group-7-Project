
var display = document.getElementById("cart-display");
var empty = document.getElementById("empty");
var cart = [];
if(localStorage.getItem("cart") != null){
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    let p;
    let text;
    for(i = 0; i < cart.length; i++){
        p = document.createElement("p")
        text = document.createTextNode(cart[i].name + ": " + cart[i].quantity);
        p.appendChild(text);
        display.appendChild(p);

        // p = document.createElement("p")
        // text = document.createTextNode(cart[i].quantity);
        // p.appendChild(text);
        // display.appendChild(p);
    }
}else{
    let p = document.createElement("p");
    let text = document.createTextNode("Cart is empty go shop!");
    p.appendChild(text);
    display.appendChild(p);
}

empty.addEventListener("click", function(){
    if(localStorage.getItem("cart") != null){
        localStorage.clear();
    }
    display.innerHTML = "";
    let p = document.createElement("p");
    let text = document.createTextNode("Cart is empty go shop!");
    p.appendChild(text);
    display.appendChild(p);
});
