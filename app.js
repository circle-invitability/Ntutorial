//npm - global command, comes with node
//nom  --version

//local dependences are dependences you use only in a project to install
//npm i  <packageName>

//global dependences you use it in any project
//npm install -g <packageName>

const _ = require('lodash');

const item = [1,[2,[3,[4,[5]]]]];
const  newItem = _.flattenDeep(item);
console.log(newItem);