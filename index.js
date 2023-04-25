const btn1 = document.getElementById("share-btn");
const btn2 = document.getElementById("share-btn2");
const active = document.getElementById('active');

btn1.addEventListener('click', ()=>{
  active.classList.toggle('active-state')
})


btn2.addEventListener('click', ()=>{
  active.classList.toggle('active-state')
})
