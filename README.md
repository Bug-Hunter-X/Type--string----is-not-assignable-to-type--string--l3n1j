# Type 'string[]' is not assignable to type 'string'
This TypeScript bug demonstrates a common type error: attempting to pass an array of strings to a function expecting a single string. The `greeter` function expects a single string, but the `user` variable is an array of strings. This results in a type error.

## How to reproduce

1. Save the code in `bug.ts`.
2. Compile the code using the TypeScript compiler (tsc).
3. Observe the error message.

## Solution

The solution involves ensuring the correct type is passed to the `greeter` function.  The solution file `bugSolution.ts` demonstrates how to fix this.