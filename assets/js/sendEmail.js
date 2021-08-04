function sendMail(contactForm) {
    emailjs.send("gmail", "music-matcher", {
        "from_name": contactForm.name.value,
        "message": contactForm.message.value,
        "from_email": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("Success", response);

        },
        function(error) {
            console.log("Failure", error);
        }
    );
}