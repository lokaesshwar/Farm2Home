// JavaScript code for form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    // You can handle form submission here, for example, send the form data to a server using AJAX
    console.log("Form submitted:", formData);
    // Clear form fields after submission
    form.reset();
  });
});
