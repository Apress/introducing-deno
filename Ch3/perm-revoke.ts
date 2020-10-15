const envStatus= await Deno.permissions.revoke({ name: "env" });
if (envStatus.state === "granted") {
  console.log(Deno.env.get("HOME"));
} else {
  console.log("'env' permission is denied.");
}
