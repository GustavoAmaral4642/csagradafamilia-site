
let anoAtual = 2026;
let eventos = eventos2026; 

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

let mesAtual = new Date().getMonth();

function renderizarCalendario(mes) {
  const diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
  const primeiroDia = new Date(anoAtual, mes, 1).getDay();
  const totalDias = new Date(anoAtual, mes + 1, 0).getDate();
  const eventosDoMes = eventos[mes] || [];

  const hoje = new Date();
  const diaHoje = hoje.getDate();
  const mesHoje = hoje.getMonth();
  const anoHoje = hoje.getFullYear();

  document.getElementById("monthTitle").textContent = meses[mes];
  let html = `
    <div class="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-600 mb-2">
      ${diasSemana.map(d => `<div>${d}</div>`).join("")}
    </div>
    <div class="grid grid-cols-7 gap-2 text-center text-sm">
  `;

  for (let i = 0; i < primeiroDia; i++) {
    html += `<div></div>`;
  }

  for (let dia = 1; dia <= totalDias; dia++) {
    const evento = eventosDoMes.find(e => e.dia === dia);
    let classes = "";

    if (evento) {
      classes += "bg-rosa-300 text-white font-bold rounded ";
    }

    if (dia === diaHoje && mes === mesHoje && anoAtual === anoHoje) {
      classes += "bg-azul-700 text-white font-bold rounded ";
    }

    html += `<div class="${classes.trim()}">${dia}</div>`;
  }

  html += `</div><div class="mt-4 text-left text-sm text-gray-700">`;
  eventosDoMes.forEach(e => {
    const temAnexo = !!e.imagem;
    const estilo = temAnexo ? "cursor-pointer text-azul-700 underline hover:opacity-80" : "";

    html += `<p class="${estilo}" ${temAnexo ? `onclick="abrirImagemPopup('${e.imagem}')"` : ""}>
              <span class="font-bold">${e.dia}:</span> ${e.titulo}
            </p>`;
  });
  html += `</div>`;

  document.getElementById("calendar").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const imagem = document.getElementById("imagemPopup");
  const fecharBtn = document.getElementById("fecharPopup");
    
  const btn2025 = document.getElementById('year2025');
  const btn2026 = document.getElementById('year2026');

  btn2025.addEventListener('click', () => {
    anoAtual = 2025;
    eventos = eventos2025;
    btn2025.classList.add('bg-azul-700', 'text-white');
    btn2025.classList.remove('bg-white', 'text-azul-700');
    btn2026.classList.add('bg-white', 'text-azul-700');
    btn2026.classList.remove('bg-azul-700', 'text-white');
    renderizarCalendario(mesAtual);
  });

    btn2026.addEventListener('click', () => {
    anoAtual = 2026;
    eventos = eventos2026;
    btn2026.classList.add('bg-azul-700', 'text-white');
    btn2026.classList.remove('bg-white', 'text-azul-700');
    btn2025.classList.add('bg-white', 'text-azul-700');
    btn2025.classList.remove('bg-azul-700', 'text-white');
    renderizarCalendario(mesAtual);
  });

  function abrirImagemPopup(src) {
    imagem.src = src;
    popup.classList.remove("hidden");
    popup.classList.add("flex");
  }

  function fecharPopup() {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
    imagem.src = ""; // limpa a imagem
  }

  // Botão de fechar
  fecharBtn.addEventListener("click", fecharPopup);

  // Clique fora da imagem
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      fecharPopup();
    }
  });

  // Tecla Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fecharPopup();
    }
  });

  document.getElementById("prevMonth").addEventListener("click", () => {
    mesAtual = (mesAtual - 1 + 12) % 12;
    renderizarCalendario(mesAtual);
  });

  document.getElementById("nextMonth").addEventListener("click", () => {
    mesAtual = (mesAtual + 1) % 12;
    renderizarCalendario(mesAtual);
  });

  renderizarCalendario(mesAtual);
});

function abrirImagemPopup(src) {
  const popup = document.getElementById("popup");
  const imagem = document.getElementById("imagemPopup");
  imagem.src = src;
  popup.classList.remove("hidden");
  popup.classList.add("flex");
}

document.getElementById("popup").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
  document.getElementById("popup").classList.remove("flex");
});