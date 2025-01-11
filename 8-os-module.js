//there are many built-in modules in node.js
// 1. OS module - operating system module
// 2. Path module 
// 3. FS module - file system module
// 4. HTTP module - to create a server
// 5. Events module - to create custom events
// 6. Util module - to log the time and date and utilites such as util.inherits and util.inspect and util.format. what util.inherits does is it inherits the properties of one object to another object, what util.inspect does is it inspects the object and returns the string representation of the object, what util.format does is it formats the string. etc



const os = require('os');
const http = require('http');

//WORKING WITH OS.USERINFO() METHOD

const { clear } = require('console');

const readline = require('readline');// internal module for reading the input from the user

const prompt = require('prompt-sync')({sigint: true});// package or module for reading input from the user


const user = os.userInfo();

let message = 'you don not have the previlage to use this app';
let getPermission = 'Do you want to give access to the guest user?';
let permission1 = 'yes';
let permission0 = 'no';

//the readline module METHOD
//const rl = readline.createInterface({
   // input: process.stdin,
   // output: process.stdout
//});
/*
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });




  
  const Input = rl.question(`${getPermission}`, function answer(answer) {
    //console.log(`Hi ${answer}!`);
   if(answer === 'permission1') {
   console.log('you have given the permission to the guest user');
   }
   else {  console.log('you have not given permission');}

    rl.close();
  })
  */

//the prompt-sync module METHOD


if(user.username === 'root') {  
    console.log('You are the root user');
}
else {
    if(user.username === 'admin') {
        console.log('You are the admin user');
      }
    else {
        if(user.username === 'Klein'|| user.homedir === '/home/Klein') {
            console.log('You are normal user, so you need admin  previlage to use this app');
        }
        else {
            if(user.username === 'guest') {
                console.log('you cannot use this app becuase you are the guest user');
            }
            else {
                    console.log(Input);
                              
        
                    }

                }

            }
        }
       
   
/* 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});

*/


const Input = prompt(`${getPermission}`);
let userName = '';
let userPassword = '';

function Counter() {
  let loading = 'installing........';
 console.log(loading); 
 console.log(loading); 
 console.log(loading); 
 
}

function accounSetUp() {

if(true) {
  console.log('you can now use the app');
 
  console.log('setting up the user account........');
  userName = prompt('Enter your user name: ');
  userPassword = prompt('Enter your password: ');
  console.log('user name: ' + userName, 'password: ' + userPassword);
  console.log('user account has been set up successfully');
 
  console.log('registering host device........')
    console.log('user name: ' + userName, 'home directory: ' + user.homedir, 'password: ' + userPassword);
 
    console.log('welcome to the nodejs quiz app');
   }
  }


     function screen() {
      Counter();
      accounSetUp();
     }



if(Input === 'yes') {
    console.log('you have given access, the app is installing.........');
    screen();
    
  }else {
    console.log('you have not given access, or an error occured check https//www.cousera.com for more information the app was not installed');
  }


  












  //OS METHODS THAT RETURNS THE SYSTEM UPTIME IN SECONDS

  console.log(`this is the system uptime: ${os.uptime()} seconds`);

  const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    uptime: os.uptime(),
    userInfo: os.userInfo(),
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus(),
    networkInterfaces: os.networkInterfaces(),
    hostname: os.hostname(),
    homedir: os.homedir(),
    loadavg: os.loadavg(),
  }

console.log(currentOs);















