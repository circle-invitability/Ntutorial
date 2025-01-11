const http = require('http');
/*/the http module allow us to setup a web server
try {
    const server = http.createServer((req, res) => {
        res.write("welcome to my homepage");
    });
    
    server.listen(5000);
  
    
} catch (error) {
    console.log(error)
    
}*/
// now this is a basic server setup

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('welcome to our home page')
    }
    if(req.url === './about'){
        res.write('here is our brief history')
    }
    res.end(`
        <h1>Oops</h1>
        <p>something went wront</p>
        <a href = '/'> go back </a>
        `)
}).listen(3000);

