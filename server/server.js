import express from "express";
import cors from "cors";
const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('./build')); // deploy app

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});