window.onload = function() {
// Verifica se a largura da tela é maior ou igual a 769px

  const mediaQuery = window.matchMedia('(min-width: 768px)');
// Seleciona a div com a classe 'header-box'
  const header = document.querySelector('header');
  const navBox = document.querySelector('.nav-box');
  const originalHeaderContent = header.innerHTML // conteudo original do cabeçalho

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
      header.innerHTML = newHeaderContent;
    }else{
      // Se a tela for menor que 768px, restaure o conteúdo original da header-box
      header.innerHTML = originalHeaderContent;
    }
  }

  // Executa a função handleMediaQuery  quando a pagina carregar
  
  handleMediaQuery(mediaQuery);
// Adiciona um ouvinte de mídia para lidar com as alterações na largura da tela
  mediaQuery.addListener(handleMediaQuery);
}