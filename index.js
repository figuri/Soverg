// 0. import node modules by defining variables with require
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
    type: "input",
    name: "text",
    message: "what text would you like to add?",
    validate: function (input) {
      if (input.length <= 3) {
        return true;
      }
      return "Please enter up to 3 characters";
    },
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
    const textColor = convertToCssColor(answers.textColor);
    const fillColor = convertToCssColor(answers.fillColor);
//     validate that the user input is a valid color
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
      openInBrowser("logo.svg");
      // if there is no error, log that the file has been saved
      // and call the openInBrowser function with the file name as an argument, this will open the file in the browser
    });
  });
}
function convertToCssColor(colorInput) {
  // If the input is a color keyword, return it as is
  if (isColorKeyword(colorInput)) {
    return colorInput;
  }

  // If the input is a hexadecimal color, convert it to RGB and then to CSS format
  if (isHexadecimalColor(colorInput)) {
    const rgb = colorConvert.hex.rgb(colorInput);
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  // Return black as the default color if the input is invalid
  return "black";
}
function isColorKeyword(colorInput) {
        const colorKeywords = ["red", "blue", "green", "yellow", "purple", "orange", "black", "white"];
        return colorKeywords.includes(colorInput.toLowerCase());
}
// above the isColorKeyword function is used to validate the user input
function isHexadecimalColor(colorInput) {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(colorInput);
        // the code after return is a regular expression, it is used to validate the user input is a hexadecimal color
}
// above the isHexadecimalColor function is used to validate the user input
// function to make the svg
function createSvg(shape, text, textColor, fillColor) {
  // above we are passing in the user input as arguments
  let svg = "";
  let shapeStyle = `fill: ${fillColor};`;
  let textStyle = `fill: ${textColor};`;
  // we "let" the variables above so we can change them later, if we used "const" we would not be able to change them
  // shapeStyle and textStyle are used to define the style attribute in the svg
  // we need to create an instance of the class based on the user input
  // we make a new instance of the class and pass in the user input
  // we use a switch statement to create an instance of the class based on the user input shape which is called as an argument in the function
  // break out of the switch statement and make another instance
  // based on the user input, create an instance of the class
  // we add the text, textColor and shapeColor to the constructor
  // then in the backticks, we add the text, textColor and shapeColor to the style attribute
  switch (shape) {
    case "Triangle":
      svg = `<svg width="300" height="200">
      <polygon points="150,0 300,200 0,200" style"${shapeStyle}"/>
      <text x="120" y="150" font-size="35" fill="${textStyle}">${text}</text>
      </svg>`;
      break;
    // we use the backticks to define the svg
    // we use the ${} to add the variables to the svg, these variables are defined above as the user input
    case "Circle":
      svg = `<svg width="300" height="200">
        <circle cx="150" cy="100" r="100" style"${shapeStyle}"/>
        <text x="130" y="110" font-size="35" fill="${textStyle}">${text}</text>
        </svg>`;
      break;
    case "Square":
      svg = `<svg width="300" height="200">
        <rect width="300" height="200" style"${shapeStyle}"/>
        <text x="110" y="160" font-size="35" fill="${textStyle}">${text}</text>`;
      break;
  }
  return svg;
}
// function to open the file in the browser
function openInBrowser(filename) {
  // exec is a node module that allows us to execute a command in the terminal
  // in this case, we are opening the file in the browser
  const { exec } = require("child_process");
  // the above variable is used to execute a command in the terminal, in this case, the command is used to open the logo.svg file in the browser
  exec(`start ${filename}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error opening file: ${error.message}`);
    }
  });
}
init();
//^ call the init function to start the program
