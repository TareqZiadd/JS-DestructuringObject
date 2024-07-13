
/*Ex1:

const user = {theName: "Osama", theAge: 39, theTitle: "Developer", theCountry: "Egypt"};
({theName, theAge, theTitle, theCountry} = user);
console.log(theName);      //Osama
console.log(theAge);       //39
console.log(theTitle);     //Developer
console.log(theCountry);   //Egypt
*/

/*
//Ex2: with usimg let 

const user = {theName: "Rami", theAge: 16, theTitle: "Student", theCountry: "Amman"};
let {theAge, theName, theCountry, theTitle} = user;
console.log(theName);      // Rami
console.log(theAge);       // 16
console.log(theTitle);     // Student
console.log(theCountry);   // Amman
*/


/*
//Ex3: with default values 

const user = {theName: "Laila", theAge: 25};
const {theName, theAge, theTitle = "Unemployed", theCountry = "Unknown"} = user;
console.log(theName);      // Laila
console.log(theAge);       // 25
console.log(theTitle);     // Unemployed
console.log(theCountry);   // Unknown
*/

/*
//Ex4: Destructuring with previously declared variables

let theName, theAge, theTitle, theCountry;
const user1 = { theName: "Sara", theAge: 28, theTitle: "Engineer", theCountry: "Jordan" };
({ theName, theAge, theTitle, theCountry } = user1);
console.log(theName);      // Sara
console.log(theAge);       // 28
console.log(theTitle);     // Engineer
console.log(theCountry);   // Jordan
*/

/*
//Ex5: Destructuring with functions that return objects

function getUser() {
  return { theName: "Mona", theAge: 42, theTitle: "Teacher", theCountry: "Lebanon" };
}

const { theName, theAge, theTitle, theCountry } = getUser();

console.log(theName);      // Mona
console.log(theAge);       // 42
console.log(theTitle);     // Teacher
console.log(theCountry);   // Lebanon
*/

/*
//Ex6: Destructuring with variable renaming
const user4 = { theName: "Ali", theAge: 30, theTitle: "Designer", theCountry: "Kuwait" };

const { theName: name, theAge: age, theTitle: jobTitle, theCountry: country } = user4;

console.log(name);         // Ali
console.log(age);          // 30
console.log(jobTitle);     // Designer
console.log(country);      // Kuwait
*/

/*
//Ex 7: Destructuring with nested names
const user10 = {
  theName: "Jad",
  theAge: 31,
  theTitle: "Chef",
  contactInfo: {
    email: "jad@example.com",
    phone: "123456789"
  }
};

const { theName, theAge, theTitle, contactInfo: { email, phone } } = user10;

console.log(theName);      // Jad
console.log(theAge);       // 31
console.log(theTitle);     // Chef
console.log(email);        // jad@example.com
console.log(phone);        // 123456789
*/

/*


//EX 8:

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: 'Egypt',
  theColor: "Red"
};

const { theName: n, theAge: a, theCountry: c, theColor: co } = user;

console.log(n);        // Output: Osama
console.log(a);        // Output: 39
console.log(c);        // Output: Egypt
console.log(co);       // Output: Red

*/

/*
const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: 'Egypt',
  theColor: "Black",
  skills: { html: 70, css: 80 },
};

const { theName: n, theAge: a, theCountry, theColor: co = 'red', skills: { html: h, css } } = user;

console.log(n); // Output: Osama
console.log(a); // Output: 39
console.log(theCountry); // Output: Egypt
console.log(co); // Output: Black (since 'theColor' is defined as 'Black' in the object)
console.log(`My HTML Skill Progress Is ${h}`); // Output: My HTML Skill Progress Is 70
console.log(`My CSS Skill Progress Is ${css}`); // Output: My CSS Skill Progress Is 80

// Extracting the skills separately
const { skills: { html, css } } = user;

console.log(`HTML: ${html}`); // Output: HTML: 70
console.log(`CSS: ${css}`); // Output: CSS: 80
*/

/*why we using destructuring object 

In JavaScript, we use destructuring for objects to simplify and make it more convenient to access and extract properties.
 Instead of accessing each property individually using dot notation or brackets,
  destructuring allows us to directly extract properties into separate variables in a more concise way.
Here are some benefits and advantages of object destructuring in JavaScript:
Clarity and Simplicity: Destructuring makes the code more readable and clear,
 as it shows explicitly which properties are being extracted from the object.
 //
 //
const user = { name: "John", age: 30, email: "john@example.com" };
const { name, age } = user;
console.log(name); // John
console.log(age);  // 30
Reducing Repetitive Code: By using destructuring, you can reduce the number of lines of code needed to access object properties.
//
//
// Without destructuring
const name = user.name;
const age = user.age;
//
//
// Using destructuring
const { name, age } = user;
Renaming Variables: You can rename the resulting variables during destructuring 
if you want to use a different name.
const user = { name: "John", age: 30 };
const { name: userName, age: userAge } = user;
console.log(userName); // John
console.log(userAge);  // 30
Default Values: You can set default values for properties in case they do not exist in the object.



const user = { name: "John" };
const { name, age = 25 } = user;
console.log(name); // John
console.log(age);  // 25
Destructuring in Functions: Destructuring can be used in function signatures to make the code more readable, especially when dealing with objects with many properties.


function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "John", age: 30 };
printUser(user); // Name: John, Age: 30
In summary, destructuring in JavaScript is a powerful tool that makes the code cleaner and more readable, and it facilitates working with objects in various ways.

*/