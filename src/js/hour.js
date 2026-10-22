window.onload = function () {
  const hora = document.getElementById('hora');
  const dia = document.getElementById('dia');

  function updateTime() {
    const date = new Date();

    // Update day
    dia.innerText = date
      .toLocaleDateString('pt-BR', {
        weekday: 'long',
      })
      .replace('-feira', '');

    // Update time
    hora.innerText = date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  // Run once to set initial value
  updateTime();

  // Update every second
  setInterval(updateTime, 1000);
};
