//The Spy has the same first letter of her First Name and Last Name
var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
//The Spy is between the Age of 20 and 30 (exclusive of 20 and 30)
var age = prompt('What is your age?');
//The Spy is at least 170 centimeters tall.
var height = prompt('How tall are you?');
//The Spy has a pet name that ends with the letter "y".
var petName = prompt('What is your pet\'s name?');
var petNameLastLetter = petName[petName.length - 1];

if(
   firstName[0] === lastName[0] &&
   20 < age < 30 &&
   height >=170 &&
   petNameLastLetter === "y"

   ){
   alert("Not a Spy");
}else{
    alert("This is a Spy");
}
