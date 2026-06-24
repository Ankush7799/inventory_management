let selectedRole = ""; 
let cart = [];
function toggleMenu() {
   
    let menu = document.getElementById("menu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function openPopup(role) {

    selectedRole = role;

    document.getElementById("loginTitle").innerText =
        role + " Login";

    document.getElementById("popup").style.display = "flex";
    document.getElementById("menu").style.display = "none";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
function loginUser() {

// validation
    let user_id = document.getElementById("UserID").value;
    let error = document.getElementById("usernameError");
    let pass=document.getElementById("Password").value

    if ((isNaN(user_id))||( Number(user_id) <= 0)) {
        error.innerText = "Invalid User ID or Password";
        return; // Stop execution here
    } 

//validation 

    if(selectedRole == "Store Officer") {
        window.location.href = "Admin.html";
    }

    else if(selectedRole == "Employee") {
        window.location.href = "Employee.html";
    }

    else if(selectedRole == "Dept. Head") {
        window.location.href = "Dept_head.html";
    }
}
function val_item_val(button){
    let flag=1;

    let row = button.closest("tr");
    let itemName = row.cells[0].innerText;
    let availableQty = Number(row.cells[1].innerText);
    let val = Number(row.querySelector("input").value);

    //validation -selected quantity should be less than available quantity 

    if(val>availableQty)
    {
        flag=0;
        alert("Selected number is greater than available quantity")
    }

    //validation -selected quantity should be greater than 1
    
    if(val<=0){
        flag=0;
        alert("Please select a valid Quantity")
    }
    
    //validation - is item  already present in the cart
    if(flag){
    let existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.qty = val;
    } else {
        cart.push({
            name: itemName,
            qty: val
        });
    }


    console.log(cart);

    let cart_table = "";

for (let item of cart) {
    cart_table += `
        <tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
        </tr>
    `;
}

document.getElementById("cartBody").innerHTML = cart_table;


    }

}
//input validation for itme selction page when employee selects
function val_item_val_emp(button){ 
    let flag=1;// When flag will only then item will be inserted in cart

    let row = button.closest("tr");
    let itemName = row.cells[1].innerText;
    let val = Number(row.querySelector("input").value);

    if(val<=0){
        flag=0;
        alert("Please select a valid Quantity")
    }
    if(flag){
    //validation - is item  already present in the cart
    let existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.qty = val;
    } else {
        cart.push({
            name: itemName,
            qty: val
        });
    }
    console.log(cart);
    // 

    let cart_table = "";

for (let item of cart) {
    cart_table += `
        <tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
        </tr>
    `;
}

document.getElementById("cartBody").innerHTML = cart_table;

// 
}

}