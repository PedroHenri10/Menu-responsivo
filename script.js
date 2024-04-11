function abrirMenu(){
  iconemenu();
  mostrarMenu();
}

function iconemenu(){
  const btn = document.getElementById('btn-menu')
  btn.classList.toggle('ativar')
}

function mostrarMenu(){
  if (menu.style.display == 'flex') {
    menu.style.display = 'none'
  }else{
   menu.style.display = 'flex'
  }
}