abstract class AbstractShape {
    public calculateArea(): number {
        return 0;
    }
}

interface Shape {
    readonly shapeName: string;
    calculateArea(): number;
}

interface CopyShape {
    copy(): Shape;
}

class Circle implements Shape, CopyShape {
    readonly shapeName: string = 'Circle';
    private radius: number;

    constructor(radius: number = 0) {
        this.radius = radius;
    }

    public calculateArea(): number {
        // return Math.PI * this.radius * this.radius;
        // return Math.PI * Math.pow(this.radius, 2);
        return Math.PI * this.radius ^ 2;
        // prosto: w * h;
        // troj: 0.5 * a * b;
    }

    copy(): Shape {
        return new Circle(this.radius);
    }
}

class Rectangle {
    readonly shapeName: string = 'Rectangle';

    constructor(
        private width: number,
        private height?: number
    ) {
        this.height = height ? this.height : width;
    }

    public calculateArea(): number {
        return this.width * (this.height || 0);
    }
}

class Triangle {
    readonly shapeName: string = 'Triangle';

    constructor(
        private a: number = 1,
        private b: number = 2
    ) { }

    public calculateArea(): number {
        return 0.5 * this.a * this.b;
    }
}

class Square extends Rectangle {
    constructor(size: number) {
        super(size);
    }
}

// const circle = new Circle(1);
// console.log(circle, circle.calculateArea());

// const rectangle = new Rectangle(1, 2);
// console.log(rectangle, rectangle.calculateArea());

// const triangle = new Triangle();
// console.log(triangle, triangle.calculateArea());

const shapes: Shape[] = [
    new Circle(2),
    new Rectangle(1, 2),
    new Circle(1),
    new Triangle(1,2)
];

// shapes.forEach(shape => console.log(shape.shapeName, shape.calculateArea()));

// shapes
//     .filter(shape => shape instanceof Circle)
//     .forEach(shape => console.log(shape));

function isCopyShape(object: any): object is CopyShape {
    return object.copy !== undefined;
}

shapes
    .filter(shape => isCopyShape(shape))
    .forEach(shape => console.log(shape));