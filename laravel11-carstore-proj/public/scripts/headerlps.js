function openNav() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.getElementById('headID').classList.add('h');        // your existing "h" class
  document.getElementById('openID').style.display = 'none';
  document.getElementById('closeID').style.display = 'flex';
  document.body.classList.add('sidebar-open');
  document.getElementById('headID').classList.add('sidebar-open');
}

function closeNav() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.getElementById('headID').classList.remove('h');
  document.getElementById('openID').style.display = 'flex';
  document.getElementById('closeID').style.display = 'none';
  document.body.classList.remove('sidebar-open');
  document.getElementById('headID').classList.remove('sidebar-open');
}

function switchMode() {
  document.body.classList.toggle("dark");

  const elements = ['.form-container', '.bottombar', '.copyright', '.termsandprivacy'];
  elements.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.classList.toggle("dark");
  });
}