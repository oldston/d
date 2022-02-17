// ================
// the menu to toggle nav 
// =============================
let clickThat = document.getElementById('menu');
let changeYourClass = document.getElementById('unorderLists');
clickThat.addEventListener('click',()=>{
    changeYourClass.classList.toggle('active')
})


// ==========
// change the position Text and toggle tabs
// ============================
let locational = document.getElementById('location');
let home = document.getElementsByClassName('home')[0];
let profile = document.getElementsByClassName('profile')[0];
let works = document.getElementsByClassName('works')[0];
let experiance = document.getElementsByClassName('experiance')[0];
let talk = document.getElementsByClassName('talk')[0];
function zero(){
    locational.innerHTML='প্রচ্ছদ';
    profile.style.setProperty('display', 'none');
    works.style.setProperty('display', 'none');
    experiance.style.setProperty('display', 'none');
    talk.style.setProperty('display', 'none');
    home.style.setProperty('display', 'flex');
}
function one(){
    locational.innerHTML='প্রশাসন';
    profile.style.setProperty('display', 'flex');
   // profile.style.setProperty('background-image', 'url(bc.gif)');

    works.style.setProperty('display', 'none');
    experiance.style.setProperty('display', 'none');
    talk.style.setProperty('display', 'none');
    home.style.setProperty('display', 'none');
    
}
function two(){
    locational.innerHTML='শিক্ষার্থিদের তথ্য';
    profile.style.setProperty('display', 'none');
    works.style.setProperty('display', 'flex');
    experiance.style.setProperty('display', 'none');
    talk.style.setProperty('display', 'none');
    home.style.setProperty('display', 'none');

}
function three(){
    locational.innerHTML='যোগাযোগ';
    profile.style.setProperty('display', 'none');
    works.style.setProperty('display', 'none');
    experiance.style.setProperty('display', 'flex');
    talk.style.setProperty('display', 'none');
    home.style.setProperty('display', 'none');

}   
function four(){
    locational.innerHTML='বিজ্ঞপ্তি';
    profile.style.setProperty('display', 'none');
    works.style.setProperty('display', 'none');
    experiance.style.setProperty('display', 'none');
    talk.style.setProperty('display', 'flex');
    home.style.setProperty('display', 'none');

}



// ========================
// span animation on click
// ===============================
let sp1 = document.getElementById('sp1');
let sp2 = document.getElementById('sp2');
let sp3 = document.getElementById('sp3');
clickThat.addEventListener('click',()=>{
    sp1.classList.toggle('active');
    sp2.classList.toggle('active');
    sp3.classList.toggle('active');

})
