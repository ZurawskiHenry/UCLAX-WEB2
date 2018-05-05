var tabLinks = document.querySelectorAll('.tabbed .tabs a');
var theSections = document.querySelectorAll('.tabbed section');

// console.log(tabLinks);
// console.log(theSections);

// function declaration
function switchSection(whichSection) {
  // console.log(whichSection);
/*-------------------------------------
| Sections
-------------------------------------*/
  whichSection = whichSection - 1;

for(var i = 0; i < theSections.length; i++)  {
    theSections[i].style.display = 'none';
}

theSections[whichSection].style.display = 'block';
/*-------------------------------------
| tabLinks
-------------------------------------*/
  tabLinks.forEach(function(theLink){
    theLink.classList.remove('chosen');
  });

  tabLinks[whichSection].classList.add('chosen');

}
//Function call
switchSection(2);


tabLinks.forEach(function(currentLink){
  currentLink.addEventListener('click', function(){
    event.preventDefault();
    var theSection = this.dataset.section;
    switchSection(theSection);
  });
});
