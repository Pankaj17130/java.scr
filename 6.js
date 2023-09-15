let Name = "pankaj";
let email = "pankajs@gmail.com";
let age = 22;

if (typeof Name !== 'string') {
    console.log(`Name should be a string`);
} else if (typeof email !== 'string') {
    console.log(`Email should be a string`);
} else if (typeof age !== "number") {
    console.log(`Age should be a number`);
} else {
    console.log(`Yahh!!! All the fields are proper.`);
}
