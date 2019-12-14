class RectangleSimple {
    private width: number;
    private height: number;

    constructor(
        width: number = 0,
        height?: number
    ) {
        this.width = width;

        if(!height)
            this.height = width;
        else
            this.height = height;
        //this.height = height || width;
        
    }    
}

const c: Shape = new Circle(1);
console.log('Circle', c.calculateArea());

const r = new Rectangle(2);
console.log('Rectangle', r.calculateArea());

const t = new Triangle(1, 2);
console.log('Triangle', t.calculateArea());
