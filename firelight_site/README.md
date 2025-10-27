Firelight Computers - Static Site (split files)
Files:
- index.html
- assets/css/style.css
- assets/js/main.js
- assets/images/ (place images here)
- contact.php (optional sample PHP handler)
- README.md (this file)

Quick start:
1. Unzip and place files on any static host (Netlify, Vercel, GitHub Pages).
2. If using Netlify Forms: modify the contact <form> in index.html to include data-netlify="true" and remove onsubmit JS handler.
3. If using Formspree: set the form action attribute to your Formspree endpoint (https://formspree.io/f/YOUR_ID) and method="POST".
4. PHP handler: use contact.php (example below) — requires a PHP-enabled server.

Sample PHP (contact.php):
<?php
// Simple mail-forwarding handler (example only). Validate and secure before using in production.
if($_SERVER['REQUEST_METHOD']==='POST'){
  $name = strip_tags($_POST['name'] ?? '');
  $email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
  $subject = strip_tags($_POST['subject'] ?? 'Contact');
  $message = strip_tags($_POST['message'] ?? '');
  if($name && $email){
    $to = 'hello@firelight.example';
    $body = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";
    $headers = 'From: '.$email."\r\n".'Reply-To: '.$email;
    if(mail($to, $subject, $body, $headers)){ echo 'OK'; } else { http_response_code(500); echo 'Send failed'; }
  } else { http_response_code(400); echo 'Missing fields'; }
}
?>
