import express  from "express" ; 
const app = express();
var port = 3000;
app.get("/", (req, res) => {
    res.send("Hello World! This is / ");
})
app.get("/contact", (req, res) => {
    res.send("Hello World! This is /contact");
})
app.get("/about", (req, res) => {
    res.send("<h1 background-color='red'> Hello World! This is /about.</h1> ");
})
app.listen(port, () => {
    console.log("Server is running on port " + port);
});