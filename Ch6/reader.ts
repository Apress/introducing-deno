const decoder = new TextDecoder('UTF-8')
const fileContent = await Deno.readFile("./.flags")
console.log(decoder.decode(fileContent))