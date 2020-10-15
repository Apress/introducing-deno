import {boldIt, italicIt} from './formatter.ts'

/**
Adding a simple comment over here
*/
export function HelloWorld(name: string, format: string): void {
	let text = ["Hey there", name, ", say hello to the world!"].join(" ")
	
	if(format == "bold") {
		text = boldIt(text)
	}
	
	if(format == "italic") {
		text = italicIt(text)
	}
	console.log(text)
}
