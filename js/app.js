import express from "express";
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`Live on: http://localhost:${PORT}`);
});