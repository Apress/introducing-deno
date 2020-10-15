
class Square {
    side: number
    private area: number
    #perimeter: number

    constructor(s: number) {
        this.side = s
        this.area = this.side * this.side
        this.#perimeter = this.side * 4
    }
}


let oSquare = new Square(2)

console.log(oSquare.#perimeter)
console.log(oSquare.area)