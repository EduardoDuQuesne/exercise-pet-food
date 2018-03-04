/*jshint esversion: 6 */

const printToDom = require("./DOMOutput");

let dogData = null;
let catData = null;

const parseDogData = () => {
    let dogData = JSON.parse(event.target.responseText).dog_brands;
    printToDom(dogData, "dog");
};

const parseCatData = () => {
    let catData = JSON.parse(event.target.responseText).cat_brands;
    printToDom(catData, "cat");
};

const dogRequest = new XMLHttpRequest();
dogRequest.addEventListener("load", parseDogData);
dogRequest.open("GET", "data/dogfood.json");
dogRequest.send();

const catRequest = new XMLHttpRequest();
catRequest.addEventListener("load", parseCatData);
catRequest.open("GET", "data/catfood.json");
catRequest.send();
