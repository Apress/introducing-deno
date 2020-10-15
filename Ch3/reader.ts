let readStatus = await Deno.permissions.query({name: "read"})

if(readStatus.state !== "granted") {
    const sp = Deno.run({
        cmd: [
            "deno", "run", "--unstable", "--allow-all", "reader.ts"
        ]
    })
    sp.status()
} else {
    const decoder = new TextDecoder('UTF-8')
    const fileContent = await Deno.readFile("./secret.txt")
    console.log(decoder.decode(fileContent))
}

