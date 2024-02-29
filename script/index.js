/* fullpage */
$('main').fullpage({
    scrollingSpeed:1500,
    anchors: ['home', 'about', 'skill', 'project', 'contact'],
    menu: 'nav',
    navigation: true,
    slidesNavigation: true,
    afterLoad:function(anchor, index){
        if(anchor == 'about'){//앵커의 위치가 b와 같으면
            if (anchor == 'about') { // 앵커의 위치가 about일 때
                $('.about_wrap .photo').animate({
                    opacity: 1
                }, 1000);
                $('.about_wrap .info').delay(500).animate({
                    opacity: 1,
                    top:60,
                }, 1000);
                $('.about_wrap .career').delay(1000).animate({
                    opacity: 1,
                    top:60,
                }, 1000);
                $('.about_wrap .github').delay(1500).animate({
                    opacity: 1,
                    top:60,
                }, 1000);
            }
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
let swiper = new Swiper('#swiper_skill',{
    autoplay:{delay:1000,},
    loop:true,
    slidesPerView:4,
    spaceBetween:20,
    navigation:{
        nextEl:'#skill_prev',
        prevEl:'#skill_next'
    }
})

/* project */
const portfolio = document.querySelectorAll('.portfolio a')
const project = document.querySelector('.project')
const portfolio_popup_bg = document.querySelectorAll('.portfolio_popup_bg')
const closeBtn = document.querySelectorAll('#closeBtn')
const info = document.querySelectorAll('.portfolio .info')
const portfolio_h2 = document.querySelectorAll('.portfolio h2')

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
    info[i].style.opacity = '0'
    portfolio_popup_bg[i].style.opacity = '0'
    portfolio_popup_bg[i].style.display = 'none'
    t.addEventListener('mouseenter',()=>{
        portfolio_h2[i].style.transform = 'translateY(-20px)'
        info[i].classList.add('show')
        info[i].classList.remove('hide')
    })
    t.addEventListener('mouseleave',()=>{
        portfolio_h2[i].style.transform = 'translateY(0)'
        info[i].classList.add('hide')
        info[i].classList.remove('show')
    })
    t.addEventListener('click',()=>{
        portfolio_popup_bg[i].style.opacity = '1'
        portfolio_popup_bg[i].style.display = 'flex'
    })
    closeBtn[i].addEventListener('click', () => {
        portfolio_popup_bg[i].style.opacity = '0';
        setTimeout(() => {
            portfolio_popup_bg[i].style.display = 'none';
        }, 1000);
    });
})