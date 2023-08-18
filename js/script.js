let formElement = document.querySelector(".js-form")
let quotaElement = document.querySelector(".js-quota")
let selectElement = document.querySelector(".js-select")
let resultElement = document.querySelector(".js-result")

let euro = 0.23;
let sek = 2.68;
let funt = 0.19;

formElement.addEventListener("input", () => {

    let quota = quotaElement.value;
    let select = selectElement.value;
    let result = resultElement.value;

    switch (select) {
        case "euro":
            result = quota * euro;
            break;
        case "sek":
            result = quota * sek;
            break;
        case "funt":
            result = quota * funt;
            break;
    }
    resultElement.innerText = result.toFixed(2);
});
