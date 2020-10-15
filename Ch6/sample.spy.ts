import { assertEquals } from "https://deno.land/std@0.50.0/testing/asserts.ts";
import { spy, Spy } from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/spy.ts";
import { stub, Stub} from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/stub.ts";


class Adder {
  
  public miniAdd(a: number, b:number): number {
    return a +b
  }
  
  public add( a: number, b: number, callback: (error: Error | void, value?: number) => void): void {
    const value: number = this.miniAdd(a,b)
    if (typeof value === "number" && !isNaN(value)) callback(undefined, value);
    else callback(new Error("invalid input"));
  }
}


Deno.test("calls fake callback", () => {
  const adder = new Adder() 
  const callback: Spy<void> = spy();
  
  assertEquals(adder.add(2, 3, callback), undefined);
  assertEquals(adder.add(5, 4, callback), undefined);
  assertEquals(callback.calls, [
    { args: [undefined, 5] },
    { args: [undefined, 9] },
  ]);
});

Deno.test("returns error if values can't be added", () => {
  const adder = new Adder() 
  stub(adder, "miniAdd", () => NaN);
 
  const callback = (err: Error | void, value?: number) => {
    assertEquals((<Error>err).message, "invalid input");
  }
  adder.add(2, 3, callback)
});