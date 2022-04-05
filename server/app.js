// --------------- SETUP --------------- //

const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('body-parser');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ---------------  REQUIRE ARRAY FROM JSON FILE  --------------- //

const postMessage = require('./database.json');


// --------------- CHANGE POSTS SUBMITTED FROM FRONTEND TO JSON AND ADD TO database.json --------------- //

const saveData = () => {
    const finished = (error) => {
        if (error) {
            console.error(err);
            return;
        }
    }
    const jsonData = JSON.stringify(postMessage, null, 2);
    fs.writeFile('database.json', jsonData, finished);
};

// [null, 2] makes the file more readable in the json file 
// writes json stringified data to database.json and run error function otherwise


// ----------------------------- PUSHING THE FORM DATA FROM FRONTEND INTO FORMDATA VARIABLE AND WRITING THE FORMDATA VARIABLE BACK INTO input.json --------------------------------

app.post('/test', (req, res) => {
    formData.push(req.body)
    // console.log(formData)
    writeToJson();
    res.json({success: true})
})


// --------------- GIPHY --------------- //

function sendApiRequest() {
    const userInput = document.getElementById("input").value

    console.log(userInput);

    const giphyApiKey = "01YtqfkM52wCXgAyJ2YbXdE2aoOyXPdF";

    const giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;

    fetch(giphyApiURL).then(function (data) {
        return data.json();
    })

        .then(function (json) {
            console.log(json.data[0].images.fixed_height.url);

            const imagePath = json.data[0].images.fixed_height.url;

            const image = document.createElement("image");

            image.setAttribute("src", imagePath);

            document.body.appendChild(image);
        })
}

// --------------- ROUTES --------------- //


// main endpoint
app.get('/', (req, res) => {
    res.send(console.log('SERVERSIDE DEPLOYED!'));
});

// posts endpoint
app.get('/posts', (req, res) => {
    res.send(postMessage);
});

// --------------- LISTEN TO SERVER --------------- //

app.listen(port, () => {
    console.log(`App on ${port}`);
});
