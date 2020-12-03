const btnTranslate = document.querySelector("#btn-translate");
const textInput = document.querySelector("#text-input");

function inputTranslate() {
    const inputText = textInput.value;
    console.log(inputText);
}

btnTranslate.addEventListener("click", inputTranslate);

