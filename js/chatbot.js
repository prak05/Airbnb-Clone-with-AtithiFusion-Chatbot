// js/chatbot.js
const inputField = document.getElementById('chat-input');
const chatWindow = document.getElementById('chat-window');
const sendButton = document.getElementById('send-button');

const displayMessage = (msg, cls) => {
  const div = document.createElement('div');
  div.className = cls;
  div.textContent = msg;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
};

const fetchResponse = async (budget) => {
  // Placeholder logic; replace with real API call later
  return `For a budget of ₹${budget}, try “Economy Stay at Downtown Inn.”`;
};

const sendMessage = async () => {
  const budget = inputField.value.trim();
  if (!budget) return;
  displayMessage(budget, 'message user');
  inputField.value = '';
  try {
    const reply = await fetchResponse(budget);
    displayMessage(reply, 'message bot');
  } catch {
    displayMessage('Error fetching suggestions.', 'message bot');
  }
};

sendButton.addEventListener('click', sendMessage);
