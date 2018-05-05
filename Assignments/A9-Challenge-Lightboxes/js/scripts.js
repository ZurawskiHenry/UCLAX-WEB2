var imageDials = document.querySelectorAll('div.choices img');
var linkTheme = document.querySelector('link.theme');

console.log(linkTheme);
console.log(imageDials);
console.log(imageDials[0].dataset.theme);
console.log(imageDials[1].dataset.theme);
console.log(imageDials[2].dataset.theme);

imageDials[0].addEventListener('click', function() {
  console.log('YEEHAW! I\'m red, partner!');

  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');

  imageDials[0].classList.add('chosen');

  var whichTheme = imageDials[0].dataset.theme;
  linkTheme.href = whichTheme;
});

imageDials[1].addEventListener('click', function() {
  console.log('YEEHAW! I\'m green, partner!');

  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');

  imageDials[1].classList.add('chosen');

  var whichTheme = imageDials[1].dataset.theme;
  linkTheme.href = whichTheme;
  console.log(whichTheme);
});

imageDials[2].addEventListener('click', function() {
  console.log('YEEHAW! I\'m blue, partner!');

  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');

  imageDials[2].classList.add('chosen');

  var whichTheme = imageDials[2].dataset.theme;
  linkTheme.href = whichTheme;
});
