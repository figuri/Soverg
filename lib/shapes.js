// set up 'Triangle' , 'circle' and 'square' classes
// parent class of all shapes
class Shape {
  constructor(fillColor, textColor, text) {
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.text = text;
  }
  // each shape has a render method
  render() {
    return "";
  }
  setColor(color) {
    this.color = color;
  }
}
// triangle class
// we need to render the HTML code for the triangle's shape
class Triangle extends Shape {
  render() {
    return `<svg width="100" height="100">
      <polygon points="50,0 100,100 0,100"/>
    </svg>`;
  }
}
// square class
// we need to render the HTML code for the square's shape
class Square extends Shape {
  render() {
    return `<svg width="100" height="100">
      <rect width="100" height="100"/>
    </svg>`;
  }
}
// circle class
// we need to render the HTML code for the circle's shape
class Circle extends Shape {
  render() {
    return `<svg width="300" height="200">
      <circle cx="150" cy="100" r="100"/>
    </svg>`;
  }
}
// export as an object with the classes as properties
module.exports = { Triangle, Circle, Square };
