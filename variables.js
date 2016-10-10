//Intentially made global by leaving off car before variable

log = console.log.bind(console);

var defaultName = 'Charlie';

function sayHello(name) {
    if (name == undefined) {
        console.log('Hello, ' + defaultName + '!');
    }
    else {
        console.log ('Hello, ' + name + '!');
    }
}



var firstName = 'Charlie';


var thisIsUndefine;
var thisIsNull = null;
var thisIsBoolean = false;
var thisIsNumber = 12.34;
var thisIsString = 'My Favorite Number Is 12.34';
var thisIsExpression = ((1 + 1) * 100 / 4 - 8);
//var thisIsInput = inputs.first_name;

var favoriteBand = 'The Mars Volta';
var bestAlbum = 'Deloused in the Comatorium';
var year = 2003;
var albumGenre = 'Progressive Rock';
var isMovie = false;

console.log(favoriteBand, bestAlbum, year, albumGenre, isMovie)




var verb = 'ran';
var sentence = 'Flying by the tower I ' + verb + 'to safety';
console.log(sentence);

var verb = 1;
var sentence = 12 + Number(verb) + 12;
console.log(sentence);

var verb = 'ran';
var sentence = `Flying by the tower I ${verb} to
safety`;
console.log(sentence);


var on = false
var lightSwitch = (on ? 'The light is on' : 'The light is off')
console.log(lightSwitch)
