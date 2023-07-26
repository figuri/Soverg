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

describe("Circle", () => {
  it("should set the color of the circle", () => {
    const circle = new Circle(100, "red", "blue");
    expect(circle.color).toBe("red");
  });
});

describe("Square", () => {
  it("should set the color of the square", () => {
    const square = new Square(100, "red", "blue");
    expect(square.color).toBe("red");
  });
});
// I need to test to see if the app will correctly set the text for each shape
describe("Triangle", () => {
  it("should set the text of the triangle", () => {
    const triangle = new Triangle(100, "red", "blue");
    expect(triangle.text).toBe("blue");
  });
});

describe("Circle", () => {
  it("should set the text of the circle", () => {
    const circle = new Circle(100, "red", "blue");
    expect(circle.text).toBe("blue");
  });
});

describe("Square", () => {
  it("should set the text of the square", () => {
    const square = new Square(100, "red", "blue");
    expect(square.text).toBe("blue");
  });
});
// I need to test to see if the app will correctly set the text color for each shape 
describe("Triangle", () => {
  it("should set the text color of the triangle", () => {
    const triangle = new Triangle(100, "red", "blue");
    expect(triangle.textColor).toBe("blue");
  });
});

describe("Circle", () => {
  it("should set the text color of the circle", () => {
    const circle = new Circle(100, "red", "blue");
    expect(circle.textColor).toBe("blue");
  });
});

describe("Square", () => {
  it("should set the text color of the square", () => {
    const square = new Square(100, "red", "blue");
    expect(square.textColor).toBe("blue");
  });
});
// I need to test to see if the app will correctly write the svg to a file
describe("Triangle", () => {
  it("should write the triangle svg to a file", () => {
    const triangle = new Triangle(100, "red", "blue");
    fs.writeFile("logo.svg", triangle.render(), (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
    });
  });
});

describe("Circle", () => {
  it("should write the circle svg to a file", () => {
    const circle = new Circle(100, "red", "blue");
    fs.writeFile("logo.svg", circle.render(), (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
    });
  });
});

describe("Square", () => {
  it("should write the square svg to a file", () => {
    const square = new Square(100, "red", "blue");
    fs.writeFile("logo.svg", square.render(), (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
    });
  });
});
// I need to test to see if the app will correctly open the svg in the browser
describe("Triangle", () => {
  it("should open the triangle svg in the browser", () => {
    const triangle = new Triangle(100, "red", "blue");
    fs.writeFile("logo.svg", triangle.render(), (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
      openInBrowser("logo.svg");
    });
  });
});

describe("Circle", () => {
  it("should open the circle svg in the browser", () => {
    const circle = new Circle(100, "red", "blue");
    fs.writeFile("logo.svg", circle.render(), (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
      openInBrowser("logo.svg");
    });
  });
});

describe("Square", () => {
  it("should open the square svg in the browser", () => {
    const square = new Square(100, "red", "blue");
    fs.writeFile("logo.svg", square.render(), (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
      openInBrowser("logo.svg");
    });
  });
});
  module.exports = { Triangle, Circle, Square };

