
class Geometry {
    private area: number
    private perimeter: number
    
    constructor() {
        this.area = 0
        this.perimeter = 0
    }
}

class Square extends Geometry{
    side: number

    constructor(s: number) {
        super()
        this.side = s
        this.area = this.side * this.side
        this.perimeter = this.side * 4
    }
}


let oSquare = new Square(2)
