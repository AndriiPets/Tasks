
export interface Shape {
    getPerimeter():number;
    getArea():number;
    print():void;
    name:string;
}

interface Ellipse extends Shape {
    radius:number;
}

interface Trilateral extends Shape {
    side1:number;
    side2:number;
    side3:number;
}

interface Quadrilateral extends Shape {
    width:number;
    heigth:number;
}

export class Circle implements Ellipse {
    radius: number;
    name:string;
    
    constructor(radius:number) {
        this.radius = radius
        this.name = 'circle'
    }

    public getArea(): number {
        return Math.PI * (this.radius ** 2);
    }

    public getPerimeter(): number {
        return Math.PI * (this.radius * 2)
    }

    public print(): void {
        console.log(`Shape of type ${this.name}\nArea: ${this.getArea()} cm2\nPerimeter: ${this.getPerimeter()} cm`)
    }
}

export class Triangle implements Trilateral {
    name: string;
    side1:number;
    side2:number;
    side3:number;

    constructor(side1:number, side2:number, side3:number) {
        this.name = 'tiangle';
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    public getArea(): number {
        const semi:number = (this.side1 + this.side2 + this.side3)/2;
        return Math.sqrt(semi * (semi - this.side1) * (semi - this.side2) * (semi - this.side3));
    }

    public getPerimeter(): number {
        return this.side1 + this.side2 + this.side3
    }

    public print(): void {
        console.log(`Shape of type ${this.name}\nArea: ${this.getArea()} cm2\nPerimeter: ${this.getPerimeter()} cm`)
    }
}

export class RightSidedTriangle extends Triangle {

    constructor(side1:number, side2:number, side3:number) {
        super(side1, side2, side3);
        this.name = 'Right Triangle';
        this.checkSides();
    }
// check if right triangle can be made using Pythagorean theorem
    checkSides(): boolean {
        const a = this.side1 ** 2;
        const b = this.side2 ** 2;
        const c = this.side3 ** 2;

        if (
            a > 0 &&
            b > 0 &&
            c > 0 &&
            (a === b + c || b === a + c || c === a + b)
        ) {
            return true
        } else {
            throw new Error('Inserted sides cannot be made into right triangle!')
        }
    }
}

export class Rectangle implements Quadrilateral {
    width: number;
    heigth: number;
    name:string;

    constructor (width:number, heigth:number) {
        this.heigth = heigth;
        this.width = width;
        this.name = 'Rectangle'
    }

    public getArea(): number {
        return this.heigth * this.width
    }

    public getPerimeter(): number {
        return 2 * (this.heigth + this.width)
    }

    public print(): void {
        console.log(`Shape of type ${this.name}\nArea: ${this.getArea()} cm2\nPerimeter: ${this.getPerimeter()} cm`)
    }
}

export class Square extends Rectangle {

    constructor (height:number, width:number) {
        super(height, width);
        this.name = 'Square'
        this.checkSquare();
    }

    checkSquare():boolean {
        if (this.heigth !== this.width) {
            throw new Error('width and heigth must be equal in square!');
        } else {
            return true;
        }
    }
}

export class Parallelogram implements Quadrilateral {
    heigth: number;
    width: number;
    angle: number;
    name: string;

    constructor (heigth:number, width:number, angle:number = 60) {
        this.heigth = heigth;
        this.width = width;
        this.angle = angle;
        this.name = 'Parallelogram'
    }

    public getArea(): number {
        const angleRadiands:number = this.angle * (Math.PI/180)
        return (this.heigth * this.width) * Math.sin(angleRadiands)
    }

    public getPerimeter(): number {
        return 2 * (this.heigth + this.width)
    }

    public print(): void {
        console.log(`Shape of type ${this.name}\nArea: ${this.getArea()} cm2\nPerimeter: ${this.getPerimeter()} cm`)
    }
}



