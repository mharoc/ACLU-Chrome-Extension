document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".prev").addEventListener("click", () => {
    plusSlides(-1)
  })
  document.querySelector(".next").addEventListener("click", () => {
    plusSlides(1)
  })

  document.querySelector("#dot1").addEventListener("click", () => {
      currentSlide(1)
  })
  document.querySelector("#dot2").addEventListener("click", () => {
    currentSlide(2)
  })
  document.querySelector("#dot3").addEventListener("click", () => {
    currentSlide(3)
  })

  var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) { 
          slideIndex = slides.length;
        }
        Array.from(slides).forEach(item => item.style.display = "none");
        Array.from(dots).forEach(
          item => (item.className = item.className.replace(" active",''))
        ); 
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
})