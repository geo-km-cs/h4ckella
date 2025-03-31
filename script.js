const output = document.getElementById('output');
const input = document.getElementById('commandInput');
const typeSound = document.getElementById('typeSound');

input.focus();

const commands = {
  "start": "[INFO] Iniciando varredura de portas...",
  "nmap": "[INFO] Portas abertas encontradas: 22 (SSH), 80 (HTTP), 443 (HTTPS)",
  "ssh root@target.io": "[INFO] Conectando via SSH...\n[SUCCESS] Conexão estabelecida.",
  "hack --force": "[✔] Sistema invadido com sucesso. Dados extraídos...",
  "h4ckella --core": "[💜] Easter Egg desbloqueado: Bem-vindo ao núcleo da H4CKELL4!"
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    typeSound.play();
    setTimeout(() => {
      handleCommand(command);
      input.value = '';
    }, 100);
  }
});

function handleCommand(cmd) {
  if (commands[cmd]) {
    output.textContent += `\n> ${cmd}\n${commands[cmd]}\n`;
  } else {
    output.textContent += `\n> ${cmd}\n[!] Comando não reconhecido. Tente novamente.\n`;
  }
  output.scrollTop = output.scrollHeight;
}
