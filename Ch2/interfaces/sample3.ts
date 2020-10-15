
interface Greeter {
    (name: string, age: number, city: string): void
}

const greeterFn: Greeter = function(n: string, a: number, city: string) {
    console.log(`Hello there ${n}, you're ${a} years old and live in ${city.toUpperCase()}`)
}

function asyncOp(callback: Greeter) {
    ///do async stuff here...
    callback("Fernando", 37, "Madrid")
}

greeterFn("Fernando", 37, "Madrid")