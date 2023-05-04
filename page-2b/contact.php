<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="This is my Curriculum Vitae Page">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'>
        <script src="https://kit.fontawesome.com/3be5f3d773.js" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>

        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->


        <div class="wrapper-container">
            
            <?php include('php/nav-menu.php'); ?>

            <main class="main-wrapper">
                <section class="contact-section">
                    
                    <h1>Contact us! We Are Here To Help You! </h1>
                    <div class="contact">
                        <div class="contact-content">
                            <form action="#" method="POST" enctype="multipart/form-data" id="contact-form" class="form-content">
                                <div class="form-block">
                                  <label for="full-name">Full Name</label>
                                  <input type="text" name="name" id="full-name" class="form-control" placeholder="Your first and last name">
                                </div>
                        
                                <div class="form-block">
                                  <label for="email">Your Email Address</label>
                                  <input type="email" name="email" id="email" class="form-control" placeholder="jan@kowalski.com">
                                </div>
                        
                                <div class="form-block">
                                  <label for="message">Your message</label>
                                  <textarea name="message" name="message" id="message" class="form-control" placeholder="Enter your message..." cols="30" rows="10"></textarea>
                                </div>
                        
                                <div class="form-block">
                                  <input type="submit" value="Send" id="send-button" class="sb-light">
                                </div>
                              </form>
                        </div>
                        <div class="contact-content">
                            <ul class="contact-list">
                                <li class="list-item"><i class="fa-solid fa-location-pin fa-xl"></i><span class="contact-text">Warsaw, ul. Nowogrodzka 84</span></li>
                        
                                <li class="list-item"><i class="fa fa-phone fa-xl"></i><a href="tel:+48666777XXX" class="contact-text">+48666777XXX</a></li>
                        
                                <li class="list-item"><i class="fa fa-envelope fa-xl"></i><a href="mailto:#" class="contact-text">Bteam@gmail.com</a></li>
                            </ul>
                            <hr>
                            <ul class="social-list">
                                <li><a href="#" class="contact-icon">
                                  <i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
                                </li>
                                <li><a href="#" class="contact-icon">
                                  <i class="fa fa-codepen fa-2x" aria-hidden="true"></i></a>
                                </li>
                                <li><a href="#" class="contact-icon">
                                  <i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
           
            <?php include('php/footer.php'); ?>

        </div>
        
        <script src="js/menuBar.js" async defer></script>
    </body>
</html>