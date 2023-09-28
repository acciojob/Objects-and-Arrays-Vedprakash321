const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team = players;

// Create a copy of the players array using the slice method
const team1 =[...players];

// Create a copy of the person object using the spread operator
// const cap1 = { ...person};
let cap1 = Object.assign({},person);

// Test modifying the original arrays and objects to ensure copies are independent
// players.push("NewPlayer");
// person.name = "UpdatedName";


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
