window.onload = function() {
// Verifica se a largura da tela é maior ou igual a 769px

  const mediaQuery = window.matchMedia('(min-width: 768px)');
// Seleciona a div com a classe 'header-box'
  const headerBox = document.querySelector('.header-box');
  const navBox = document.querySelector('.nav-box');

// Função para lidar com as alterações na largura da tela

  function handleMediaQuery(e) {
    if (e.matches) {
      // Se a tela for maior ou igual a 768px, substitua a estrutura da header-box'
      const newHeaderContent = `<div class="new-header">
          <div class="logo-box">
            <img class="logo" src="../src/img/logotechnews.jpg">
            <h1>TECHNEWS</h1>
          </div>
          <div class="menu-box">
            <button onclick="abrirMenu()" id="btn-menu">
              <span class="linha"></span>
              <span class="linha"></span>
              <span class="linha"></span>
            </button>
          </div>
        
        <div class="nav-box">
          ${navBox.innerHTML}
        </div>
</div>`;
      headerBox.innerHTML = newHeaderContent;
    }
  }

  // Executa a função handleMediaQuery  quando a pagina carregar
  
  handleMediaQuery(mediaQuery);
// Adiciona um ouvinte de mídia para lidar com as alterações na largura da tela
  mediaQuery.addlistener(handleMediaQuery);
}