window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll("nav ul li a");
  var currentSectionIndex = sections.length - 1;

  sections.forEach(function (section, index) {
    var sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      currentSectionIndex = index;
    }
  });

  navLinks
