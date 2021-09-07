console.log("Hello World from the script!");

const synth = window.speechSynthesis;
let utterThis;
let volume = 0.5;
let pitch = 1;
let rate = 1;

document.querySelector("#my-button").onclick = () => {
    console.log("button clicked");
    speak();
};

const speak = () => {
    if (synth.speaking) {
        console.error("it's speaking already");
        return;
    }
    let textInput = document.querySelector("#text-input").value;
    utterThis = new SpeechSynthesisUtterance(textInput);
    utterThis.volume = volume;
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    console.log(utterThis.volume, utterThis.pitch, utterThis.rate);
    synth.speak(utterThis);
};

let slider = document.querySelector("#slider1");

slider.onchange = () => {
    console.log("Volume Slider is adjusted!");
    volume = slider.value * 0.1;
    speak();
}

let slider2 = document.querySelector("#slider2");

slider2.onchange = () => {
    console.log("Pitch Slider is adjusted!");
    pitch = slider2.value * 0.1;
    speak();
}

let slider3 = document.querySelector("#slider3");

slider3.onchange = () => {
    console.log("Rate Slider is adjusted!");
    rate = slider3.value * 0.1;
    speak();
}