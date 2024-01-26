const elementsToFadeIn = document.querySelectorAll(".invisible");
if (elementsToFadeIn) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeIn.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
}