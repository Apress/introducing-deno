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

class MyClass {
    
    constructor() {
    }
}

interface MyClass extends Callable, Activable {}


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            let descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
            Object.defineProperty(derivedCtor.prototype, name, <PropertyDescriptor & ThisType<any>>descriptor);
        });
    });
}

applyMixins(MyClass, [Callable, Activable])

let o = new MyClass()

o.call()
o.activate()