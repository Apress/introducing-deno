// lookup a permission
const status = await Deno.permissions.query({ name: "write" });
if (status.state !== "granted") {
  throw new Error("need write permission");
}

const log = await Deno.open("request.log", { write: true, append: true });

// revoke some permissions
await Deno.permissions.revoke({ name: "read" });
await Deno.permissions.revoke({ name: "write" });

// use the log file
const encoder = new TextEncoder();
await log.write(encoder.encode("hello\n"));

// this will fail.
await Deno.remove("request.log");