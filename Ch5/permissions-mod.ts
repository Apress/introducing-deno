import {grant} from 'https://deno.land/std/permissions/mod.ts'

const perms = await grant({ name: "read" });
console.log(perms)
if (perms && perms.length === 1) {
   console.log(Deno.readFile("./permissions-mod.ts") )
} else {
   console.log("No permissions available")
}