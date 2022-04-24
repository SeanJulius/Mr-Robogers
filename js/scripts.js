//Business Logic

//First test should return "1" with Beep!
function beep(input) {
  let numberStr = "";
  for(count = 0; count <= input; count++) {
    count = count.toString();
    if (count.includes('3')) {
      numberStr = numberStr.concat(", Won't you be my neighbor?");
    }
    //Second test should return "2" with Boop!
    else if (count.includes('2')) {
      numberStr = numberStr.concat(", Boop!");
    }
    //Third test should return "3" with Won't you be my neighbor
    else if (count.includes('1')) {
      numberStr = numberStr.concat(", Beep!");
    }
    //Fourth test should return the hierarchy of substitutions
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