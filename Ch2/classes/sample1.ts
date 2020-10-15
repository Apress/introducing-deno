
class Person {

    f_name: string
    l_name: string

    constructor(fn: string, ln: string) {
        this.f_name = fn
        this.l_name = ln
    }
    
    fullName() {
        return this.f_name + " " + this.l_name
    }
}

const o = new Person("Fernando", "Doglio")
console.log(o.fullName())