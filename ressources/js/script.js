const cheikh = document.querySelector('.cheikh');
const loginLink = document.querySelector('.compte-enregitrement');  
const registerLink = document.querySelector('.lien-enregitrement');  
const btnPopup = document.querySelector('.btnlogin-popup'); 
const fermetureIcone = document.querySelector('.fermeture-icone');


registerLink.addEventListener('click', ()=> {
    cheikh.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
   cheikh.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
    cheikh.classList.add('active-popup');
});

fermetureIcone.addEventListener('click', ()=> {
    cheikh.classList.remove('active-popup');
});  