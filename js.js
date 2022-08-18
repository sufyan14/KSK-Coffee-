function data() {
    var username = document.getElementById("username");
    var number = document.getElementById("number");
    var address = document.getElementById("address");

    var userOP = document.getElementById("userOP");
    var numberOP = document.getElementById("numberOP");
    var addressOP = document.getElementById("addressOP");

    userOP.innerHTML = username.value;
    numberOP.innerHTML = number.value;
    addressOP.innerHTML = address.value;
    document.getElementsByClassName("form")[0].style.display = "none";
    document.getElementById("reciept").style.display = "block";
}

var total = 0;

function order() {
    event.preventDefault();
    var element = document.querySelector("#cof").value;
    var name = element.split("-")[0];
    var price = parseInt(element.split(".").pop());
    var quantity = document.querySelector("#id_form-0-quantity").value;
    total += price * quantity;
    var totalEl = document.querySelector("#total");
    totalEl.innerHTML = total;
    var data = document.querySelector("#product-list");
    data.innerHTML += `<div class="product"><div>Name: ${name}</div><div>Price: ${price}</div><div>Quantity: ${quantity}</div></div><br>`;
}

function reset() {
    var data = document.querySelector("#product-list");
    data.innerHTML = null;
    total = 0;
    var totalEl = document.querySelector("#total");
    totalEl.innerHTML = total;
}