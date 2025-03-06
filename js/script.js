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

//Grad date
const eventDate = "2025-06-13";
const gradDays = getDaysUntilEvent( eventDate );
console.log( gradDays );

const elemDaysUntilGrad = document.querySelector('.daysUntilEvent');
elemDaysUntilGrad.textContent = gradDays;
elemDaysUntilGrad.setAttribute("datetime", gradDays );


//Streak
const startDate = "2025-01-06";

const streak = getDayStreak( startDate );
console.log( streak );  

const elemDayStreak = document.querySelector('.streakOfDays');
elemDayStreak.textContent = streak;
elemDayStreak.setAttribute("datetime", streak );   
//video volume
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    video.volume = 0.2; // Set the volume to 20%
  });