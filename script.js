let score = 0;
let targetNumber = 1;

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Генерируем случайное число
    const bubbleNumber = Math.floor(Math.random() * 10) + 1;
    bubble.textContent = bubbleNumber;
    
    // Генерируем случайную позицию для пузыря
    bubble.style.top = Math.random() * 80 + "%";
    bubble.style.left = Math.random() * 80 + "%";
    
    // Добавляем слушатель на клик
    bubble.addEventListener('click', function() {
        if (parseInt(bubble.textContent) === targetNumber) {
            score += 10;
            targetNumber++;  // Увеличиваем целевое число
            document.getElementById('score').textContent = `Очки: ${score}`;
            bubble.remove();
        }
    });
    
    document.getElementById('game-area').appendChild(bubble);
}

function startGame() {
    // Создаём пузыри каждые 1000 мс
    setInterval(createBubble, 1000);
}

// Запускаем игру
startGame();
