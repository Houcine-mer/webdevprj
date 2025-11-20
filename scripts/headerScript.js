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
}