const burger=document.querySelector('.burger');
const burger_span=document.querySelector('.burger span');
const menus=document.querySelector('.menus');


burger.addEventListener('click',function(){
    burger.classList.toggle('active');
    burger_span.classList.toggle('active');
    menus.classList.toggle('responsive');
});
