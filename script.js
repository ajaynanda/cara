const bar = document.getElementById('bar')
const nav=document.getElementById('navbar')
const close= document.getElementById('close')
const mainImg=document.getElementById('mainImg')
const subImg=document.getElementsByClassName('sm-img')
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
if(subImg){
    subImg[0].addEventListener('click',()=>{
        mainImg.src=subImg[0].src
    })
    subImg[1].addEventListener('click',()=>{
        mainImg.src=subImg[1].src
    })
    subImg[2].addEventListener('click',()=>{
        mainImg.src=subImg[2].src
    })
    subImg[3].addEventListener('click',()=>{
        mainImg.src=subImg[3].src
    })
}
