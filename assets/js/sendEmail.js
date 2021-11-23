function sendMail(contactForm) {
    emailjs.send("service_8qhbcwt", "music-matcher", {
        "from_name": contactForm.name.value,
        "message": contactForm.message.value,
        "from_email": contactForm.email.value,
    })
    .then(
        function(response) {
            console.log("Success", response);

        },
        function(error) {
            console.log("Failure", error);
        }
    );
    return false;
}