let clickThat = document.getElementById('menu');
let changeYourClass = document.getElementById('unorderLists');
clickThat.addEventListener('click',()=>{
    changeYourClass.classList.toggle('active')
})
let locational = document.getElementById('location');
function one(){
    locational.innerHTML='Profile'
}
function two(){
    locational.innerHTML='works'
}
function three(){
    locational.innerHTML='experiance'
}
function four(){
    locational.innerHTML='talk'
}