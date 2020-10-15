
class Geometry {
    protected area: number
    protected perimeter: number
    
    constructor() {
        this.area = 0
        this.perimeter = 0
    }
}

class Square extends Geometry{
    
    private side: number

    constructor(s: number) {
        super()
        this.side = s
        this.area = this.side * this.side
        this.perimeter = this.side * 4
    }
    
    set Side(value: number) {
        this.side = value
        this.area = this.side * this.side
    }
    
    get Side() {
        return this.side
    }
    
    get Area() {
        return this.area
    }
}


let oSquare = new Square(2)

console.log("Side: ",oSquare.Side,  " - area: ", oSquare.Area)
oSquare.Side = 10
console.log("Side: ", oSquare.Side, " - area: ", oSquare.Area)