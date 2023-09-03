{
    const calculateResult = (quota, select) => {
        const euro = 0.23;
        const sek = 2.68;
        const funt = 0.19;

        switch (select) {
            case "euro":
                return quota * euro;

            case "sek":
                return quota * sek;

            case "funt":
                return quota * funt;
        }
    };

    const updateTextResult = (quota, select, result) => {
        const resultElement = document.querySelector(".js-result")
        resultElement.innerText = result.toFixed(2);
    }

    const onFormInput = (event) => {
        event.preventDefault();

        const quotaElement = document.querySelector(".js-quota")
        const selectElement = document.querySelector(".js-select")

        const quota = quotaElement.value;
        const select = selectElement.value;

        const result = calculateResult(quota, select);

        updateTextResult(quota, select, result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form")
        formElement.addEventListener("input", onFormInput);
    };

    init();

}