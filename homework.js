//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function foodDisplay(person) {
    for (let i in person) {
      console.log(`${i}: ${person[i]}`);
    }
  }
  

foodDisplay(person3)

//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    printInfo = () => {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    addAge = () => {
        this.age++
    }
  }

const john = new Person('John', 27)
const james = new Person('James', 34)

john.printInfo()
james.printInfo()

james.addAge()
james.addAge()
james.addAge()

james.printInfo()


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        console.log("Big word");
        resolve();
      } else {
        console.log("Small number");
        reject();
      }
    });
  }

checkStringLength("Hello")


/*

---------- CodeWars Problem #1 ----------

https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

----- Solution -----

function invert(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = -array[i];
  }
  return result;
}

---------- CodeWars Problem #2 ----------

https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

Given a month as an integer from 1 to 12, return to which quarter of the year it
belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June),
is part of the second quarter; and month 11 (November), is part of the fourth quarter.

----- Solution -----

const quarterOf = (month) => {
  if(month <= 3){
    return 1
  } else if(month <= 6){
    return 2
  } else if(month <= 9){
    return 3
  } else {
    return 4
  }
}
*/