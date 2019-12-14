let myPet: string = "Dog";

type Color = "Red" | "Green" | "Blue";

const myColor: Color = "Green";

function isDog(text: string): boolean {
    return text == "Dog";
}

const isCat = (text: any) => text == "Cat";

console.log(isDog(myPet));
console.log(isCat(myPet));

class MyClass {
    test() {
    }
}

