// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggle = document.querySelector('.nav-toggle');
const link = document.querySelector('.links');

toggle.addEventListener('click', function () {
    link.classList.toggle('show-links');
    // if (link.classList.contains('show-links')) {
    //     link.classList.remove('show-links');
    // } else {
    //     link.classList.add('show-links')
    // }
});
