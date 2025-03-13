document.querySelectorAll(".action").forEach((row) => {
    const decrementButtons = row.querySelectorAll(".action__decrement");
    const incrementButtons = row.querySelectorAll(".action__increment");
    const counterValues = row.querySelectorAll(".action__input");

    decrementButtons.forEach((decrementButton, index) => {
        decrementButton.addEventListener("click", () => {
            counterValues[index].value = parseInt(counterValues[index].value, 10) - 1;
            console.log("Новое значение:", counterValues[index].value);
        });
    });

    incrementButtons.forEach((incrementButton, index) => {
        incrementButton.addEventListener("click", () => {
            counterValues[index].value = parseInt(counterValues[index].value, 10) + 1;
            console.log("Новое значение:", counterValues[index].value);
        });
    });
});
