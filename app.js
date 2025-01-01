//Modules
// commonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const john = 'john';
const peter = 'peter';

const sayHi = (name) => {
    console.log(`hello there ${name} how was the weekend`);
}

sayHi('susan');
sayHi(john);
sayHi(peter);


//what if we can get the names from another file, which will be our module. that is the basis concept of modules in node.js