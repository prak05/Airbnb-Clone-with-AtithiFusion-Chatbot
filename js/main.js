// js/main.js
import './chatbot.js';

const listings = [
  { title: 'Modern Studio', price: 80, img: 'https://via.placeholder.com/400x200' },
  { title: 'City Loft',    price: 120, img: 'https://via.placeholder.com/400x200' },
  { title: 'Beach House',  price: 200, img: 'https://via.placeholder.com/400x200' },
];

const container = document.getElementById('listings');
listings.forEach(({title, price, img}) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${img}" alt="${title}">
    <div class="card-info">
      <h3>${title}</h3>
      <p>₹${price} per night</p>
    </div>`;
  container.appendChild(card);
});
