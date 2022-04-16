var buttons = document.getElementsByClassName("normal");
for(i = 0; i < buttons.length; i++){
    let butt = buttons[i];
    butt.addEventListener("click", function(){
        let parent = butt.parentElement.parentElement;
        let children = parent.childNodes;
        let div;
        for(j = 0; j < children.length; j++){
            if(children[j].nodeName == "DIV"){
                div = children[j];
                break;
            }
        }
        children = div.childNodes;
        let item_name;
        for(j = 0; j < children.length; j++){
            if(children[j].nodeName == 'H5'){
                item_name = children[j].innerHTML;
                break;
            }
        }

        var cart = [];
        if(localStorage.getItem("cart") != null){
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        console.log(cart);
        parent = butt.parentElement;


        children = parent.childNodes;
        let quantity_input;
        for(j = 0; j < children.length; j++){
            if(children[j].nodeName == 'INPUT'){
                item_quanity = children[j].value;
                break;
            }
        }
        var item = {
            name: item_name,
            quantity: item_quanity
        }
        console.log(item);
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    });
}