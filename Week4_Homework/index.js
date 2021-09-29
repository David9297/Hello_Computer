const functions = require("firebase-functions");
const { dialogflow } = require("actions-on-google");

const app = dialogflow();

let beginRoast = [
    "Ok. The roast is starting now. How badly do you want to be roasted?",
    "I'm ready to grill you. How much should I grill you?",
    "Of course. Let's fry you. How bad do you want to be fried?",
    "Sure. How much should you be destroyed?",
    "Definitely. Let the bashing start. How harsh do you want it?"
];

let littleRoast = [
    "You had a tough day, huh.",
    "I always beat you. You'll never win",
    "I'm sorry. Did I hurt your feelings? Hahaha",
    "I'm more beautiful than you are. Try harder.",
    "You look like my old grandmother.",
    "I can't hear you. Speak louder like a real man.",
    "You're such as freeloader!",
    "Excuse me! I think you're in my way.",
    "Do you really make so many mistakes? Wow.",
    "It's not your turn yet. You have to wait longer"
];

let bigRoast = [
    "Ok. Have a very bad day!",
    "Why don't you stop stalking other people's social media profiles.",
    "You're a huge cry baby. I can't stand your sweaty tears.",
    "Please do me a favor and shut up until you're able to roast me back.",
    "I know everything about your personal life and I just told the whole world about it.",
    "I hope you and your family get very sick soon.",
    "Watch out because you are the most wanted man in the universe.",
    "I saw what you did in the bathroom and I'm going to tell your friend about it.",
    "Hooray!!! You just failed your admissions test and you're so sad about it.",
    "Oh my God, is that you? No. Wait, it's not. It's just a burnt rag doll."
];

let mediumRoast = [
    "Go lock yourself in a dark room for the rest of your life.",
    "Nobody likes you at all.",
    "Please stop talking because you sound like a broken record.",
    "Why don't you get a job right now instead of playing video games at home every day.",
    "I can't believe you stink so much. I'm getting out of here.",
    "I'm way smarter than you. What are you going to do about it?",
    "You don't have any friends and I couldn't care less.",
    "Oh please! You know that it's all your fault. Just take the blame, will you?",
    "You are the exact definition of stupidity and ignorance.",
    "Go back to where you came from!"
];

app.intent("Default Welcome Intent", (conv) => {
    conv.ask("Howdy there! What's Up!!!");
});

app.intent("begin_roast", (conv) => {
    let roastProcess = beginRoast[Math.floor(Math.random() * beginRoast.length)];
    conv.ask(roastProcess);
});

app.intent("little_roast", (conv) => {
    let littleRoastProcess = littleRoast[Math.floor(Math.random() * littleRoast.length)];
    conv.ask(littleRoastProcess);
});

app.intent("big_roast", (conv) => {
    let bigRoastProcess = bigRoast[Math.floor(Math.random() * bigRoast.length)];
    conv.ask(bigRoastProcess);
});

app.intent("medium_roast", (conv) => {
    let mediumRoastProcess = mediumRoast[Math.floor(Math.random() * mediumRoast.length)];
    conv.ask(mediumRoastProcess);
});

exports.theRoastingBot2 = functions.https.onRequest(app);