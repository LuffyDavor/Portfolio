const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .navbar .nav-list ul');
const header = document.querySelector('.header.container');
const effect = document.querySelectorAll('.header .nav-list ul li a');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})
effect.forEach(element => {
    element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobile_menu.classList.remove("active");
    });
});

document.addEventListener('scroll',()=>{
    var scrollPosition= window.scrollY;

    if(scrollPosition > 50){
        effect.forEach(element => {
            element.style.setProperty('--after-display', 'none');
          });
    }
    else{
        effect.forEach(element => {
            element.style.setProperty('--after-display', '');
          });
    }


    if(scrollPosition > 240){
        header.style.backgroundColor = "rgba(0, 0, 0)";
        
    }
    else{
        header.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    }
})
