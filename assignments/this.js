/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function window() {
  console.log(this);
}
window();

// Principle 2

// code example for Implicit Binding
let greet = {
  greeting: 'Hello ',
  speak: function(name) {
    console.log(this.greeting + name);
  }
}

greet.speak('Andrew');
// Principle 3

// code example for New Binding

function NeighbourSpeak(name) {
  this.greeting = 'Hello ';
  this.name = name;
  this.speak = function() {
    console.log(this.greeting + this.name);
    console.log(this);
  }
}

let greetCrystal = new NeighbourSpeak('Crystal');
// Principle 4

// code example for Explicit Binding