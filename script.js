
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let cartTotal = parseFloat(localStorage.getItem('cartTotal')) || 0;


function addToCart(itemName, itemPrice) {
  cartItems.push(itemName);
  cartTotal += itemPrice;

  
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('cartTotal', cartTotal.toString());
  
  alert(`${itemName} added to cart!`);
}


function showOrderSummary() {
  let message = "Your Order:\n";
  
  cartItems.forEach(item => {
    message += `- ${item}\n`;
  });
  
  message += `\nTotal: $${cartTotal.toFixed(2)}`;
  
  alert(message);
}


function submitOrder() {
  if (cartTotal == 0) {
    alert('Your cart is empty!');
  }
  else {

    let calculatedTotal = cartItems.reduce((total, itemName) => {
     
      const price = getPriceForItem(itemName); 
      return total + price;
    }, 0);
    
    let message = "Your Order is submitted successfully!\n";
    message += `Total: $${calculatedTotal.toFixed(2)}`;
    
    
    cartItems = [];
    cartTotal = 0;
    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartTotal');
    
    alert(message);
  }
}


function getPriceForItem(itemName) {

  const prices = {
    'Zaatar': 1,
    'Jebneh': 2,
    'Chicken Burger': 4,
    'Beef Burger': 5,
    'Falafel': 2,
    
    'Espresso':3.50,
    'Cappuccino':4.50,
    'Latte':5,
    'Mocha':5.25,
    'Caramel Macchiato':5.50,
    'Caramel Frappuccino':4.75,
    'Iced Mocha':5.50,

    'Brownie Cake':2,
    'Nutella Crepe':4,
    'Lotus Crepe':4,
    'CheeseCake':3



  };
  return prices[itemName] || 0;
}