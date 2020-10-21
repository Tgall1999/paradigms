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

  //Get name and make first network call
  console.log("get form");

  var name = document.getElementById("name-text").value;

  makeNetworkCallAge(name);
}

function makeNetworkCallAge(name) {
  console.log("make Network Call 1" + name);

  //Make netwrok call to the Age API
  var xhr = new XMLHttpRequest();
  var url = "https://api.agify.io/?name=" + name;
  xhr.open("GET",url,true);

  // Call function to parse first Netwrok call response
  xhr.onload = function(e){
    console.log(xhr.responseText);
    parseAndMakeNextNetworkCall(name,xhr.responseText);
  }

  xhr.onerror = function(e){
    console.error(xhr.statusText);
  }

  // pass the 'body' of the request
  xhr.send(null);

}

function parseAndMakeNextNetworkCall(name, response_text){
  console.log("In Second function" + response_text);

  // Parse JSON
  var responseJSON = JSON.parse(response_text);
  var label1 = document.getElementById("response-1");
  console.log(responseJSON['age']);

  // If response is valid, print response regularly and dynamically and call next network call function
  if(responseJSON['age'] == null){
    label1.innerHTML = "Sorry! Age Api not working for your name";
  }
  else{
    label1.innerHTML = "Hello " + name + " my guess is that you are " + responseJSON["age"] + ".";

    // Add to page dynamically
    var label1_added = document.createElement("p");
    label1_added.setAttribute("id", "label1_added_id" );

    var item_text = document.createTextNode("Hello " + name + " my guess is that you are " +
        responseJSON["age"] + ". (Added Dynamically)");
    label1_added.appendChild(item_text);

    var response_div = document.getElementById("response-div");
    response_div.appendChild(label1_added);


    nameNextNetworkCallAndParse(responseJSON["age"]);
  }
}

function nameNextNetworkCallAndParse(age){
  console.log("make Network Call 2 " + age + " " + age%10);

  //Make netwrok call to the ZIP code API
  var xhr = new XMLHttpRequest();
  var url = "https://api.zippopotam.us/us/3316" + age%10;
  xhr.open("GET",url,true);

  xhr.onload = function(e){
    console.log(xhr.responseText);

    // Parse JSON
    var responseJSON = JSON.parse(xhr.responseText);
    console.log(responseJSON['places'][0]);

    var label2 = document.getElementById("response-2");

    //If response is valid, print response regularly and dynamically
    if(responseJSON['places'][0] == null){
      label2.innerHTML = "Sorry! Zip Code Api not working for your name";
    }
    else{
      label2.innerHTML = "Age we believe your ideal vaction would be to " + responseJSON['places'][0]['place name']
          + " in " + responseJSON['places'][0]['state'] + ".";

      // Add to page dynamically
      var label2_added = document.createElement("p");
      label2_added.setAttribute("id", "label2_added_id" );

      var item_text = document.createTextNode("Age we believe your ideal vaction would be to " +
          responseJSON['places'][0]['place name'] + " in " + responseJSON['places'][0]['state'] +
           ". (Added Dynamically)");
      label2_added.appendChild(item_text);

      var response_div = document.getElementById("response-div");
      response_div.appendChild(label2_added);
    }
  }
  xhr.onerror = function(e){
    console.error(xhr.statusText);
  }
  // pass the 'body' of the request
  xhr.send(null);
}
