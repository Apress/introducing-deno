
// create subprocess
const p = Deno.run({
    cmd: ["/bin/bash", "-c", "deno run reader.ts"],
  });
  
// await its completion
await p.status();