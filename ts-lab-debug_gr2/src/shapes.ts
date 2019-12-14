interface Shape {
    readonly shapeName: string;
    calculateArea(): number;
}

interface CopyShape {
    copy(): Shape;
}

class GeometricShape {
}

class Circle extends GeometricShape implements Shape, CopyShape {
    readonly shapeName: string = 'Circle';

    constructor(
        private radius: number = 0
    ) {
        super();
    }

    public calculateArea(): number {
        // return Math.PI * this.radius * this.radius;
        return Math.PI * Math.pow(this.radius, 2);
    }

    copy(): Shape {
        return new Circle(this.radius);
    }
}

class Rectangle implements Shape {
    shapeName: string = 'Rectangle';

    constructor(
        private width: number = 0,
        private height?: number
    ) {
        this.height = height || width;
    }

    public calculateArea(): number {
        return this.width * (this.height || 0);
    }
}

class Triangle implements Shape {
    shapeName: string = 'Triangle';

    constructor(
        private a: number = 0,
        private b: number = 0
    ) { }

    public calculateArea(): number {
        return 0.5 * this.a * this.b;
    }
}

const shapes: Shape[] = [
    new Circle(1),
    new Circle(1),
    new Rectangle(2),
    new Triangle(1, 2)
];

// shapes.forEach(shape =>
//     console.log(shape.shapeName, shape.calculateArea()));

// shapes.forEach(shape =>
//     console.log(shape.shapeName, shape instanceof Circle));

// shapes.forEach(shape =>
//     console.log(shape.shapeName, instanceOfCopyShape(shape)));

function instanceOfShape(object: any): object is Shape {
    return object.shapeName !== undefined;
}

function instanceOfCopyShape(object: any): object is CopyShape {
    return object.copy !== undefined;
}

shapes
    .filter(shape => instanceOfCopyShape(shape))
    .forEach(shape =>
        console.log(shape.shapeName, instanceOfCopyShape(shape)));