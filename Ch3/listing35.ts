
const start = performance.now()

await Deno.readFile("./listing35.ts")
const end = performance.now()

console.log("Reading this file took: ", end - start, " ms")