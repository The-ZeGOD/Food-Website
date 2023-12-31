import { foodItem } from "./fooditem.js";

console.log(foodItem);

//To display all items in the list
function displayItems() {
    var biryani = document.getElementById('biryani');
    var chicken = document.getElementById('chicken');
    var paneer = document.getElementById('paneer');
    var vegetable = document.getElementById('vegetable');
    var chinese = document.getElementById('chinese');
    var southIndian = document.getElementById('south-indian');

    const biryaniData = foodItem.filter(item => item.category == 'biryani');
    console.log("Biryani Data: ", biryaniData);
    const chickenData = foodItem.filter(item => item.category == 'chicken');
    console.log("chicken Data: ", chickenData);
    const paneerData = foodItem.filter(item => item.category == 'paneer');
    console.log("paneer Data: ", paneerData);
    const vegetableData = foodItem.filter(item => item.category == 'vegetable');
    console.log("vegetable Data: ", vegetableData);
    const chineseData = foodItem.filter(item => item.category == 'chinese');
    console.log("chinese Data: ", chineseData);
    const southIndianData = foodItem.filter(item => item.category == 'south-indian');
    console.log("south-indian Data: ", southIndianData);

    biryaniData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : Rs.' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);
    })

    chickenData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : Rs.' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chicken.appendChild(itemCard);
    })

    paneerData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : Rs.' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        paneer.appendChild(itemCard);
    })

    vegetableData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : Rs.' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        vegetable.appendChild(itemCard);
    })

    chineseData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : Rs.' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chinese.appendChild(itemCard);
    })

    southIndianData.map(item=> {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
        heart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'Price : Rs.' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard);
    })
}

displayItems();

//To display shortcut button in the right section and mapping them to their equivalent id
const categoryListData = [...new Map(foodItem.map(item => [item['category'], item])).values()];

console.log(categoryListData);

function categoryLists(){
    var categoryList = document.getElementById('category-list');

    categoryListData.map(item=> {
        var listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card');

        var listImg = document.createElement('img');
        listImg.src = item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText = item.category;
        listName.setAttribute('href', '#'+item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard);
    })
}

categoryLists();

//Add to cart
document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click', addToCart);
})

var cartData = [];

function addToCart() {
    // Adding item to cart by selecting their name
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = foodItem.find(element => element.name == itemToAdd);

    console.log(itemObj);

    var index = cartData.indexOf(itemObj);
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData = [...cartData, itemObj];
        console.log(cartData);
    }
    else if(index > -1){
        alert("Added to cart!");
    }

    document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;

    totalAmount();
    cartItems();
}

function cartItems(){
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    cartData.map(item=> {
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        var rowData3 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerHTML = '-';
        
        var span = document.createElement('span');
        span.innerText = item.quantity;

        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=> {
        item.addEventListener('click', incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=> {
        item.addEventListener('click', decrementItem);
    })
}

var currPrice = 0;

function incrementItem(){
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    var incObj = cartData.find(element => element.name == itemToInc);
    incObj.quantity+=1;

    currPrice = (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1)) / (incObj.quantity-1);

    incObj.price = currPrice*incObj.quantity;
    totalAmount();
    cartItems();
}

var flag = false;

function decrementItem(){
    let itemToDec = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element=> element.name==itemToDec);
    let ind = cartData.indexOf(decObj);
    if(decObj.quantity > 1){
        currPrice = (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1)) / (decObj.quantity);
        decObj.quantity -= 1;
        decObj.price = currPrice*decObj.quantity;
    }else{
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML = ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerHTML = ' ' + cartData.length;

        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("Currently no item in cart.");
        }
    }
    totalAmount();
    cartItems();
}

function totalAmount(){
    var sum = 0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText = 'Total Items : ' + cartData.length;
    document.getElementById('total-price').innerText = "Total Price: Rs." + sum;
    document.getElementById('m-total-amount').innerText = "Total Price: Rs." + sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
    }else{
        alert("Currently no items in cart.");
    }
}

document.getElementById('add-address').addEventListener('click', addAddress);
document.getElementById('m-add-address').addEventListener('click', addAddress);

function addAddress(){
    var address = prompt('Enter your address:');
    if(address){
        document.getElementById('add-address').innerText = ' ' + address;
        document.getElementById('m-add-address').innerText = ' ' + address;
    }else{
        document.getElementById('add-address').innerText = 'Your Address';
        alert('Please enter an address!');
    }
}

window.onresize = window.onload = function(){
    var size = window.innerWidth;
    if (size < 800) {
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents();
    }

    if(size>800){
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);   

        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents();
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click', addToCart);
    })
    
    document.querySelectorAll('.increase-item').forEach(item=> {
        item.addEventListener('click', incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=> {
        item.addEventListener('click', decrementItem);
    })
}

document.querySelector('.cart-btn').addEventListener('click', checkout);

function checkout() {
    // You can add your checkout logic here
    // For example, you can display a confirmation message, clear the cart, or redirect to a checkout page
    alert('Thank you for order');
    
    // Clear the cart data (assuming you have a function to clear the cart)
    clearCart();
}

// Function to clear the cart
function clearCart() {
    // Clear your cart data and update the UI accordingly
    cartData = [];
    document.getElementById('cart-plus').innerText = ' 0 Items';
    document.getElementById('m-cart-plus').innerText = ' 0';

    // Update the total amount display
    totalAmount();

    // Hide the cart page
    document.getElementById('food-items').classList.remove('food-items');
    document.getElementById('category-list').classList.remove('food-items');
    document.getElementById('m-cart-plus').classList.remove('m-cart-toggle');
    document.getElementById('cart-page').classList.remove('cart-toggle');
    document.getElementById('category-header').classList.remove('toggle-category');
    document.getElementById('checkout').classList.remove('cart-toggle');
}