import * as shape from "./shapes";

abstract class CircleCreator {

    public abstract factoryMethod(radius:number): shape.Shape;

    public create(radius:number): shape.Shape {
        const shape = this.factoryMethod(radius);
        console.log(`Creator: i have created this shape => ${shape.name}`)
        return shape
    }
}

abstract class TriangleCreator {

    public abstract factoryMethod(side1:number,side2:number,side3:number): shape.Shape;

    public create(side1:number,side2:number,side3:number): shape.Shape {
        const shape = this.factoryMethod(side1,side2,side3);
        console.log(`Creator: i have created this shape => ${shape.name}`)
        return shape
    }
}

abstract class RectangleCreator {

    public abstract factoryMethod(height:number, width:number): shape.Shape;

    public create(height:number, width:number): shape.Shape {
        const shape = this.factoryMethod(height, width);
        console.log(`Creator: i have created this shape => ${shape.name}`)
        return shape
    }
}

class CircleMaker  extends CircleCreator {
    public factoryMethod(radius:number): shape.Shape {
        return new shape.Circle(radius)
    }
}

class TriangleMaker extends TriangleCreator {
    public factoryMethod(side1: number, side2: number, side3: number): shape.Shape {
        return new shape.Triangle(side1,side2,side3)
    }
}

class RightTriangleMaker extends TriangleCreator {
    public factoryMethod(side1: number, side2: number, side3: number): shape.Shape {
        return new shape.RightSidedTriangle(side1,side2,side3)
    }
}

class RectangleMaker extends RectangleCreator {
    public factoryMethod(width:number, height:number): shape.Shape {
        return new shape.Rectangle(width,height)
    }
}

class SquareMaker extends RectangleCreator {
    public factoryMethod(width:number, height:number): shape.Shape {
        return new shape.Square(width,height)
    }
}

class ParallelogramMaker extends RectangleCreator {
    public factoryMethod(width:number, height:number): shape.Shape {
        return new shape.Parallelogram(width,height)
    }
}




const makeCircle = new CircleMaker();
const makeTtiangle = new TriangleMaker();
const makeRTriangle = new RightTriangleMaker();
const makeSquare = new SquareMaker();
const makeParaiieiogram = new ParallelogramMaker();

const circle = makeCircle.create(8);
const triangle = makeTtiangle.create(2,4,6)
const square = makeSquare.create(2,2)
console.log(square.print());



