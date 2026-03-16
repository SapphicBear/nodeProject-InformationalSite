import fs from "node:fs";
import http from "node:http";

const server = http.createServer((req, res) => {
    let path = "pages/";
    res.setHeader("Content-Type", "text/html");
    
    switch (req.url) {
        case "/":
            res.statusCode = 200;
            path += "index.html";
            break;
        case "/about":
            res.statusCode = 200;
            path += "about.html";
            break;
        case "/contact":
            res.statusCode = 200;
            path += "contact-me.html";
            break;
        default:
            res.statusCode = 404;
            path += "404.html";
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
            res.end(data);
        }
    });
})

console.log("Hello, Javascript connected");

server.listen(3000, "localhost", () => {
    console.log(`Server listening at localhost:3000`);
});