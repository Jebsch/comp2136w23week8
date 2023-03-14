"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const onReset = (evt) => {
  resetErrors();
  //TODO:: Reset the reset-able fields
  $("first_name").value = "";
  $("last_name").value = "";
  $("email").value = "";
  $("password").value = "";
  $("confirm_password").value = "";
  evt.preventDefault();
};

const resetErrors = () =>{
  $("#name_error").textcontent = "";
  $("#password_error").textcontent = "";
  $("#email_error").textcontent = "";
}

const onSubmit = (evt) => {
  resetErrors();

  //TODO:: Use this boolean to keep track of any errors because you need to prevent the settings
  //       from updating if even one field is wrong
  let formErrors = false;
  let firstname = $("#first_name");
  let lastname = $("#last_name");
  let email = $("#email");
  let password = $("#password");
  let confirm_password = $("#confirm_password");
  let today = new Date();

  if (firstname == ""){
    $("#name_error").textcontent = "Name fields can't be empty."
    formErrors = true;
  }
  if (lastname == ""){
    $("#name_error").textcontent = "Try again Mclovin."
    formErrors = true;
  }
  if (!emailRegEx.test(email)){
    $("#email_error").textcontent = "Email invalid."
    formErrors = true;
  }
  if (!passwordRegEx.test(password)){
    $("#password_error").textcontent = "Password is invalid."
    formErrors = true;
  } 
  if (password != confirm_password){
    $("#password_error").textcontent = "Passwords do not match."
    formErrors = true;
  }
  if (today.sethours (0,0,0,0) < dob){
    $("#dob_error").textcontent
    formErrors = true;
  }


  //TODO:: Make sure name fields are not empty

  //TODO:: Validate email with the Regular Expression

  //TODO:: Validate password with the Regular Expression
  //TODO:: Validate passwords to be matching

  //TODO:: Make sure date of birth is in the past.

  //TODO:: check you formErrors boolean and update the fields if still false
if (!formErrors) {
  let dob = new Date($("#dob").value);
  //$("#user_dob").textcontent = $("dob").value;
  console.log(dob);
  $("#userdob").textcontent = dob.toDateString();

  
  $("#user_password_last_changed").textcontent = today.toDateString();

  $("#first_name").textcontent = $("#user_first_name").value;
  $("#last_name").textcontent = $("#user_last_name").value;
  $("#email").textcontent = $("#user_email").value;
  


  

}
  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);
});
