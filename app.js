var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-text");
var outputTxt = document.querySelector("#output-txt");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(input) {
    return serverUrl + "?text=" + input;
}
function errorHandler(error) {
    console.log("error occurred", error);
}

//console.log(btnTranslate)
function clickHandler() {
    var input = inputTxt.value;

    var url = constructUrl(input);
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let outputtext = json.contents.translated;
            outputTxt.innerText = outputtext;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)