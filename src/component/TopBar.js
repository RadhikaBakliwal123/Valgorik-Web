
function TopBar() {
  return (
    <section id="topbar" class="d-flex align-items-center">
       
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope-fill"></i><a href="mailto:bakliwalradhika@gmail.com">radhika@gmail.com</a>
          <i class="bi bi-phone-fill phone-icon"></i> +91 8619778058
        </div>
        <div class="social-links d-none d-md-block">
          <a href="https://www.youtube.com/c/jamesqquick" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="https://www.youtube.com/c/jamesqquick" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://www.youtube.com/c/jamesqquick" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="https://www.youtube.com/c/jamesqquick" class="linkedin"><i class="bi bi-linkedin"></i></a>

        </div>
      </div>
      
    </section>
    
  );
}

export default TopBar;
