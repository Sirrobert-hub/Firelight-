<?php
// contact.php - sample handler (example). Validate thoroughly before production.
if($_SERVER['REQUEST_METHOD'] !== 'POST'){ http_response_code(405); echo 'Method not allowed'; exit; }
$name = strip_tags(trim($_POST['name'] ?? '')); $email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL); $subject = strip_tags(trim($_POST['subject'] ?? 'Contact')); $message = strip_tags(trim($_POST['message'] ?? ''));
if(!$name || !$email){ http_response_code(400); echo 'Missing name or email'; exit; }
$to = 'hello@firelight.example'; $body = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message"; $headers = 'From: '.$email."\r\n".'Reply-To: '.$email;
if(mail($to, $subject, $body, $headers)){ echo 'OK'; } else { http_response_code(500); echo 'Send failed'; }
?>