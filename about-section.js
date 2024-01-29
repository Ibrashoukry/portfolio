const elementsToFadeIn = document.querySelectorAll(".fade");
if (elementsToFadeIn) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeIn.forEach(function(element) {
      const check = window.scrollY;
      if (check < 100) {
        document.getElementById("about").classList.add("invisible");
      } else {
        document.getElementById("about").classList.remove("invisible");
      }
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
}