"use strict";
var myPet = "Dog";
var myColor = "Green";
function isDog(text) {
    return text == "Dog";
}
var isCat = function (text) { return text == "Cat"; };
console.log(isDog(myPet));
console.log(isCat(myPet));
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.test = function () {
    };
    return MyClass;
}());
