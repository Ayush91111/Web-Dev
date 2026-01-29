const colorBox = document.getElementById("colorBox");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

const defaultColor = "#add8e6";

colorPicker.addEventListener("input", () => {
    colorBox.style.backgroundColor = colorPicker.value;
});

resetBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = defaultColor;
    colorPicker.value = defaultColor; // Sync color picker
});
