console.log("IT works!");

// VARIABLES (MUUTUJAD)

// let on millegi kohta, mille väärtus võib muutuda ajas
let lastName = "Org";
// const keywordi ei saa hiljem muuta
const firstName = "Tub";

// HOISTING - kõik muutujad, mis olen teinud, tõstetakse failis esimesteks asjadeks
// see on seotud..
// MUUTUJA SCOPE('iga) - { Kõik siin vahel on koodiblokk, kõik muutujad mis on siin sees defineeritud, ei saa kasutada väljaspool antud koodiblokki }
// Global scope, function scope
function greeting() {
    const newName = "Hannes";
    console.log(firstName);
    return newName;
}
greeting();

// DATA TYPES - String, Number, Boolean, undefined, Null, Symbol (primitive types)
// Array, Object (Jada ja Kogum - kuhu sisse saan panna erinevaid pimitiisveid tüüpe)

const stringVariable = "See on string";
const numberVariable = 45;
const undefinedVariable = undefined;
const nullVariable = null;
const booleanVariable = true;

const arrayVariable = ["string", 45, undefinedVariable, {}];
const objectVariable = {
    // Objektil on key's ja value's.
    firstName: "Tub",
    lastName: "Org",
    // This keyword - näitab objekti peale kus teda kasutame. (praegusel juhul objectVariable)
    greeting() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(objectVariable.greeting());

// Typeof operaator - näitab mis tüüpi elemendiga tegu on
console.log(typeof numberVariable);

// See on built-in objects
const myNewName = new String("Tene");
console.log(myNewName);

// TYPE conversion
const isString = "444";
const isNumber = 444;

console.log(isString + isNumber);

// TYPE casting
console.log(Number(isString));
console.log(typeof String(isNumber) + String(isNumber));

// 0 false, kõik muu on true
const testNr = 3;
console.log(Boolean(testNr));

console.log(Number(isString) + isNumber);

// COMPARISONS
// Muutuja puhul on olulised: type ja väärtus, kui midagi võrdleme.

// = ehk defineeri muutuja
// == ehk väärtus. Siis ma võrdlen kahte väärtust
// === ehk väärtus ja tüüp. Siis ma võrdlen väärtust ja tüüpi

console.log("== ", isNumber == isString);
console.log("=== ", isNumber === isString);

// ARRAYS
