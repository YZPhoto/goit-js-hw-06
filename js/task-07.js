const rangeInput = document.querySelector("#font-size-control");
const rangeText = document.querySelector("#text");

const onRangeChange = (event) => {
    const { value } = event.target;

    rangeText.style.fontSize = `${value}px`;
};

rangeInput.addEventListener("input", onRangeChange);