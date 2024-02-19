/* fullpage */
$('main').fullpage({
    scrollingSpeed:1500,
})

/* header */
const nav_a = document.querySelectorAll('nav a');

nav_a.forEach((link, index) => {
    link.addEventListener('click', () => {
        $.fn.fullpage.moveTo(index + 1);
    });
});

/* main */
gsap.to('.introduce h2',{
    scrollTirgger:'.main',
    opacity:1,
    duration:1,
    y:-20,
    delay:1,
})
gsap.to('.introduce .first',{
    scrollTirgger:'.main',
    opacity:1,
    duration:1,
    y:-20,
    delay:2,
})
gsap.to('.introduce .second',{
    scrollTirgger:'.main',
    opacity:1,
    duration:1,
    y:-20,
    delay:3,
})
gsap.to('.introduce .third',{
    scrollTirgger:'.main',
    opacity:1,
    duration:1,
    y:-20,
    delay:4,
})
// 마우스 버튼
const mouseBtn = document.querySelector('#mouse')

mouseBtn.addEventListener('click',()=>{
    $.fn.fullpage.moveTo(2)
})

/* skill */
let swiper = new Swiper('#swiper_skill',{
    autoplay:{delay:3000,},
    loop:true,
    slidesPerView:3,
    spaceBetween:40,
})

/* project */
const portfolio = document.querySelectorAll('.portfolio a')
const project = document.querySelector('.project')

portfolio[0].addEventListener('mouseenter',()=>{
    project.style.backgroundImage = 'url(../images/gymshark.avif)'
})
portfolio[1].addEventListener('mouseenter',()=>{
    project.style.backgroundImage = 'url(../images/wavve.avif)'
})
portfolio[2].addEventListener('mouseenter',()=>{
    project.style.backgroundImage = 'url(../images/none.avif)'
})
portfolio[3].addEventListener('mouseenter',()=>{
    project.style.backgroundImage = 'url(../images/none.avif)'
})