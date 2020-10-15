

interface IMyProps  {
    name: string
    age: number
    city?: string
    
    findCityCoordinates?(): number
}

function sayHello( myProps: IMyProps) {
    console.log(`Hello there ${myProps.name}, you're ${myProps.age} years old and live in ${myProps.city.toUpperCase()}`)
}

sayHello({
    name: "Fernando",
    age: 37
})

sayHello({
    name: "Fernando",
    age: 37,
    city: "Madrid"
})