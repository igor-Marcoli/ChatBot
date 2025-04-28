document.getElementById('startChatBtn').addEventListener('click', function() {
    document.getElementById('chatContainer').style.display = 'block'; 
    this.style.display = 'none'; 
  });
  
//Enviar
document.getElementById('sendBtn').addEventListener('click', function() {
    sendMessage();
});
  
//Enviar com enter
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
});
  
// Função para enviar mensagem
function sendMessage() {
    const inputField = document.getElementById('userInput');
    const message = inputField.value.trim(); 
    if (message === '') return; // se estiver vazio, não faz nada
  
    const chatBox = document.getElementById('chatMessages');
  

    chatBox.innerHTML += `<div class="userMessage"><b>Você:</b> ${message}</div>`;
  

    let botReply = getBotResponse(message);
    chatBox.innerHTML += `<div class="botMessage"><b>FURIA Bot:</b> ${botReply}</div>`;
  
    inputField.value = ''; // limpa o campo
    chatBox.scrollTop = chatBox.scrollHeight; // rola para o final
}
  
  // Função que decide a resposta do bot
function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
  
    if (userMessage.includes('próximo jogo')) {
      return "🔥 O próximo jogo da FURIA será no dia 28/04 às 18h contra Vitality!";
    } else if (userMessage.includes('jogadores') || userMessage.includes('elenco')) {
      return "🐺O elenco atual é: KSCERATO, yuurih, arT, chelo e FalleN!";
    } else if (userMessage.includes('curiosidade') || userMessage.includes('historia')) {
      return "O nome FURIA representa a garra e a agressividade do time! #RunFuria";
    } else if (userMessage.includes('rugido')) {
      return "ROOOOOAR! 🐾🔥";
    }else{
      return "Desculpe, não entendi! Tente perguntar sobre jogos, jogadores ou novidades"
    }
}
  