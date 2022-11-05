var myName = 'JOSIE'.toLowerCase();
var myAge = 27;

// This is my actual age in human years. 

var earlyYears = 2;

// The first two years of a dog's life amount to 10.5 dogs years each.

earlyYears *= 10.5;

// Since we already accounted for the first two years, we subtract 2 from my age.

var laterYears = (myAge - 2); 

// Now we multiply my age (minus the first two years) times four to figure out my age in later dog years. 

laterYears *= 4;

// My age in dog years is the result of early years (first two years) plus later years (later 25 years).

myAgeInDogYears = (earlyYears + laterYears); 


// Used string interpolation to describe my age in human years vs dog years.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
