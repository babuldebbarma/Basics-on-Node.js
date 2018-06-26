const http = require('http');
const fs = require('fs')      //To create new file in html

const localhost ='127.0.0.1';
const port = 3000;

fs.readFile('index.html',(err,html) => {   //This is for creating a file in html
    if(err) {
        throw err;
    }
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('content-type','text/html'); //changing plain to html
        res.write(html);                       //Including this code for html
        res.end('Hello world!');
    });
    
    server.listen(port, localhost, () => {
        console.log('server port 3000')
});

});