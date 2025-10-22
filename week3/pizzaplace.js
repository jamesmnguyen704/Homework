//Homework Set-up
// 1 Add a "Week 3 Homework" file to your homework repo

//Pizza Place Functions
//Homework Set-up
// 1 Add a "Week 3 Homework" file to your homework repo
//Pizza Place Functions
// 1 Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = ["chicken", "bacon", "sausage", "pepperoni"]; // let is declare variable, pizzaToppings name of array.
// array literal a way to define an array using square brackets [] anything between the brackets is an element of the array
// 2 Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings
//(don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer() { // function declaration "greetCustomer"
  let message = "Welcome to James's Pizza, our toppings are: "; // variable declaration and initialization
  for (let i = 0; i < pizzaToppings.length; i++) {
    // for loop to iterate over the array
    message += pizzaToppings[i]; // concatenate each topping to the message
    if (i < pizzaToppings.length - 1) {
      // condition to check if it's not the last topping
      message += ", "; // add a comma and space if it's not the last topping
    }
  }
  console.log(message); // print the final message to the console
}


// 3 Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) { // rest parameter to capture indefinite ...toppings
  let orderMessage = `One ${size} ${crust} crust pizza with`; // template literal for the order message
  for (let i = 0; i < toppings.length; i++) { // loop over the toppings array
    orderMessage += toppings[i]; // concatenate each topping to the order message
    if (i < toppings.length - 1) {
      // check if it's not the last topping
      orderMessage += ", "; // add a comma and space if it's not the last topping
    }
  }
  orderMessage + " coming up!"; // complete the order message
  console.log(orderMessage); // print the order message
  return [size, crust, toppings]; // return an array with size, crust, and toppings
}


// 4 Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza(pizzaArray) { // function declaration with parameter pizzaArray
  console.log("...Cooking pizza..."); // print cooking message
  return {
    // return an object with size, crust, and toppings
    size: pizzaArray[0], // first element is size
    crust: pizzaArray[1], // second element is crust
    toppings: pizzaArray[2] // third element is toppings array
  };
}


// 5 Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e.
// "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in
function servePizza(pizza) { // function declaration with parameter pizza
  let serveMessage = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `; // template literal for serve message
  for (let i = 0; i < pizza.toppings.length; i++) {
    // loop over the toppings array in the pizza object
  serveMessage += pizza.toppings[i]; // concatenate each topping to the serve message
    if (i < pizza.toppings.length - 1) {
      // check if it's not the last topping
    serveMessage += ", "; // add a comma and space if it's not the last topping
    }
  }
  console.log(serveMessage + " Enjoy!"); // print the serve message
  return pizza; // return the same pizza object
}


// 6 Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer(); // Call greetCustomer to welcome the customer and display toppings
let order = getPizzaOrder("large", "thick", "chicken", "bacon"); // Call getPizzaOrder with size, crust, and toppings
let cookedPizza = preparePizza(order); // Call preparePizza with the order array
servePizza(cookedPizza); // Call servePizza with the cooked pizza object


// 7 Add, commit, and push your JS file to your GitHub repo.


// 8 Send your TA a link to your GitHub Homework repo when finished.

// NOTE: Please refrain from utilizing the Array.toString() method or inadvertently employing string coercion when constructing template literals. The primary objective of this exercise is to provide you with an opportunity to hone your skills in array traversal. Focus on utilizing while, for, and for...of loops to transform the array of toppings into the required output strings.
//The following is not an acceptable solution for Week 3 homework: let pizzaToppings = [" peperoni", " bacon"]; console.log(The pizza toppings are ${pizzaToppings}); After Week 3 this would be a perfectly acceptable solution but not for this assignment. Thank you.
