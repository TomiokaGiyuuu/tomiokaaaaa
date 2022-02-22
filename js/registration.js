document.getElementById('linkLogin').onclick = function(){
   document.getElementById('login').classList.remove('form--hidden');
   document.getElementById('createAccount').classList.add('form--hidden');
}
document.getElementById('LinkCreateAccount').onclick = function(){
  document.getElementById('login').classList.add('form--hidden');
  document.getElementById('createAccount').classList.remove('form--hidden');
}