function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution: Access the specific element from the array
console.log(greeter(user[0])); // Accesses the first element

//Alternative solution: Modify the function
function greeterArray(person: string[]): string {
    return "Hello, " + person.join(" ");
}

console.log(greeterArray(user)); // Works correctly with an array of strings