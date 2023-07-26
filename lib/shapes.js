// set up 'Triangle' , 'circle' and 'square' classes
// each class should have a constructor that takes in the following parameters:
// 1. fillColor
// 2. textColor
// 3. text

// triangle class

class Triangle {
  constructor(fillColor, textColor, text) {
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.text = text;
  }
}
// square class

class Square {
  constructor(fillColor, textColor, text) {
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.text = text;
  }
}
// circle class

class Circle {
  constructor(fillColor, textColor, text) {
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.text = text;
  }
}
// export as an object with the classes as properties
module.exports = { Triangle, Circle, Square };
