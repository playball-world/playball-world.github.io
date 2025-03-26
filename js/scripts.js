document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.lang-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (selectedLang === 'pl') {
                document.body.classList.add('lang-active'); 
            } else {
                document.body.classList.remove('lang-active'); 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");
  const aboutSection = document.getElementById("about");

  window.addEventListener("scroll", function () {
      const aboutSectionTop = aboutSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (aboutSectionTop <= viewportHeight / 2) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  });

  scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});