const status = await Deno.permissions.request({ name: "write", path: "/etc/passwd" });
//...
const readingStatus = await Deno.permissions.request({ name: "read", path: "./secret.txt" });
//...
const netStatus = await Deno.permissions.request({ name: "net", url: "http://github.com,http://www.google.com" });
//...
const githubAccess = await Deno.permissions.request({ name: "net", url: "http://github.com" });
console.log("Github: ", githubAccess.state)

const googleAccess = await Deno.permissions.request({ name: "net", url: "http://www.google.com" });
console.log("Google: ", googleAccess.state)