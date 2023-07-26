// import the required modules
const { Triangle, Circle, Square } = require("./shapes.js");
// test suite for shapes.js
//  contains tests for the following functions:
// 1. Triangle
// 1.1 render
// 1.2 setColor
describe("Triangle", () => {
  test("should render a traingle SVG", () => {
    // create a new triangle object, passing in the required parameters, and assign it to a variable
    const triangle = new Triangle("red", "blue", "test triangle");
    const svg = triangle.render();
    // we need to also test the setColor method
    triangle.setColor("green");
    expect(svg).toContain("<svg");
    expect(svg).toContain("polygon");
    expect(svg).toContain('points="50,0 100,100 0,100"');
    // quotes placement is important: 'points="50,0 100,100 0,100"' the quotes are used to define the points attribute, and each point is separated by a space.
    // the expect statements above are used to test the render method for the triangle class
  });
});
// 2. Circle
describe("Circle", () => {
  test("should render a circle SVG", () => {
    // create a new circle object, passing in the required parameters, and assign it to a variable
    const circle = new Circle("orange", "black", "test circle");
    const svg = circle.render();
    circle.setColor("purple");
    expect(svg).toContain("<svg");
    expect(svg).toContain("circle");
    expect(svg).toContain('cx="150" cy="100" r="100"');
    // here the quotes are used to define the cx, cy and r attributes, single quotes for the whole string, and double quotes for each attribute
    // the expect statements above are used to test the render method for the circle class
  });
});
// 2.1 render
// 2.2 setColor
// 3. Square
describe("Square", () => {
  test("should render a square SVG", () => {
    // create a new square object, passing in the required parameters, and assign it to a variable
    const square = new Square("green", "yellow", "test square");
    const svg = square.render();
    square.setColor("pink");
    expect(svg).toContain("<svg");
    expect(svg).toContain("rect");
    expect(svg).toContain('width="100" height="100"');
    // here the quotes are used to define the width and height attributes, single quotes for the whole string, and double quotes for each attribute
    // the expect statements above are used to test the render method for the square class
  });
});

