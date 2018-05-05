var imageDials = document.querySelectorAll('div.choices img');
var linkTheme = document.querySelector('link.theme');
console.log(imageDials);
console.log(imageDials[0].dataset.theme);
console.log(imageDials[1].dataset.theme);
console.log(imageDials[2].dataset.theme);

imageDials.forEach(function(item){

  item.addEventListener('click', function() {
    console.log('Looped Version, Hoss!');

    imageDials[0].classList.remove('chosen');
    imageDials[1].classList.remove('chosen');
    imageDials[2].classList.remove('chosen');

    item.classList.add('chosen');

    var whichTheme = item.dataset.theme;
    linkTheme.href = whichTheme;
  });

});

// imageDials[1].addEventListener('click', function() {
//   console.log('YEEHAW! I\'m green, partner!');
//
//   imageDials[0].classList.remove('chosen');
//   imageDials[1].classList.remove('chosen');
//   imageDials[2].classList.remove('chosen');
//
//   imageDials[1].classList.add('chosen');
//
//   var whichTheme = imageDials[1].dataset.theme;
//   linkTheme.href = whichTheme;
//   console.log(whichTheme);
// });
//
// imageDials[2].addEventListener('click', function() {
//   console.log('YEEHAW! I\'m blue, partner!');
//
//   imageDials[0].classList.remove('chosen');
//   imageDials[1].classList.remove('chosen');
//   imageDials[2].classList.remove('chosen');
//
//   imageDials[2].classList.add('chosen');
//
//   var whichTheme = imageDials[2].dataset.theme;
//   linkTheme.href = whichTheme;
// });
