// 0. import node modules by defining variables with require
const shapes = require("./lib/shapes.js");
const fs = require("fs");
const inquirer = require("inquirer");
// 0.1 import shapes.js
const { Triangle, Circle, Square } = require("./lib/shapes.js");
// alternative way to import
// const Triangle = shapes.Triangle;
// const Circle = shapes.Circle;
// const Square = shapes.Square;
// 1. create an array prompt for the user input(shape, text, colors; as object)
// 2. create the svg
// 2.1 write the file

// make a questions array for inquirer to prompt the user
// each object in the array is a question that will be asked
const questions = [
  {
    type: "list",
    name: "shape",
    message: "What shape would you like to draw?",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "textColor",
    message: "what color would you like the text to be?",
  },
  {
    type: "input",
    name: "fillColor",
    message: "what color would you like the shape to be?",
  },
  {
    type: "input",
    name: "text",
    message: "what text would you like to add?",
  },
];
// init function to prompt the user for input and create the svg
function init() {
  inquirer.prompt(questions).then((answers) => {
    // inquirer returns the answers as an object
    const svg = createSvg(
      answers.shape,
      answers.text,
      answers.textColor,
      answers.fillColor
    );
    // svg is defined above as a string so we can write it to a file
    // fs is a node module that allows us to write to a file
    // if there is an error, throw it
    fs.writeFile("output.svg", svg, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
      // if there is no error, log that the file has been saved
    });
  });
}
init();
//^ call the init function to start the program

// function to make the svg
function createSvg(shape, text, textColor, fillColor) {
  // above we imported the classes from shapes.js
  let svg = "";
  // we need to create an instance of the class based on the user input
  // we make a new instance of the class and pass in the user input
  // break out of the switch statement and make another instance
  // based on the user input, create an instance of the class
  switch (shape) {
    case "Triangle":
      svg = new Triangle(fillColor, textColor, text);
      break;
    case "Circle":
      svg = new Circle(fillColor, textColor, text);
      break;
    case "Square":
      svg = new Square(fillColor, textColor, text);
      break;
  }
  return svg.render();
}
