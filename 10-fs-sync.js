const {readFileSync, writeFileSync} = require('fs');


console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync (
    './content/result-sync.txt', //the location of the file to be written or overwritten
    `here is the result : ${first}, ${second}`,//the value to be written in to the file
    {flag: 'a'} // this flag will append the data to the file if it exists
    
)
console.log('done with this task')

console.log('starting the next one')
/* by the default the writeFileSync will overwrite the file if it exists, but if we want to append the data to the file we can use the flag option in the writeFileSync method. the flag option is an object that takes a key value pair. the key is flag and the value is a string 'a' which means append. so the data will be appended to the file if it exists. if the file does not exist it will be created and the data will be written to it.

syntax writeFileSync ;

1. location and name of the file
2. the value to be appended or writteb
3. the {flag} which denotes the behaviour weather to overwrite append etc check for more options*/