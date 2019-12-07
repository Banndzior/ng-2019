"use strict";
let myPet = "Dog";
const myColor = "Green";
function isDog(text) {
    return text == "Dog";
}
const isCat = (text) => text == "Cat";
console.log(isDog(myPet));
console.log(isCat(myPet));
class MyClass {
    test() {
    }
}
new MyClass().test();
