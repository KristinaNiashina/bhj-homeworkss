let subLink = Array.from(document.getElementsByClassName("menu__link"));


subLink.forEach(e => {
    e.onclick = (() => {
        // alert("asdsadas");
        if(e.closest('.menu__item').querySelector('.menu_sub')){
            const item = Array.from(e.parentElement.getElementsByClassName('menu_sub'));
            item.forEach(e => e.classList.toggle('menu_active'));
            return false;
        }
    })
});
    