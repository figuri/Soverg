const fs = require("fs");
const inquirer = require("inquirer");

// 0.1 import shapes.js
const { Triangle, Circle, Square } = require("./lib/shapes.js");

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
    const svg = createSvg(
      answers.shape,
      answers.text,
      answers.textColor,
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

// function to make the svg
function createSvg(shapeType, text, textColor, fillColor) {
  let svg = "";
  let shapeStyle = `fill: ${fillColor};`;
  let textStyle = `fill: ${textColor};`;

  switch (shapeType) {
    case "Triangle":
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,0 300,200 0,200" style="${shapeStyle}"/>
                <text x="120" y="150" font-size="35" style="${textStyle}">${text}</text>
                </svg>`;
      break;
    case "Circle":
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="150" cy="100" r="100" style="${shapeStyle}"/>
                  <text x="130" y="110" font-size="35" style="${textStyle}">${text}</text>
                  </svg>`;
      break;
    case "Square":
      svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="200" style="${shapeStyle}"/>
                  <text x="110" y="160" font-size="35" style="${textStyle}">${text}</text>
                  </svg>`;
      break;
  }
  return svg;
}

// function to open the file in the browser
function openInBrowser(filename) {
  const { exec } = require("child_process");
  exec(`start ${filename}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error opening file: ${err.message}`);
    } else {
      console.log(`Opening ${filename} in the browser`);
    }
  });
}

init();
