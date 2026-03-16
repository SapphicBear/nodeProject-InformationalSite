const express = require("express");
console.log(__dirname)
const PORT = 3000;

const app = express();
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile("./pages/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
    res.sendFile("./pages/about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
    res.sendFile("./pages/contact-me.html", { root: __dirname });
});
// Redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});
// 404
app.use((req, res) => {
    res.status(404).sendFile("./pages/404.html", { root: __dirname });

});


app.listen(PORT, () => {
    console.log(`Live on: http://localhost:${PORT}`);
});