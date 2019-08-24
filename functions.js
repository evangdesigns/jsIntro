const fancyFunction = (something) => {
    return something + 'fancy';
}

const output = fancyFunction('michael is ');

console.log(output);

let firstName = 'Michael'
let lastName = 'Jackson'

console.log(`${firstName} ${lastName}`)

firstName = 'Percy'
lastName = 'Priest'

console.log(`${firstName} ${lastName}`)

firstName = 'Angila'
lastName = 'Gimlin'

console.log(`${firstName} ${lastName}`)

const sayMyName = (first, last) => {
    return(`${first} ${last}`)
};

console.log(sayMyName('Jimmy', 'Newtron'));

// NUGGET TIME

const nuggetizer = (animal) => {
    return `${animal} nugget`;
};

const humaneNuggetizer = (animal) => {
    return animal;
};

const spamFactory = (anyThing) => {
    return 'spam (lunch)';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('squid'));
console.log(nuggetizer('fish'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('squid'));
console.log(humaneNuggetizer('fish'));

console.log(spamFactory('chicken'));
console.log(spamFactory('squid'));
console.log(spamFactory('fish'));


//TAKE NUMBER
const printToDom = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint;
};

let bandNumber = 1

const takeNumber = (bandName) => {
    printToDom(`<h3>${bandNumber}. ${bandName}</h3>`);
    bandNumber ++
};

takeNumber('Burger Van');
takeNumber('Hazy Sundays');