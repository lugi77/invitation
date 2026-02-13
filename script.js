function nextPage(pageNumber) {
    // Hide all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Show the next page
    const nextCard = document.getElementById(`page${pageNumber}`);
    if (nextCard) {
        nextCard.classList.add('active');
    }
}

function avoidMouse(event) {
    const button = event.target;
    const card = button.closest('.card');
    const cardRect = card.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    const padding = 30;
    const maxX = cardRect.width - buttonRect.width - (padding * 2);
    const maxY = cardRect.height - buttonRect.height - (padding * 2);
    
    const randomX = padding + Math.random() * maxX;
    const randomY = padding + Math.random() * maxY;
    
    button.style.position = 'fixed';
    button.style.left = randomX + cardRect.left + 'px';
    button.style.top = randomY + cardRect.top + 'px';
}

function celebrate() {
    // Hide all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Show celebration
    const celebration = document.getElementById('celebration');
    celebration.classList.add('active');
    
    // Add confetti effect (visual celebration)
    createConfetti();
}

function createConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const colors = ['#ff0000', '#ff69b4', '#ff1493', '#ffc0cb', '#ff6347'];

    const confettiInterval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(confettiInterval);
        }

        // Create confetti element
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);

        // Animate falling
        const fall = setInterval(function() {
            const top = parseInt(confetti.style.top);
            const opacity = parseFloat(confetti.style.opacity);
            
            if (top > window.innerHeight || opacity <= 0) {
                clearInterval(fall);
                confetti.remove();
            } else {
                confetti.style.top = (top + 5) + 'px';
                confetti.style.opacity = (opacity - 0.01).toString();
                confetti.style.left = (parseInt(confetti.style.left) + (Math.random() - 0.5) * 2) + 'px';
            }
        }, 20);
    }, 100);
}
