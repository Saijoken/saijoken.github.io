<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Validate input
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all fields.";
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }
    
    // Set recipient email (replace with your email)
    $to = "mohben69800@gmail.com";
    
    // Set email subject
    $subject = "New Contact Form Submission from " . $name;
    
    // Set email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Create email body
    $email_body = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
    </head>
    <body>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Message:</strong></p>
        <p>" . nl2br(htmlspecialchars($message)) . "</p>
    </body>
    </html>
    ";
    
    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        // Redirect back to the contact page with success message
        header("Location: index.html?status=success");
    } else {
        // Redirect back to the contact page with error message
        header("Location: index.html?status=error");
    }
} else {
    // If not a POST request, redirect to the contact page
    header("Location: index.html");
}
?> 