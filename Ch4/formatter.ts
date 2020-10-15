import {bold, italic} from "https://deno.land/std@v0.39.0/fmt/colors.ts" 

export function boldIt(txt: string): string{
    return bold(txt)
}

export function italicIt(txt: string): string{
    return italic(txt)
}

