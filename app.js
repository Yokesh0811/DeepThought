const ham=document.querySelector('.hamburger');
const leftnav=document.querySelector('.leftnav');
ham.addEventListener('click',()=>{
    leftnav.classList.toggle('open');
})