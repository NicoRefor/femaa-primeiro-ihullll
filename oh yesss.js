window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3) {
            section.classList.add('active');
        }
    });
});

const bounceImages = document.querySelectorAll('.bounce-img');

window.addEventListener('scroll', () => {
    bounceImages.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            image.classList.add('bounce'); // Adiciona a classe de animação
        }
    });
});






// Selecionar todas as áreas de ação
const actionAreas = document.querySelectorAll('.action-area');

// Configurar Intersection Observer
const observerOptions = {
    root: null, // O viewport é o elemento raiz
    threshold: 0.1 // 10% visível
};

// Função de callback quando as seções entram em vista
const showActionArea = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe para mostrar
        }
    });
};

// Criar o observer
const observer = new IntersectionObserver(showActionArea, observerOptions);

// Observar cada área de ação
actionAreas.forEach(area => {
    observer.observe(area);
});

 
