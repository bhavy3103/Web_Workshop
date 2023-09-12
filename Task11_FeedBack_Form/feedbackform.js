document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const firstname = document.querySelector('input[name="firstname"]').value.trim();
        const lastname = document.querySelector('input[name="lastname"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const issue = document.querySelector('textarea[name="issue"]').value.trim();

        // Basic validation
        if (firstname === "" || lastname === "" || email === "" || issue === "") {
            alert("Please fill in all required fields.");
            event.preventDefault();
        }
    });
});