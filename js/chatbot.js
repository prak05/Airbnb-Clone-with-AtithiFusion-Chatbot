// js/chatbot.js
const inputField = document.getElementById('chat-input');
const chatWindow = document.getElementById('chat-window');
const sendButton = document.getElementById('send-button');

const displayMessage = (text, sender) => {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
};

const fetchChatbotResponse = async (budget) => {
  // Replace with real API when available
  return `Based on your budget of ₹${budget}, try “Cozy Apartment @ $${budget}”`;
};

const sendMessage = async () => {
  const budget = inputField.value.trim();
  if (!budget) return;
  displayMessage(`₹${budget}`, 'user');
  inputField.value = '';
  try {
    const response = await fetchChatbotResponse(budget);
    displayMessage(response, 'bot');
  } catch {
    displayMessage('Sorry, an error occurred.', 'bot');
  }
};

sendButton.addEventListener('click', sendMessage);
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
