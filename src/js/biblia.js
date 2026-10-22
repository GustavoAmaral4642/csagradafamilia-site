// URL da API com endpoint desejado
const API_URL = 'https://www.abibliadigital.com.br/api/verses/nvi/random';

// Consulta p?blica: credenciais privadas n?o devem ser inclu?das no navegador.
const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 horas

async function fetchRandomVerse() {
  const verseElement = document.getElementById('versiculo');

  if (!verseElement) return;

  let cachedVerse = null;
  let lastFetchedTime = 0;

  // Uma falha no armazenamento não deve impedir a consulta à API.
  try {
    cachedVerse = localStorage.getItem('cachedVerse');
    lastFetchedTime = Number(localStorage.getItem('lastFetchedTime'));
  } catch (error) {
    console.warn('Não foi possível acessar o cache:', error);
  }

  const cacheAge = Date.now() - lastFetchedTime;

  if (
    cachedVerse &&
    lastFetchedTime > 0 &&
    cacheAge >= 0 &&
    cacheAge < CACHE_DURATION
  ) {
    verseElement.textContent = cachedVerse;
    return;
  }

  // Mantém o último versículo visível durante a atualização.
  verseElement.textContent = cachedVerse || 'Carregando versículo...';

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: HTTP ${response.status}`);
    }

    const data = await response.json();

    if (
      !data?.book?.name ||
      !Number.isInteger(data.chapter) ||
      !Number.isInteger(data.number) ||
      typeof data.text !== 'string' ||
      !data.text.trim()
    ) {
      throw new Error('A API retornou um versículo em formato inesperado.');
    }

    const verseText =
      `${data.book.name} ${data.chapter}:${data.number} - ${data.text}`;

    verseElement.textContent = verseText;

    try {
      localStorage.setItem('cachedVerse', verseText);
      localStorage.setItem('lastFetchedTime', String(Date.now()));
    } catch (error) {
      console.warn('Não foi possível salvar o versículo no cache:', error);
    }
  } catch (error) {
    verseElement.textContent =
      cachedVerse || 'Não foi possível carregar o versículo agora.';

    console.error('Erro ao buscar o versículo:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fetchRandomVerse, {
    once: true,
  });
} else {
  fetchRandomVerse();
}