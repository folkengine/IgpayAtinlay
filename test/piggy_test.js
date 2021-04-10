const expect = require("chai").expect;
const piggy = require("../src/piggy");

describe("Piggy pig latin translator", () => {
   [
      {input: "are", expected: "areway"},
      {input: "hello", expected: "ellohay"},
      {input: "I?", expected: "Iway?"},
      {input: "i", expected: "iway"},
      {input: "end", expected: "endway"},
      {input: "world", expected: "orldway"},
      {input: "World", expected: "Orldway"},
      {input: "World!!", expected: "Orldway!!"},
      {input: "Please?", expected: "Easeplay?"},
   ].forEach(({input, expected}) => {
      it(`handles translating a single word '${input}' into '${expected}'`, () => {
         expect(piggy.translate(input)).to.eq(expected);
      });
   });

   [
       {input: "hello world", expected: "ellohay orldway"},
       {input: "Pizza? Yes Please!!", expected: "Izzapay? Esyay Easeplay!!"},
       {input: "How are you?", expected: "Owhay areway ouyay?"},
   ].forEach(({input, expected}) => {
      it(`handles translating multiple words '${input}' into '${expected}'`, () => {
         expect(piggy.translate(input)).to.eq(expected);
      });
   });
});
