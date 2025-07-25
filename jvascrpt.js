document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript file loaded and ready!');
});

const hotels = [
    { name: "Cozy Cottage", price: 120 },
    { name: "Modern Apartment", price: 150 },
    { name: "Beach House", price: 200 },
    { name: "Luxury Loft", price: 300 },
    { name: "Charming Chalet", price: 180 }
];

function handleChat() {
    const userInput = document.getElementById('userinput').value;
    const chatlog = document.getElementById('chatlog');

    if (userInput) {
        const budget = parseFloat(userInput);
        let response = '';

        if (isNaN(budget)) {
            response = 'Please enter a valid number for your budget.';
        } else {
            const affordableHotels = hotels.filter(hotel => hotel.price <= budget);

            if (affordableHotels.length > 0) {
                response = `Based on your budget, we suggest these hotels:\n${affordableHotels.map(hotel => `${hotel.name} - $${hotel.price}`).join('\n')}`;
            } else {
                response = 'Sorry, we do not have any hotels available within your budget.';
            }
        }

        chatlog.innerHTML += `<div><strong>You:</strong> $${userInput}</div>`;
        chatlog.innerHTML += `<div><strong>AtithiFusion:</strong> ${response}</div>`;
        document.getElementById('userinput').value = '';
        chatlog.scrollTop = chatlog.scrollHeight;  // Scroll to the bottom
    }
}

