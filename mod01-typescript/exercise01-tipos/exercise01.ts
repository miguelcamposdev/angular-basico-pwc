let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = 'Miguel';
lastName = 'Campos';
age = 35;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log(`My name is ${fullName}, I'm ${age}, and I'm a citizen of the United Kingdom.`);
} else {
    console.log(`My name is ${fullName}, I'm  ${age}, and I'm not a citizen of the United Kingdom.`);
}