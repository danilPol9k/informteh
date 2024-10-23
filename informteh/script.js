const menuToggle = document.querySelector('.menu-toggle')
const menuList = document.querySelector('.burger-wrapper')
let menuOpen = false;

menuList.style.transition = 'opacity 0.5s, transform 0.5s';

menuToggle.addEventListener('click', function () {
    const menuListStyle = getComputedStyle(menuList);
    const currentTransform = menuListStyle.transform;

    if (!menuOpen) {
        menuList.style.opacity = '1'
        menuList.style.display = 'block'
        menuList.style.transform = 'translateX(0)';
        menuToggle.style.backgroundImage = "url(/images/cross.png)"
        menuOpen = true;
    } else {
        menuList.style.opacity = '0'
        menuList.style.transform = currentTransform; 
        setTimeout(function() {
            menuList.style.display = 'none';
        }, 500);
        menuToggle.style.backgroundImage = "url(/images/burger.png)"
        menuOpen = false;
    }
})