const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
  function toggleNav() {
    
    document.getElementById('headID').classList.add("h");
    document.body.classList.add("h");
    document.body.classList.add("nav");
    document.body.style.overflowY = "hidden";
    const nav = document.getElementById('nav');
    nav.classList.add('show');
    document.getElementById('footer').style.display='none';
    document.getElementById('openID').style.display='none';
    document.getElementById('closeID').style.display='flex';
    setTimeout(() => {
      menu1.classList.remove('first-hidden');
      menu1.classList.add('first-active');
    }, 300);

}

function switchMode() {
document.body.classList.toggle("dark");
  
}

function closeAll(){
    document.body.classList.remove("nav");
    document.getElementById('headID').classList.remove("h");
    document.body.classList.remove("h");
    const nav = document.getElementById('nav');
    document.getElementById('footer').style.display='flex';
    document.getElementById('openID').style.display='flex';
    document.getElementById('closeID').style.display='none';
    nav.classList.remove('show');
    if(menu2.classList.contains('second-active')){
      setTimeout(() => {
        menu2.classList.remove('second-active');
        menu2.classList.add('second-hidden');
      },300)
    }
    if(menu1.classList.contains('first-active')){
      setTimeout(() => {
      menu1.classList.remove('first-active');
      menu1.classList.add('first-hidden');
      },300)
    }
    if(menu3.classList.contains('third-active')){
      setTimeout(() => {
      menu3.classList.remove('third-active');
      menu3.classList.add('third-hidden');
      },300)
    }

  }


function showMenu2() {
  menu1.classList.remove('first-active');
  menu1.classList.add('first-hidden');
  setTimeout(() => {
    menu2.classList.remove('second-hidden');
    menu2.classList.add('second-active');
  }, 300);
    document.getElementById('turnBackID').style.display='flex';
    document.getElementById('closeID').style.display='none';
}

function turnBack(){
  if(menu2.classList.contains('second-active')){
    menu2.classList.remove('second-active');
    menu2.classList.add('second-hidden');
      setTimeout(() => {
    menu1.classList.remove('first-hidden');
    menu1.classList.add('first-active');
  }, 300);
    document.getElementById('turnBackID').style.display='none';
    document.getElementById('closeID').style.display='flex';
  }
  if(menu3.classList.contains('third-active')){
    
          menu3.classList.remove('third-active');
          menu3.classList.add('third-hidden');
          document.getElementById("moveID").classList.remove("visible");

      setTimeout(() => {
    menu2.classList.remove('second-hidden');
    menu2.classList.add('second-active');
  }, 300);

  }

}


function showMenu3(){
  menu2.classList.remove('second-active');
  menu2.classList.add('second-hidden');
  setTimeout(() => {
    menu3.classList.remove('third-hidden');
    menu3.classList.add('third-active');
  }, 300);
  document.getElementById("moveID").classList.add("visible");

}
function toggleModel() {
    document.getElementById('headID').classList.add("h");
    document.body.classList.add("h");
    document.body.classList.add("nav");
    document.body.style.overflowY = "hidden";
    const nav = document.getElementById('nav');
    nav.classList.add('show');
    document.getElementById('footer').style.display='none';
    document.getElementById('openID').style.display='none';
    document.getElementById('turnBackID').style.display='flex';
      setTimeout(() => {
    menu2.classList.remove('second-hidden');
    menu2.classList.add('second-active');
  }, 300);
}
