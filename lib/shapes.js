// set up 'Triangle' , 'circle' and 'square' classes
// each class should have a constructor that takes in the following parameters:
// 1. fillColor
// 2. textColor
// 3. text
// each class should have a render method that returns an svg string

class Shape {
  // parent shape class
  constructor(fillColor, textColor, text) {
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.text = text;
  }
// set color method to set the color of the shape
  setColor(color) {
    this.fillColor = color;
    // "this" refers to the object that called the method
  }
}
// traingle class is an extension of the shape class and inherits the properties of the shape class
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
    // the render method is used to render the svg
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

// export as an object with the classes as properties
module.exports = { Triangle, Circle, Square, Shape };
