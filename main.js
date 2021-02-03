// coun-up Start
$('.number').counterUp({
  delay: 10,
  time: 1300
});
// coun-up End



// Progressive loading End
const observer = lozad();
observer.observe();
// Progressive loading Start



// Image appearance upon scrolling Start
const featureTextUp = {
  distance: '30px',
  origin: 'bottom',
  duration: 1500,
};
const featureImageUp = {
  distance: '30px',
  origin: 'bottom',
  duration: 2500,
};
const reviewUp = {
  delay: 0,
  interval: 100,
  distance: '30px',
  origin: 'bottom',
  duration: 1500,
};
ScrollReveal().reveal('.feature-text', featureTextUp);
ScrollReveal().reveal('.feature-image', featureImageUp);
ScrollReveal().reveal('.reviews .review', reviewUp);
// Image appearance upon scrolling End
