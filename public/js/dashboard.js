"use strict";

const { reset } = require("nodemon");

const $ = (selector) => document.querySelector(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const onReset = (evt) => {
  //TODO:: Reset the reset-able fields

  $("#notifications").checked = true;

  $("#eco").checked = true;
  $("#temperature").value = 21;
  $("#location").value = "L7W 4T8";
  resetErrors();
  console.error("Fields reset");

  evt.preventDefault();
};
const resetErrors = ()=>{
  $("#temperature_error").textContent="";
  $("#location_error").textContent="";
}

const onSubmit = (evt) => {
  resetErrors();
  //TODO::Reset any errors before submitting

  //TODO:: Set notifications since it doesn't need to be validated
  let notificationsOn = $("#notifications").checked;

  $("#setting_notifications").textContent = notificationsOn ? "On" : "Off";

  //TODO:: Set lighting mode with a for loop since it doesn't need to be validated
  //querySelectorAll returns an array of everything that matches the argument
  let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']");

  for (let i = 0; i < lightingModeOptions.length; i++) {
    if (lightingModeOptions[i].checked) {
      //Set setting_lighting_mode to the value of the selected radio button
      $("#setting_lighting_mode").textContent = lightingModeOptions[i].value;
    }
  }

  //TODO:: Validate the postal code with the Regular Expression,
  //TODO:: Display an error if not valid
  let location = $("#location").value;

  if (postalRegEx.test(location)){
    //if the postal code is valid this code will run

    $("#setting_location").textcontent = location;
  }else{
    //Add your logic here if the postal code is not valid

    $("#location_error").textcontent = "The postal code did not match the format required."
  }
    //TODO:: Validate the temperature by checking the range and if it's a number
    //TODO:: Display an error if not valid

  let temperature = $("#temperature").value;
  let temperatureError = $("#temperature_error");


  if (isNaN(temperature) || temperature == ""){
    temperatureError.textContent = "This is not a valid temperature selection.";
  }else if (temperature>25 ){
    temperatureError.textContent = "Please select temperature under 25 degrees Celcius.";
    $("#setting_temperature").textContent = 25;
  }else if ( temperature<10){
    temperatureError.textContent = "Please select temperature over 10 degrees Celcius.";
    $("#setting_temperature").textContent = 10;
  }else {
    $("#setting_temperature").textContent = temperature;
  }
    
  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  //TODO:: Add current date
  $("#date_display").textContent = new Date().toDateString();
  //TODO:: Add Reset Form listener
  $("#reset_form").addEventListener("reset", onReset);
  //TODO:: Add Submit Form listener
  $("#update_settings").addEventListener("click", onSubmit);
});
