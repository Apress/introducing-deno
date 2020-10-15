abstract class Callable {
    call() {
        console.log("Call!")
    }
}

abstract class Activable {
    active: boolean = false

    activate() {
        this.active = true
        console.log("Activating...")
    }
    
    deactive() {
        this.active = false
        console.log("Deactivating...")
    }
}

class MyClass extends Callable, Activable{

    constructor() {
        super()
    }
}


let o = new MyClass()

o.call()
o.activate()