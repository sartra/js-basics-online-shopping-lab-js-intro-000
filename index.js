// Define a global variable (use var at the top level) called cart. Initialize it as an empty array.
// Define a function getCart that takes no arguments and returns the cart

var cart=[];

function getCart() {
  return cart
}

// Define a function addToCart. This function should accept one argument, the item the user wants to purchase.
// This function should automatically set a price for this item by generating a random number between 0 and 100. (Hint: Math.random() generates a random number in 0, 1; Math.floor() rounds a number down to the nearest integer.)
// This function should add the item and the price as an object ({item: price}) to the cart array. This function should print out to the console <item> has been added to your cart. and return the cart.
function addToCart(item){

  const price = Math.floor(Math.random() * 100)

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}

// Define a function viewCart which does not accept any arguments. This function should loop over every item in cart to print out "In your cart you have [item and price pairs].". If there isn't anything in your cart, the function should print out "Your shopping cart is empty.".
function viewCart(){
      const l = cart.length

      if (!l) {
        return console.log("Your shopping cart is empty.")
      }

      const itemsAndPrices = []

      for (let i = 0; i < l; i++) {
        let itemAndPrice = cart[i]
        let item = Object.keys(itemAndPrice)[0]
        let price = itemAndPrice[item]

        itemsAndPrices.push(`${item} at \$${price}`)
      }

      console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

// Define a function removeFromCart which accepts one argument, the name of the item you wish to remove. If the item isn't in the cart, the function should print out "That item is not in your cart.". If the item is in your cart, it should remove the object from the cart array. Then return the cart. (HINT: Check each object's key to see if it matches the parameter, then remove it if it matches. You might find hasOwnProperty to be useful.)
function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}


// Define a function placeOrder which accepts one argument, a credit card number. If no argument is received, then the function should print out "We don't have a credit card on file for you to place your order.". If there is a credit card on file, the function should print out "Your total cost is $${total()}, which will be charged to the card ${cardNumber}.". The function should empty the cart array.
function placeOrder(cardNumber){
  if(!cardNumber){
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = [];

}


function setCart(newCart) {
  cart = newCart;
}


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
