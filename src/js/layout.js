// Edite o cabeçalho e o rodapé neste arquivo para atualizar todas as páginas.
(() => {
  const root = new URL('../', document.currentScript.src);
  const header = `<header class="container flex items-end justify-between gap-8 py-8">
    <div class="flex items-center gap-4">
      <a href="./index.html" class="max-w-250 max-h-250">
        <img src="./img/logo.png" alt="Home">
      </a>
      <!-- Social Icons -->
      <div class="flex space-x-4 mt-auto">
        <a href="https://www.instagram.com/co.sagradafamilia/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram text-rosa-700 text-3xl hover:text-rosa-900 transition"></i>
        </a>
        <a href="https://www.facebook.com/colegiosagradafamilialeme" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-facebook text-rosa-700 text-3xl hover:text-rosa-900 transition"></i>
        </a>
      </div>
    </div>
    <nav id="mobile-menu" class="lg:block hidden items-center z-40 max-lg:fixed max-lg:w-full max-lg:inset-0">
      <div class="fixed lg:hidden inset-0 data-overlay bg-rosa-700/40  backdrop-blur-md"></div>
      <ul class="text-cinza-700 max-lg:text-azul-700 max-lg:divide-y-2 max-lg:divide-azul-700/20 max-lg:z-50 max-lg:absolute max-lg:p-8 max-lg:w-full text-xl lg:flex lg:flex-wrap lg:gap-8">
        <li><a class="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-azul-200/10 lg:hover:underline lg:hover:underline-offset-8" href="./index.html">Home</a></li>
        <li class="relative group">
          <a class="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-azul-200/10 lg:hover:underline lg:hover:underline-offset-8 " href="#projetos">Projetos</a>
          <ul class="absolute hidden group-hover:block bg-cinzaClaro border border-cinza-200 shadow-xl mt-0 text-base rounded-lg z-50">
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/projetos/capoeira.html">Capoeira</a></li>
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/projetos/cooperativaMirim.html">Cooperativa Mirim</a></li>
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/projetos/comunidadeCuidadoEApoio.html">Comunidade Cuidado e Apoio</a></li>
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/projetos/handebol.html">Handebol</a></li>
          </ul>
        </li>
        <li><a class="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-azul-200/10 lg:hover:underline lg:hover:underline-offset-8" href="./redeDeEducacao.html">Rede de Educação</a></li>
        <li class="relative group">
          <a class="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-azul-200/10 lg:hover:underline lg:hover:underline-offset-8 " href="#secretaria">Secretaria</a>
          <ul class="absolute hidden group-hover:block bg-cinzaClaro border border-cinza-200 shadow-xl mt-0 text-base rounded-lg z-50">
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/secretaria/matricula.html">Matrícula</a></li>
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/secretaria/listaMaterial.html">Lista de Material</a></li>
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/secretaria/regimentoEscolar.html">Regimento Escolar</a></li>
          </ul>
        </li>
        <li class="relative group">
          <a class="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-azul-200/10 lg:hover:underline lg:hover:underline-offset-8 " href="#calendario">Calendário</a>
          <ul class="absolute hidden group-hover:block bg-cinzaClaro border border-cinza-200 shadow-xl mt-0 text-base rounded-lg z-50">
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/calendario/calendario.html">Calendário</a></li>
          </ul>
        </li>
        <li><a class="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-azul-200/10 lg:hover:underline lg:hover:underline-offset-8" href="./sobre.html">Sobre</a></li>
        <li class="relative group">
          <a class="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-azul-200/10 lg:hover:underline lg:hover:underline-offset-8 " href="#contatos">Contatos</a>
          <ul class="absolute hidden group-hover:block bg-cinzaClaro border border-cinza-200 shadow-xl mt-0 text-base rounded-lg z-50">
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/contatos/polo1.html">Polo 1</a></li>
            <li><a class="block px-4 py-2 hover:bg-gray-100 lg:hover:bg-cinza-300 lg:hover:rounded-lg whitespace-nowrap" href="./pages/contatos/polo2.html">Polo 2</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <button id="mobile-button" type="button" aria-controls="mobile-menu" aria-expanded="false" class="flex items-center gap-3 bg-cinza-700 text-cinza-200 py-2 px-4 rounded-md lg:hidden">
      Menu
      <span class="h-3 w-4 flex flex-col justify-between *:h-0.5 *:rounded-md *:bg-cinza-200">
        <span></span>
        <span></span>
        <span></span>
      </span>

    </button>
  </header>`;
  const footer = `<footer class="bg-azul-700 pt-8 pb-8 text-cinza-200">
    <div class="text-center">
      <div class="mb-4">
        <a href="https://www.instagram.com/co.sagradafamilia/" target="_blank" rel="noopener noreferrer">
          <i class="ml-2 mr-2 fa-brands fa-instagram text-rosa-700 text-5xl"></i>
        </a>
        <a href="https://www.facebook.com/colegiosagradafamilialeme" target="_blank" rel="noopener noreferrer">
          <i class="ml-2 mr-2 fa-brands fa-facebook text-rosa-700 text-5xl"></i>
        </a>
      </div>
      <p>© ${new Date().getFullYear()} Colégio Sagrada Família. Todos os direitos reservados.</p> <!-- Instagram -->

    </div>
  </footer>`;

  for (const [id, markup] of [['site-header', header], ['site-footer', footer]]) {
    const container = document.getElementById(id);
    if (!container) continue;
    container.innerHTML = markup;
    container.querySelectorAll('[href], [src]').forEach(element => {
      for (const attribute of ['href', 'src']) {
        const value = element.getAttribute(attribute);
        if (value?.startsWith('./')) element.setAttribute(attribute, new URL(value, root).href);
      }
    });
  }

  const button = document.getElementById('mobile-button');
  const menu = document.getElementById('mobile-menu');
  const setOpen = open => {
    menu.classList.toggle('hidden', !open);
    button.setAttribute('aria-expanded', String(open));
  };
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (link?.getAttribute('href').startsWith('#')) {
      event.preventDefault();
      const submenu = link.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle('hidden');
        submenu.classList.toggle('block');
      }
    } else if (link || event.target.classList.contains('data-overlay')) {
      setOpen(false);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { setOpen(false); button.focus(); }
  });
})();
