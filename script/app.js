const getBtnMenu = document.querySelector('.menu')
const getMenu = document.querySelector('.menu_show')

getBtnMenu.onclick = function() {
    getMenu.classList.toggle('show_menu')
    if (getMenu.classList.contains('show_menu')) {
        getBtnMenu.src = 'img/close.svg'  
    } 
    else {
        getBtnMenu.src = 'img/menu-symbol-of-three-parallel-lines-svgrepo-com.svg'
    }
}


// ----------------------------

const sections = document.querySelectorAll('.section_7_box_sec1, .section_7_box_sec2, .section_7_box_sec3');
const boxes = document.querySelectorAll('.show1, .show2, .show3');

sections.forEach((section, index) => {
    section.onclick = function() {
        boxes[index].classList.toggle('in');
    };
});
