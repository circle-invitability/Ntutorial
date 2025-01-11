
require('./7-mind-grenade')
//Modules
// commonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//import sayHi from './utili-moduli.js';
//import {john} from './names-moduli.js';// note this is the vanilla javascript syntax to import the variables
const names = require('./4-names-moduli');//this is a commonJS syntax to import the variables
const sayHi = require('./5-utili-moduli');//this is a commonJS syntax to import the variables



// to use the imported variables
//console.log(names.john);



    sayHi('susan');
    sayHi(names.john);
    sayHi(names.peter);
   


//what if we can get the names from another file, which will be our module. that is the basis concept of modules in node.js



//SUMMARY

//every file by default is a module
// when it comes to modules we are in charge of what to sharing

// to come something available we have to export it
