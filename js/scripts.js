//Business Logic

//First test should return "1" with Beep!
function beep(input) {
  let returnArray = [];
  for(let i = 0; i <= input; i++) {
    let index = i.toString();
    if (index.includes('3')) {
      returnArray.push(", Won't you be my neighbor?");
    }
    //Second test should return "2" with Boop!
    else if (index.includes('2')) {
      returnArray.push(", Boop!");
    }
    //Third test should return "3" with Won't you be my neighbor
    else if (index.includes('1')) {
      returnArray.push(", Beep!");
    }
    //Fourth test should return the hierarchy of substitutions
    else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

// User Interface Logic

$(document).ready(function() {
  $("form#formNumber").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInput").val();
    let userArray = beep(userInput);
    let beepStr = "";
    userArray.forEach(function(element, index, array) {
      if(index !== array.length -1) {
        beepStr =beepStr + element + ", ";
      } else {
        beepStr = beepStr + element;
      }
    })
    $("ul#output").append("<li>",beepStr,"</li>");
  });
});