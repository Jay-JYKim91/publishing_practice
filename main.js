// $( '.colored-text' ).css( 'color', 'red' );
jQuery(document).ready(function ($) {
  $('.number').counterUp({
    delay: 10,
    time: 1300
  });
});

const observer = lozad();
observer.observe();

const header = document.querySelector('.number');

header.addEventListener('click', (event) => {
  console.log('in!');
})
