function submitForm() {
    document.getElementById("form").innerHTML = "Thank you for filling out this form!"
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form_submit").addEventListener("click", submitForm);
});


