let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const changeValue = (step) => {
    counterValue = counterValue + step;
    document.querySelector("#value").innerHTML = counterValue;
    console.log(counterValue);
};

decrementBtn.addEventListener("click", () => changeValue(-1));
incrementBtn.addEventListener("click", () => changeValue(+1));