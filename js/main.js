let menuBtn = document.getElementById('hamburger-manu');
let navList = document.getElementById('nav-list');
let navIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', function() {
    if(navList.style.display == 'block') {
        navList.style.display = 'none';
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    } else {
        navList.style.display = 'block';
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
    }
    
})