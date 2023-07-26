// import the required modules
const { Triangle, Circle, Square } = require("./shapes.js");
// test suite for shapes.js
//  contains tests for the following functions:
// 1. Triangle
// 1.1 render
// 1.2 setColor
class Shape {
    constructor(fillColor, textColor, text) {
      this.fillColor = fillColor;
      this.textColor = textColor;
      this.text = text;
    }
  
    setColor(color) {
      this.fillColor = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<svg width="300" height="200">
        <polygon points="150,0 300,200 0,200" style="fill:${this.fillColor};"/>
        <text x="120" y="150" font-size="35" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<svg width="300" height="200">
        <circle cx="150" cy="100" r="100" style="fill:${this.fillColor};"/>
        <text x="130" y="110" font-size="35" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<svg width="300" height="200">
        <rect width="300" height="200" style="fill:${this.fillColor};"/>
        <text x="110" y="160" font-size="35" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  // Export the classes as properties of an object
  module.exports = { Triangle, Circle, Square };

