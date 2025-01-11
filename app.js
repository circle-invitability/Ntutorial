const http = require('http');
//the http module allow us to setup a web server
try {
    const server = http.createServer((req, res) => {
        res.write("welcome to my homepage");
    });
    
    server.listen(8010);
    
} catch (error) {
    console.log(error)
    
};

