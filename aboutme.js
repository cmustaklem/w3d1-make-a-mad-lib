log = console.log.bind(console);

var firstName = 'Charlie';
var lastName = 'Mustaklem';
var emailAddress = 'charles.mustaklem@gmail.com'
var numberOfYearsInCollege = 5
var highschoolGradYear = 2002;
var numberOfPets = 2;
var numberOfChildren = 0;
var favoriteGenreOfMusic = 'Rock and Roll'
var favoriteMovie = "Forrest Gump"
var on = true
var grewUpInACity = (on ? 'from Indianapolis' : 'No, I am from the country')
var sentence = `Hello, my name is ${firstName} ${lastName}. I am ${grewUpInACity}, and I graduated from North Central High School in ${highschoolGradYear}. I spent ${numberOfYearsInCollege} years in college, between IU and IUPUI. I have ${numberOfPets} dogs, and ${numberOfChildren} children. I love ${favoriteGenreOfMusic} and my favorite movie is ${favoriteMovie}.`
log(sentence);


/*var thisIsUndefine;
var thisIsNull = null;
var thisIsBoolean = false;
var thisIsNumber = 12.34;
var thisIsString = 'My Favorite Number Is 12.34';
var thisIsExpression = ((1 + 1) * 100 / 4 - 8);*/
