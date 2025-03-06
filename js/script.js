// Age of Person, Place, or Thing

const birthDate = "2001-08-10"; // YYYY-MM-DD format

const ageOfPerson = calculateAgeOf( birthDate );
console.log( ageOfPerson );

// Unit test
// Get HTML element
const elemAgeOfPerson = document.querySelector('.ageOfPerson');

// Set to HTML element
elemAgeOfPerson.textContent = ageOfPerson;
elemAgeOfPerson.setAttribute("datetime", ageOfPerson );

const daysUntilGrad = "2025-06-13";
const gradDays = calculateDaysUntil( daysUntilGrad );
console.log( daysUntilEvent );
