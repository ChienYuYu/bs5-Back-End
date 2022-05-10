const toggleMenuBtn = document.querySelector('#sideMenu-btn');
const body = document.querySelector('body');

toggleMenuBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  body.classList.toggle('sidebar-toggle');
})
