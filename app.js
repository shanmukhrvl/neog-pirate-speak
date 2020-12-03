const btnTranslate = document.querySelector("#btn-translate");
const textInput = document.querySelector("#text-input");
const outputDiv = document.querySelector("#output-div");

const serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslatedURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server, try again after some time");
}

function inputTranslate() {
    const inputText = textInput.value;

    // calling server for processing
    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", inputTranslate);

