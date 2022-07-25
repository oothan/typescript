"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 20);
console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(5, 15, 10);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(5, 5, 5, 5);
console.log(myRectangle.getInfo());
