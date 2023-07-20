//the temperature in kelvin:
let kelvin = 293;
//This line of coede converts from Kelvin to Celcius:
const celcius = kelvin - 273;
//The equation for converting from celcius to fahrenheit:
let fahrenheit = celcius * (9/5) + 32;
//The code below rounds down:
fahrenheit = Math.floor(fahrenheit);
//The code below converts from celcius to Newton:
let newton = celcius * (33/100);
//The code below rounds newton down:
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`) 
console.log(`The temperature is ${celcius} degrees Celcius.`)
console.log(`The temperature is ${newton} degrees Newton.`)