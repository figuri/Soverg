// 0. import node modules by defining variables with require
// 0.1 import shapes.js
const shapes = require('./lib/shapes.js');
const Triangle = shapes.Triangle;
const Circle = shapes.Circle;
const Square = shapes.Square;
// alternative way to import
// const { Triangle, Circle, Square } = require('./lib/shapes.js');
// 1. create an array prompt for the user input(shape, text, colors; as object)
// 2. create the svg
        // 2.1 write the file