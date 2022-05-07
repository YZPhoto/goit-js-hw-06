const textInput = document.querySelector("#validation-input");
const validValue = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
    const textValue = event.target.value.length;

    if (textValue === validValue) {
        textInput.setAttribute("class", "valid");
    } else {
        textInput.setAttribute("class", "invalid");
    }
});