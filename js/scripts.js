/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// Use this file to add JavaScript to your project
<script>
var form = document.getElementById("contactForm");

async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the email value
    var email = document.getElementById("email").value;

    // Create a JSON object with the email
    var formData = JSON.stringify({ email: email });

    // Send the data to Formspree using fetch
    fetch(event.target.action, {
        method: form.method,
        headers: {
        'Content-Type': 'application/json'
        },
        body: formData
    })
    .then(response => {
        if (response.ok) {
        // Formspree responded with success
        // Show success message and reset the form
        document.getElementById("submitSuccessMessage").classList.remove("d-none");
        document.getElementById("contactForm").reset();
        } else {
        // Formspree responded with an error
        // Show error message
        response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
            document.getElementById("submitErrorMessage").innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
            document.getElementById("submitErrorMessage").innerHTML = "Oops! There was a problem submitting your form";
            }
        })
        .catch(error => {
            // Handle fetch error
            document.getElementById("submitErrorMessage").innerHTML = "Oops! There was a problem submitting your form";
        });
        }
    })
    .catch(error => {
        // Handle fetch error
        document.getElementById("submitErrorMessage").innerHTML = "Oops! There was a problem submitting your form";
    });
}

form.addEventListener("submit", handleSubmit);
</script>