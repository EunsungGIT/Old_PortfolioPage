/* fullpage */
$('main').fullpage({
    scrollingSpeed:1500,
    anchors: ['home', 'about', 'skill', 'project', 'contact'],
    menu: 'nav',
    navigation: true,
    slidesNavigation: true,
    afterLoad:function(anchor, index){
        if (anchor == 'about') {
            $('.about .planet').animate({
                opacity: 1,
                right:0,
            }, 3000);
            $('.about_wrap .photo').delay(500).animate({
                opacity: 1,
                top:20,
            }, 1000);
            $('.about_wrap .info').delay(1000).animate({
                opacity: 1,
                top:60,
            }, 1000);
            $('.about_wrap .career').delay(1500).animate({
                opacity: 1,
                top:60,
            }, 1000);
            $('.about_wrap .github').delay(2000).animate({
                opacity: 1,
                top:60,
            }, 1000);
        }
        if (anchor == 'skill') {
            $('.skill h2').animate({
                opacity: 1,
            }, 1000);
            $('.skill_wrap a').each(function(index) {
                $(this).delay(500 * index).animate({
                    opacity: 1,
                    top: 20,
                }, 1000);
            });
        }
        if (anchor == 'contact') {
            $('.contact .end').animate({
                opacity: 1,
            }, 1000);
            $('.contact #emailFrm').delay(500).animate({
                opacity: 1,
            }, 1000);
        }
    }
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
    scrollTrigger:'.main',
    opacity:1,
    duration:1,
    y:-20,
    delay:1,
})
gsap.to('.introduce .first',{
    scrollTrigger:'.main',
    opacity:1,
    duration:1,
    y:-20,
    delay:2,
})
gsap.to('.introduce .second',{
    scrollTrigger:'.main',
    opacity:1,
    duration:1,
    y:-20,
    delay:3,
})
gsap.to('.introduce .third',{
    scrollTrigger:'.main',
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
/* var swiper = new Swiper(".swiper_skill", {
    effect: "coverflow",
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
}); */

/* project */
const portfolio = document.querySelectorAll('.portfolio a')
const project = document.querySelector('.project')
const portfolio_popup_bg = document.querySelectorAll('.portfolio_popup_bg')
const closeBtn = document.querySelectorAll('#closeBtn')
const mockup = document.querySelectorAll('.portfolio .mockup')

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

portfolio.forEach((t,i)=>{
    mockup[i].style.opacity = '0'
    portfolio_popup_bg[i].style.opacity = '0'
    portfolio_popup_bg[i].style.display = 'none'
    t.addEventListener('mouseenter',()=>{
        mockup[i].classList.add('show')
        mockup[i].classList.remove('hide')
    })
    t.addEventListener('mouseleave',()=>{
        mockup[i].classList.add('hide')
        mockup[i].classList.remove('show')
    })
    t.addEventListener('click',()=>{
        portfolio_popup_bg[i].style.display = 'flex'
        setTimeout(() => {
            portfolio_popup_bg[i].style.opacity = '1';
        }, 100);
    })
    closeBtn[i].addEventListener('click', () => {
        portfolio_popup_bg[i].style.opacity = '0';
        setTimeout(() => {
            portfolio_popup_bg[i].style.display = 'none';
        }, 1000);
    });
})