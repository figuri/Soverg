// set up 'Triangle' , 'circle' and 'square' classes
// triangle class
class Triangle {
   render() {
         return `
         <div style="width: 0; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid ${this.color};">
         </div>
         `;
    }
}
// circle class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
// square class
class Square {
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
// export as an object
module.exports = { Triangle, Circle, Square };