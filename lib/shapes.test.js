// need to test if the index.js file is working properly
// we can do this by testing the functions that are exported from the shapes.js file
// we can test the functions by creating a test file
// Path: lib\shapes.test.js
// import the functions we want to test
const { Triangle, Circle, Square, Shape } = require("./shapes.js");
const fs = require("fs");
// now that i have imported the functions i want to test, i can write my tests
// i can use the describe function to group my tests
// the describe function takes two arguments
// 1. a string that describes the group of tests
// 2. a callback function that contains the tests
describe("Shape", () => {
  // the it function is used to write a test
  // it takes two arguments
  // 1. a string that describes the test
  // 2. a callback function that contains the test
  it("should set the color of the shape", () => {
    // create a new instance of the shape class
    const shape = new Shape();
    // call the setColor method on the shape instance
    shape.setColor("red");
    // expect the shape instance's fillColor property to equal "red"
    expect(shape.fillColor).toEqual("red");
  });
});
// now that i have written my test, i can run it
// npm run test

// the test passes! now i can write tests for the other classes

// triangle class
// first I use the describe method to group my tests
// then I use the it method to write my test
// the it method takes two arguments
// 1. a string that describes the test
// 2. a callback function that contains the test
// I create a new instance of the triangle class
// I use the expect method to test if the render method returns a string that contains the <polygon> tag
// if it does, the test passes (boolean of true)
describe("Triangle", () => {
  it("should render a triangle", () => {
    const triangle = new Triangle();
    expect(triangle.render()).toContain("<polygon");
  });
});
// square class
// the same steps can be applied as above for the triangle class, we just change the values for the square class
describe("Square", () => {
  it("should render a square", () => {
    const square = new Square();
    expect(square.render()).toContain("<rect");
  });
});
// circle class
// same as other class tests. we just change the values for the circle class
describe("Circle", () => {
  it("should render a circle", () => {
    const circle = new Circle();
    expect(circle.render()).toContain("<circle");
  });
});
// the tests pass, now i can run test for a whole svg string
// i can do this by creating a test file
describe("SVG", () => {
  it("should render an svg string", () => {
    // it method takes two arguments
    // 1. a string that describes the test
    // 2. a callback function that contains the test
    const triangle = new Triangle();
    const circle = new Circle();
    const square = new Square();
    // we create a variable for each new instance of each class for potential future use
    const svg = triangle.render() + circle.render() + square.render();
    // we create a variable for the svg string
    // we use the render method on each instance of the class to create the svg string
    expect(svg).toContain("<svg");
    // we use the expect method to test if the svg string contains the <svg> tag
    // if it does, the test passes (boolean of true)
  });
});

