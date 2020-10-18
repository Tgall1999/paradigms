// scripts/main.js

var submitButton = document.getElementById('submit-button');

submitButton.onmouseup = getFormInfo;

console.log("Entered script");
var resetButton = document.getElementById('reset-button');

resetButton.onmouseup = reloader;

function reloader(){
  console.log("reloader");
  location.reload();
}

function getFormInfo(){
  console.log("get form");

  var greetingText = document.getElementById("greeting-text").value;

  var bodyText = document.getElementById("body-text").value;

  var senderText = document.getElementById("sender-text").value;

  console.log("title: " + greetingText);
  console.log("title: " + bodyText);
  console.log("title: " + senderText);

  var footerString = "- ";

  if(document.getElementById("checkbox-1").checked){
    footerString = footerString + "See you soon! - "
  }

  if(document.getElementById("checkbox-2").checked){
    footerString = footerString + "Enjoy your day! - "
  }

  if(document.getElementById("checkbox-3").checked){
    footerString = footerString + "Go Irish! - "
  }

  console.log("title: " + footerString);

  var letterDict = {}

  letterDict["greeting"] = greetingText;
  letterDict["body"] = bodyText;
  letterDict["sender"] = senderText;
  letterDict["footer"] = footerString;

  console.log(letterDict);


  displayInfo(letterDict);
}

function displayInfo(letterDict){
  console.log("display form");

  var letterGreeting = document.getElementById("greeting");
  letterGreeting.innerHTML = "Hello " + letterDict["greeting"] + ",";

  var letterBody = document.getElementById("body");
  letterBody.innerHTML = letterDict["body"];

  var letterFarewell = document.getElementById("farewell");
  letterFarewell.innerHTML = "Sincerally, " + letterDict["sender"];

  var letterFooter = document.getElementById("footer");
  letterFooter.innerHTML = letterDict["footer"];

}
