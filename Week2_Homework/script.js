const SpeechRecognition = webkitSpeechRecognition;
const giphyAPIKey = "5sIygahokiwBkKL5AVQqWpnbQY1pBkuQ";

const getSpeech = () => {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        console.log(speechResult);
        getGif(speechResult);
    };

    recognition.onend = () => {
        console.log("it is over");
        recognition.stop();

        getSpeech();
    };

    recognition.onerror = (event) => {
        console.log("something went wrong: " + event.error);
    };
};

const getGif = (phrase) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=${phrase}`;

    fetch(url, { mode: "cors" })
        .then((response) => response.json())
        .then((result) => {
            let imgUrl = result.data.image_url;
            createImage(imgUrl);
            console.log(imgUrl);
        });
};

const createImage = (source) => {
    var nextImage = document.createElement('img');
    nextImage.src = source;
    document.body.appendChild(nextImage);
}

document.querySelector("#my-button").onclick = () => {
    getSpeech();
};