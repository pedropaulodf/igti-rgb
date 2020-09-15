window.addEventListener('load', start);

function start() {
    const inputsRange = document.querySelectorAll('input[type=range]');
    const inputsText = document.querySelectorAll('input[type=text]');
    const inputRGB = document.querySelector('#inputRGB');
    const rgb = [];

    for (let i = 0; i < inputsRange.length; i++) {
        inputsRange[i].addEventListener('input', changeBoxColorRGB);
    }

    function changeBoxColorRGB() {
        for (let i = 0; i < inputsRange.length; i++) {
            inputsText[i].value = inputsRange[i].value;
            rgb[i] = inputsText[i].value;
        }
        inputRGB.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${rgb[3]})`;
    }
}

/**
 * ANTIGA FORMA DE RESOLVER
 */

// window.addEventListener('load', constructor);


// function constructor(){
//     var rangeV = document.querySelector('#inputRangeR');
//     var rangeG = document.querySelector('#inputRangeG');
//     var rangeB = document.querySelector('#inputRangeB');
//     rangeV.addEventListener('input', showValueR);
//     rangeG.addEventListener('input', showValueG);
//     rangeB.addEventListener('input', showValueB);

//     cleanInputRange(rangeV,rangeG,rangeB);
//     changeBoxColorRGB();
// }

// function showValueR(rangeSelectec){
//     var inputVal = rangeSelectec.target.value;
//     var inputR = document.querySelector('#inputR').value = inputVal;
//     changeBoxColorRGB();
// }

// function showValueG(rangeSelectec){
//     var inputVal = rangeSelectec.target.value;
//     var inputR = document.querySelector('#inputG').value = inputVal;
//     changeBoxColorRGB();
// }

// function showValueB(rangeSelectec){
//     var inputVal = rangeSelectec.target.value;
//     var inputR = document.querySelector('#inputB').value = inputVal;
//     changeBoxColorRGB();
// }

// function cleanInputRange(rangeV,rangeG,rangeB){
//     rangeV.value = 0;rangeG.value = 0;rangeB.value = 0;
// }

// function changeBoxColorRGB(){
//     var r = document.querySelector('#inputR').value;
//     var g = document.querySelector('#inputG').value;
//     var b = document.querySelector('#inputB').value;
//     // var RGB = 'rgb('+r+', '+g+', '+b+')';
//     var RGB = `rgb(${r}, ${g}, ${b})`;
//     var inputRGB = document.querySelector('#inputRGB');
//     inputRGB.style.backgroundColor = RGB;
// }