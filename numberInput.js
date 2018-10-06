window.onload = function() {
    var clickBox = document.getElementById("clickBox");
    var millisecondInput = document.getElementById("milliseconds");
    var secondInput = document.getElementById("seconds");
    var minuteInput = document.getElementById("minutes");

    clickBox.addEventListener("keydown", function(){getInput(event)});
}

function getInput() {
    var numberInputs = document.getElementsByClassName("numberInput");
    //Create array with the numerical values of the input before the key press
    var clickBoxValue = [Number(hours.innerHTML), Number(minutes.innerHTML), Number(seconds.innerHTML), Number(milliseconds.innerHTML)];
    var updatedClickBoxValue = updateClickBoxValue(clickBoxValue);

    //Check if the input is a number
    if (isFinite(event.key)) {
        updateInputs(updatedClickBoxValue, numberInputs);
        event.preventDefault();
    } else if (event.key === 'Backspace') {
        console.log(updatedClickBoxValue);
        updatedClickBoxValue.splice(-1, 1)
        updatedClickBoxValue.splice(0, 0, 0)
        console.log(updatedClickBoxValue);
        event.preventDefault();
        updateInputs(updatedClickBoxValue, numberInputs);
    }
}

function updateInputs(updatedClickBoxValue, numberInputs) {
    for (i = 0; i <= updatedClickBoxValue.length - 1; i = i + 2) {
        if ((updatedClickBoxValue[i] + updatedClickBoxValue[i + 1]) != 0) {
            numberInputs[Math.ceil(i / 2)].innerHTML = "" + updatedClickBoxValue[i] + updatedClickBoxValue[i + 1];
        } else {
          numberInputs[Math.ceil(i / 2)].innerHTML = "";
        }
    }
}

function updateClickBoxValue(clickBoxValue) {
    var updatedClickBoxValue = [];
    //Loop through clickBoxValue and add a zero if it's a single digit, and
    //split the number into two if it's a two digit number. Return all of this
    //to the updatedClickBoxValue array.
    for (i = 0; i < clickBoxValue.length; i++) {
        if (('' + clickBoxValue[i]).length == 1) {
            updatedClickBoxValue.push(0);
            updatedClickBoxValue.push(clickBoxValue[i]);
        } else {
            updatedClickBoxValue.push(Number(('' + clickBoxValue[i])[0]));
            updatedClickBoxValue.push(Number(('' + clickBoxValue[i])[1]));
        }
    }

    //Append the new number
    if (updatedClickBoxValue[0] == 0 && event.key !== "Backspace") {
        updatedClickBoxValue.splice(0, 1);
        updatedClickBoxValue.push(Number(event.key));
    }
    return updatedClickBoxValue;
}
