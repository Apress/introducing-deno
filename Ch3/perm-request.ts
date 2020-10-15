const status = await Deno.permissions.request({ name: "env" });
if (status.state === "granted") {
  console.log(Deno.env.get("HOME"));
} else {
  console.log("'env' permission is denied.");
}
