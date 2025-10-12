// Week 2 Pizza Place homework

// Create 2 variables, pizzaPlace and pizzaToppings
const pizzaPlace = "FantasticFork";
const numberOfToppings = 4;

// console.log() the following sentence, using your variables:
console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

// Apply a template literal to FantasticFork
console.log(`At ${pizzaPlace}, we have${numberOfToppings} toppings.`);

// "If Statement" for quality and quantity of toppings
if (numberOfToppings < 2) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
//Bonus Challenge - Loop to print even numbers from 1 to numberOfToppings

for (let i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// we want to loop this code let i = 1 meaning we start counting at 1
// i <= numberOfToppings keeps looping as long as i is less than or equal to 4 toppings
// i++ means we are increasing i by 1 each time it loops

// we would use this for pattern detection, timed action, data filtering, and more..
