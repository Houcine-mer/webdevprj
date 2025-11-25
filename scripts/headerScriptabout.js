function toggleNav() {
  document.getElementById('headID').classList.add("h");
  document.getElementById('openID').style.display='none';
  document.getElementById('closeID').style.display='flex';
}

function closeAll(){
  document.getElementById('headID').classList.remove("h");
  document.getElementById('openID').style.display='flex';
  document.getElementById('closeID').style.display='none';
}

function switchMode() {
  document.body.classList.toggle("dark");
  
  const heading=document.querySelector('.heading');
  const heading2=document.querySelector('.heading2');
  const para=document.querySelector('.para');
  const para2=document.querySelector('.para2');
  const mid=document.querySelector('.mid');
  const formContainer = document.querySelector('.form-container');
  const bottombar=document.querySelector('.bottombar');
  const copyright=document.querySelector('.copyright');
  const termsandprivacy=document.querySelector('.termsandprivacy');


  if (heading) {
    heading.classList.toggle("dark");
  }
  if (heading2) {
    heading2.classList.toggle("dark");
  }
  if (para) {
    para.classList.toggle("dark");
  }
  if (para2) {
    para2.classList.toggle("dark");
  }
  if (mid) {
    mid.classList.toggle("dark");
  }

  if (formContainer) {
    formContainer.classList.toggle("dark");
  }
  if (bottombar) {
    bottombar.classList.toggle("dark");
  }
  if (copyright) {
    copyright.classList.toggle("dark");
  }
  if (termsandprivacy) {
    termsandprivacy.classList.toggle("dark");
  }
  
}