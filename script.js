const navBars = document.querySelector('.nav-bars');
const navLinks =document.querySelector('.nav-links');
const navs = document.querySelectorAll('.nav-links ul li');


navBars.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-active');

    navBars.classList.toggle('toggle');

    navs.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `navSlide 0.6s ease forwards ${index / 6 + 0.4}s`;
        }
    })
})