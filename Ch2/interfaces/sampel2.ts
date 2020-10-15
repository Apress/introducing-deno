interface IPerson {
    readonly name: string,
    age: number
}
 
 let Person: IPerson = { name: "Fernando", age: 37}
 
 Person.name = "Diego" /// Cannot assign to 'name' because it is a read-only property
