// require the module
const http = require('http');
const fs = require('fs');

const port = 8080;
const host = 'localhost';

// create a server and register an event listener for incoming requests
const server = http.createServer((req, res) =>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');

    let path = 'views/';

    if(req.url === '/'){
        path = path + 'about.html';
    } else if (req.url === '/contact') {
        path = path + 'contact.html';
    } else if (req.url === '/about') {
        path = path + 'about.html';
    } else {
        res.statusCode = 404;
        path = path + '404.html';
    }

    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
});

// bind the server to a particular port number
server.listen(port, host, () =>{
    // operation after successful binding
    console.log("The server is running on port", port);
});