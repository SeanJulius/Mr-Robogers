//Business Logic

function beep(input) {
  let numberStr = "";
  for(count = 0; count <= input; count++) {
    count = count.toString();
    if (count.includes('1')) {
      numberStr =numberStr.concat(",Beep!");
    }
    else { 
      if (count !== '0') {
      numberStr = numberStr.concat(", ")
    }
    numberStr = numberStr.concat(count);
    }
  }
  return numberStr;
}

// User Interface Logic

$(document).ready(function() {
  $("form#formNumber").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInput").val();
    let outputString = beep(userInput);
    $("ul#output").append("<li>",outputString,"</li>");
  });
});