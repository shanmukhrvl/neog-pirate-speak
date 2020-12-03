const btnTranslate = document.querySelector("#btn-translate");
const textInput = document.querySelector("#text-input");
const outputDiv = document.querySelector("#output-div");

function inputTranslate() {
    const inputText = textInput.value;
    
    outputDiv.innerText = inputText;
}

btnTranslate.addEventListener("click", inputTranslate);

