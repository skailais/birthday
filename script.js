document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    const enterButton = document.getElementById('enterButton');

    enterButton.addEventListener('click', () => {
        // Добавляем класс 'hidden' для плавного исчезновения экрана
        introScreen.classList.add('hidden');

        // Показываем основной контент после задержки (ожидаем завершения анимации)
        setTimeout(() => {
            mainContent.style.display = 'block';
        }, 1000); // Время должно совпадать с длительностью перехода opacity в CSS (1s)
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let fireworksInterval;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Функция для создания фейерверков
    function createFireworks() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const numberOfFireworks = 2; // Количество фейерверков

        for (let i = 0; i < numberOfFireworks; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;

            for (let j = 0; j < 100; j++) {
                const angle = Math.random() * 2 * Math.PI; // Случайный угол
                const speed = Math.random() * 5; // Скорость частицы

                particles.push({
                    x: x,
                    y: y,
                    vx: Math.cos(angle) * speed,  // Движение по оси X с использованием угла
                    vy: Math.sin(angle) * speed,  // Движение по оси Y с использованием угла
                    color: colors[Math.floor(Math.random() * colors.length)],
                    alpha: 1,
                    size: Math.random() * 3 + 1
                });
            }
        }
    }

    // Функция для обновления фейерверков
    function updateFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.005;  // Замедляем уменьшение прозрачности
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
        });
        particles = particles.filter(p => p.alpha > 0);
        requestAnimationFrame(updateFireworks);
    }

    // Запуск фейерверков каждые 2 секунды
    function startFireworks() {
        fireworksInterval = setInterval(() => {
            createFireworks();
        }, 2000); // Каждые 2 секунды создается новая партия фейерверков
    }

    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Запуск фейерверков и их обновление
    startFireworks();
    updateFireworks();
});

    const enterButton = document.getElementById('enterButton');
    const backgroundMusic = document.getElementById('backgroundMusic');

    enterButton.addEventListener('click', () => {
            backgroundMusic.play();
    });