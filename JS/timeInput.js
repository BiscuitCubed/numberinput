window.onload = function() {
  // Get all time inputs on the page, and add an event listener to each of them
    var timeInputs = document.getElementsByClassName("timeInput");

    for(i = 0; i < timeInputs.length; i++){
      timeInputs[i].addEventListener("keydown", function(){handleKeyDown(event)});
    }
}

function handleKeyDown(event){
  timeInput = event.target;
  inputText = "" + timeInput.value + event.key;
  cleanedTimeInputValue = "" + inputText.replace(/[^0-9]/g, "");

  //If an input is passed that is not a number, deal with that case.
  console.log(catchNonNumberInputs(event.key));
  if (catchNonNumberInputs(event.key) == false){
    console.log("= false");
    formatedTimeInputValue = formatTimeInputValue(cleanedTimeInputValue);
    updateTimeInput(timeInput, formatedTimeInputValue);
  }
}

function updateTimeInput(inputToUpdate, updatedTimeInputValue){
  console.log(inputToUpdate);
  inputToUpdate.value = updatedTimeInputValue;
}

function formatTimeInputValue(stringToClean){
  //if stringToClean has one or two digits (less than one second) add leading
  //zeros and the decimal point
  if (stringToClean.length == 1) {
    return "0.0" + stringToClean;
  }else if (stringToClean.length == 2) {
    return "0." + stringToClean;
  } else {
    for (i = stringToClean.length - 1; i > 2; i -= 2){
      //every two digits, add a
    }
  }
}

function catchNonNumberInputs(input){
  //If input is NaN, check if it is a special case (such as Backspace or enter),
  //and deal with that case.
  if (isNaN(input)){
    switch (input){
      case "Backspace":
          cleanedTimeInputValue = cleanedTimeInputValue.slice(0,-1);
          updateTimeInput(timeInput, cleanedTimeInputValue);
          return true;
        break;
      case "Enter":
          console.log("This will act as a tab... Eventually.");
          return true;
        break;
      //If d or D is pressed, and if there are no numbers already typed, set the
      //time to be a DNF (did not finish)
      case "d":
      case "D":
      //   if (cleanedTimeInputValue.length == 0){
      //     updateTimeInput(timeInput, "DNF");
      //     return true;
      // }
      break;
      default:
        return false;
    }
  }
  return false;
}
