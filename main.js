// ================
// the menu to toggle nav 
// =============================
let clickThat = document.getElementById('menu');
let changeYourClass = document.getElementById('unorderLists');
clickThat.addEventListener('click',()=>{
    changeYourClass.classList.toggle('active')
})


// ==========
// change the position Text
// ============================
let locational = document.getElementById('location');
let home = document.getElementsByClassName('home')[0];
let profile = document.getElementsByClassName('profile')[0];
let works = document.getElementsByClassName('works')[0];
let experiance = document.getElementsByClassName('experiance')[0];
let talk = document.getElementsByClassName('talk')[0];
function zero(){
    locational.innerHTML='HOME';
    profile.style.setProperty('display', 'none');
    works.style.setProperty('display', 'none');
    experiance.style.setProperty('display', 'none');
    talk.style.setProperty('display', 'none');
    home.style.setProperty('display', 'flex');
}
function one(){
    locational.innerHTML='Profile';
    profile.style.setProperty('display', 'flex');
   // profile.style.setProperty('background-image', 'url(bc.gif)');

    works.style.setProperty('display', 'none');
    experiance.style.setProperty('display', 'none');
    talk.style.setProperty('display', 'none');
    home.style.setProperty('display', 'none');
    
}
function two(){
    locational.innerHTML='works';
    profile.style.setProperty('display', 'none');
    works.style.setProperty('display', 'flex');
    experiance.style.setProperty('display', 'none');
    talk.style.setProperty('display', 'none');
    home.style.setProperty('display', 'none');

}
function three(){
    locational.innerHTML='experiance';
    profile.style.setProperty('display', 'none');
    works.style.setProperty('display', 'none');
    experiance.style.setProperty('display', 'flex');
    talk.style.setProperty('display', 'none');
    home.style.setProperty('display', 'none');

}   
function four(){
    locational.innerHTML='talk';
    profile.style.setProperty('display', 'none');
    works.style.setProperty('display', 'none');
    experiance.style.setProperty('display', 'none');
    talk.style.setProperty('display', 'flex');
    home.style.setProperty('display', 'none');

}



// ========================
// hide/show with nav
// ===============================

