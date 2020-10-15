import { parse } from "https://deno.land/std/encoding/csv.ts";
import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { Table } from 'https://deno.land/x/cliffy/table.ts';

const f = await Deno.open("./data.csv");
const reader = new BufReader(f)

const records:[string[]] = <[string[]]>(await parse(reader))

f.close();

Table.from( records )
.maxCellWidth( 20 )
.padding( 1 )
.indent( 2 )
.border( true )
.render();

