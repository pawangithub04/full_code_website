document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.getElementById("clickButton");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const formData = new FormData(form);

        // You can also add other form data here if needed, e.g., checkbox values
        const selectedOptions = [];
        document.querySelectorAll(".toggle-button input:checked").forEach((checkbox) => {
            selectedOptions.push(checkbox.labels[0].textContent);
        });

        formData.append("selectedOptions", selectedOptions.join(", "));

        // Make an AJAX request to the backend API
        fetch("your_backend_api_endpoint", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the backend, e.g., show a success message
                console.log(data);
                alert("Form submitted successfully!");
            })
            .catch((error) => {
                // Handle errors, e.g., show an error message
                console.error("Error submitting form:", error);
                alert("An error occurred while submitting the form.");
            });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.getElementById("clickButton");

    submitButton.addEventListener("click", function () {
        const formData = new FormData(form);
        // Rest of your form submission logic...
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        // Your form submission logic...
    });
});

var emailfield = document.getElementById("email");
var emaillabel = document.getElementById("email-label");
var emailError= document.getElementById("email-error");

function validateEmail(){
    emaillabel.style.bottom = "45px"
    if(!emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "please enter valid email";
        return false;
    }
    emailError.innerHTML = "please enter valid email";
    return true;

}
