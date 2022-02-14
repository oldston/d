let clickThat = document.getElementById('menu');
let changeYourClass = document.getElementById('unorderLists');
clickThat.addEventListener('click',()=>{
    changeYourClass.classList.toggle('active')
})