// 0. import node modules by defining variables with require
const shapes = require("./lib/shapes.js");
const fs = require("fs");
const inquirer = require("inquirer");

const {exec} = require("child_process");
// the above varuable is used to execute a command in the terminal, in this case, the command is used to open the logo.svg file in the browser

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
    type: "input",
    name: "text",
    message: "what text would you like to add?",
  },
  {
    type: "input",
    name: "textColor",
    message: "what color would you like the text to be?",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like to draw?",
    choices: ["Triangle", "Circle", "Square"],
  },

  {
    type: "input",
    name: "fillColor",
    message: "what color would you like the shape to be?",
  },
];
// init function to prompt the user for input and create the svg
function init() {
  inquirer.prompt(questions).then((answers) => {
    // inquirer returns the answers as an object
    const svg = createSvg(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.fillColor
    );
    // svg is defined above as a string so we can write it to a file
    // fs is a node module that allows us to write to a file
    // if there is an error, throw it
    fs.writeFile("logo.svg", svg, (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
      // if there is no error, log that the file has been saved
    });
  });
}
init();
//^ call the init function to start the program
// function to make the svg
function createSvg(shape, text, textColor, fillColor) {
  // above we are passing in the user input as arguments
  let svg = "";
  let shapeStyle = `fill: ${fillColor};`;
  let textStyle = `fill: ${textColor};`;
//   we "let" the variables above so we can change them later, if we used "const" we would not be able to change them
// shapeStyle and textStyle are used to define the style attribute in the svg
  // we need to create an instance of the class based on the user input
  // we make a new instance of the class and pass in the user input
  // break out of the switch statement and make another instance
  // based on the user input, create an instance of the class
//   we add the text, textColor and shapeColor to the constructor
// then in the backticks, we add the text, textColor and shapeColor to the style attribute
  switch (shape) {
    case "Triangle":
      svg = `<svg width="300" height="200">
      <polygon points="150,0 300,200 0,200" style"${shapeStyle}"/>
      <text x="120" y="150" font-size="35" fill="${textStyle}">${text}</text>
      </svg>`
      break;
//       we use the backticks to define the svg
//      we use the ${} to add the variables to the svg, these variables are defined above as the user input
    case "Circle":
      svg = `<svg width="300" height="200">
        <circle cx="150" cy="100" r="100" style"${shapeStyle}"/>
        <text x="130" y="110" font-size="35" fill="${textStyle}">${text}</text>
        </svg>`
      break;
    case "Square":
      svg = `<svg width="300" height="200">
        <rect width="300" height="200" style"${shapeStyle}"/>
        <text x="110" y="160" font-size="35" fill="${textStyle}">${text}</text>`
      break;
  }
  return svg.render();
}
