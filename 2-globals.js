// GLOBAL - NO WINDOW !!!


//GOBAL VARIABLES ARE KIND OF WINDOW OBJECT IN BROWSER BUT IN NODE JS IT IS GLOBAL OBJECT, MEANS WE CAN ACCESS IT ANYWHERE IN THE FILE THAT IS WHY IT IS GLOBAL

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(module);
console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(process);
console.log(setInterval);
console.log(setTimeout);

setInterval(() => {
console.log('hello world')
},1000)// to run the app you dont to type node app with the.js file name, you can just type node app and it will run the app.js file