// --------------- SETUP --------------- //

const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('body-parser');
const port = 3000;

app.use(cors());
app.use(express.json());


// --------------- LISTEN TO SERVER --------------- //

app.listen(process.env.PORT || port, () => {
    console.log(`Example App on http://localhost:${port}`);
});

