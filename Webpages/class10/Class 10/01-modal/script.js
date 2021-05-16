const toggle=document.getElementById('toggle')
const close= document.getElementById('close')
const open= document.getElementById('open')
const modal=document.getElementById('modal')
const navbar=document.getElementById('navbar')

//toggle navebar
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('show-nav');
    document.body.addEventListener('click',closeNavBar)

})
open.addEventListener('click',()=>{modal.classList.add('modal-container')})
close.addEventListener('click',()=>{modal.classList.remove('modal-container')})

window.addEventListener('click',e=>e.target==modal?modal.classList.remove('modal-container'):false)

