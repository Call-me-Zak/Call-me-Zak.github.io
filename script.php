<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input to prevent injection attacks
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    // Simple email validation
    if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        die("Invalid email address.");
    }

    // Set your email address where you want to receive the contact form messages
    $to = "foceg21642@biowey.com";
    $subject = "New Contact Form Submission";

    // Prepare the email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Message:\n$message\n";

    // Set email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Thank you for contacting us. We will get back to you shortly.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    // Redirect to the contact form page if the form is not submitted correctly
    header("Location: contact.html");
    exit;
}
?>
