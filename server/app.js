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

//---------------- GIPHY --------------------------//
function sendApiRequest(){
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


