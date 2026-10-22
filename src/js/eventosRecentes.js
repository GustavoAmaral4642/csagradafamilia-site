document.addEventListener("DOMContentLoaded", () => {
  const eventosTodos = [
    { dia: 2, mes: 9, titulo: "Planejamento Estratégico", imagem: "img/eventos/planejamento.jpg" },
    { dia: 7, mes: 9, titulo: "Dia das Crianças", imagem: "img/eventos/criancas.jpg" },
    { dia: 21, mes: 10, titulo: "Proclamação da República", imagem: "img/eventos/proclamacao.jpg" },
    { dia: 7, mes: 11, titulo: "Festa de Natal", imagem: "img/eventos/natal.jpg" },
    { dia: 31, mes: 11, titulo: "Ano Novo", imagem: "img/eventos/ano-novo.jpg" }
  ];

  const hoje = new Date();
  const agora = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());

  const proximos = eventosTodos
    .map(e => {
      const data = new Date(2025, e.mes, e.dia);
      return { ...e, data };
    })
    .filter(e => e.data >= agora)
    .sort((a, b) => a.data - b.data)
    .slice(0, 3);

  const container = document.getElementById("lista-eventos");
  if (!container) return;

  container.innerHTML = proximos.map(e => `
    <div class="bg-rosa-100 rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img src="${e.imagem}" alt="${e.titulo}" class="rounded-md mb-4 w-full h-48 object-cover">
      <h3 class="text-xl font-semibold text-azul-700 mb-2">${e.titulo}</h3>
      <p class="text-sm text-gray-700">Data: ${String(e.dia).padStart(2, '0')}/${String(e.mes + 1).padStart(2, '0')}/2025</p>
    </div>
  `).join("");
});
