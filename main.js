// hero-image parallax
$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.hero-image').css('background-position', 'center ' + ((scrolledY)/2) + 'px');
});

// count-up
$('.number').counterUp({
  delay: 10,
  time: 1300
});

// Progressive loading
const observer = lozad('.lozad', {
  rootMargin: '700px 0px'
});
observer.observe();

// Image appearance upon scrolling
const featureTextUp = {
  distance: '30px',
  origin: 'bottom',
  duration: 1500
};
const featureImageUp = {
  distance: '30px',
  origin: 'bottom',
  duration: 2500
};
const reviewUp = {
  interval: 200,
  distance: '30px',
  origin: 'bottom',
  duration: 1500
};
ScrollReveal().reveal('.feature-text', featureTextUp);
ScrollReveal().reveal('.feature-image', featureImageUp);
ScrollReveal().reveal('.reviews .review', reviewUp);
