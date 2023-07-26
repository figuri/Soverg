// import the required modules
const { Triangle, Circle, Square } = require("./shapes.js");
const fs = require("fs");

// I need to test to see if the app will correctly render the svg for each shape
describe("Triangle", () => {
  it("should render a triangle", () => {
    const triangle = new Triangle(100, "red", "blue");
    expect(triangle.render()).toBe(
      '<svg height="100" width="100"><polygon points="50,0 100,100 0,100" style="fill:blue;stroke:red;stroke-width:1" /></svg>'
    );
  });
});

describe("Circle", () => {
  it("should render a circle", () => {
    const circle = new Circle(100, "red", "blue");
    expect(circle.render()).toBe(
      '<svg height="100" width="100"><circle cx="50" cy="50" r="50" style="fill:blue;stroke:red;stroke-width:1" /></svg>'
    );
  });
});

describe("Square", () => {
  it("should render a square", () => {
    const square = new Square(100, "red", "blue");
    expect(square.render()).toBe(
      '<svg height="100" width="100"><rect width="100" height="100" style="fill:blue;stroke:red;stroke-width:1" /></svg>'
    );
  });
});
// I need to test to see if the app will correctly set the color for each shape
describe("Triangle", () => {
  it("should set the color of the triangle", () => {
    const triangle = new Triangle(100, "red", "blue");
    expect(triangle.color).toBe("red");
  });
});

// I need to test to see if the app will correctly set the text for each shape
// I need to test to see if the app will correctly set the text color for each shape 
// I need to test to see if the app will correctly write the svg to a file
// I need to test to see if the app will correctly open the svg in the browser

  module.exports = { Triangle, Circle, Square };

