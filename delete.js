const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err,data) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            console.log("Server is live on port 3000");
            res.setHeader('Content-Type', 'text/html')
            res.end(data);
}})})
server.listen(3000, ()=>{
    console.log("Server is live on port 3000");
})