const john = 'john';
const peter = 'peter';
const secret = "super secret";


//exporting the variables
//export { john, peter }; //vanilla javascript syntax to export the variables

// but here is another syntax to export the variables
//first you check the module 
console.log(module);// with this you can see the module object

// then you can access the module export method like this

module.exports = { john, peter, secret }; //this is the commonJS syntax to export the variables