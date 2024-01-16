const redSlider = document.getElementById("redSlider");
const blueSlider = document.getElementById("blueSlider");
const greenSlider = document.getElementById("greenSlider");

const redValueSpan = document.getElementById("redValue");
const blueValueSpan = document.getElementById("blueValue");
const greenValueSpan = document.getElementById("greenValue");

const colorBox = document.getElementById("colorBox");
const copyButton = document.getElementById("copyBtn");
const  inputTypeRGBValue = document.getElementById("inputType");

redSlider.addEventListener("input",updateColor);
blueSlider.addEventListener("input",updateColor);
greenSlider.addEventListener("input",updateColor);
copyButton.addEventListener("click",copyRGBValue);

function updateColor(){
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    // console.log(redValue,greenValue,blueValue);

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    colorBox.style.backgroundColor = rgbColor;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;

    inputTypeRGBValue.textContent =rgbColor;
}

updateColor();

function copyRGBValue(){
    const redValue = redSlider.value;
    const greenValue =greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    navigator.clipboard.writeText(rgbColor).then(()=>{
        alert("RGB Color Value is Copied to clipboard:" + rgbColor);
    })
    .catch((error)=>{
        console.error("Failed To Copy RGB Value");
    });
}