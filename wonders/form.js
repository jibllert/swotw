var invalidinput=false;

function checkInput(id) {
  if (document.getElementById(id).value=="") {
    document.getElementById(id).parentElement.getElementsByClassName("form_error")[0].style.opacity = 1;
  } else {
    document.getElementById(id).parentElement.getElementsByClassName("form_error")[0].style.opacity = 0;
    invalidinput = true;
  }
}

function submitForm() {
  checkInput("form_firstname");
  checkInput("form_surname");
  checkInput("form_email");
  checkInput("form_date");
  checkInput("form_recount");
  if (invalidinput==true) {
    alert("Form not completed!");
  }
    //document.getElementById("form").innerHTML = "Thank you for filling out this form!" //Sucsessfull Form
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form_submit").addEventListener("click", submitForm);
});


