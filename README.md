# Studieblok-2
Dit is de repository voor domiein C level 2: studieblok 2

## Wat kun je hier vinden?
In deze repository kun je de opdrachten voor domein C level3: studieblok 2

## Wanneer zien we de dit studieblok als voltooid?
wij zijn dit studieblok als voltiood als wij de volgende dingen begrijpen en kunnen toepassen:
```javascript
//objecten
const object = {
	naam:'Michel Gerding',
	hobbies = [ 'gamen', 'mountainbiken', 'coderen']
};
//strings
let normaleString = 'dit is een normale string';
let template = "template";
let templateString = `dit is een ${template} string`;
//string methodes
template.slice(0,2) == "tem";
template.length == 8;
templateString.search(template) == 11;

// numbers
let int1 = 654;
const int2 = 92;
var int3 = 10.95656;
//number methodes
int1.toString() === '654';
int3.toExponential(2) === 10.96e+0;
int3.toFixed(2) === 10.95
int3.toPrecision(10) === 10.9565600000;

//arrays
let arr1 = ['hoi', 100, 'dit is een string];
const arr2 = [12, 41, 2, 100];
//array methodes
arr2.foreach((item, index) => {console.log(`the integer at index ${index} is ${item}`)});
arr1.concat(arr2) === ['hoi', 100, 'dit is een string', 12, 41, 2, 100];
arr2.sort() === [2, 12, 41, 100];

//booleans
const booleantrue = true;
var booleanfalse = false;

//loops
for( int i=0; i < 10; i++) {
	//do iets...
}

while ( booleantrue ) {
	//do iets...
}

do {
	//doe iets minimaal 1 keer
} while ( booleanfalse );
```

## wat hebben wij geleerd tijdens dit studieblok?
tijdens dit studieblok hebben we de volgende dingen geleerd: 
* objects
* scope
* string
* string methodes
* numbers
	* number methodes
* arrays
	* array methodes
	* array sort
* booleans
* de volgende loops
	* for(let i=0; i< j; i++) {}
	* arr.foreach( (item, index) => {/* do iets */} )
	* while (true) {}	
	* do {} while (true)
