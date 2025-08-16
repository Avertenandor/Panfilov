// Анимация счетчиков при прокрутке
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-count');
                const increment = target / speed;
                
                const updateCount = () => {
                    const count = +counter.innerText;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target.toLocaleString('ru-RU');
                    }
                };
                
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Плавная прокрутка
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Параллакс эффект для фона
function parallaxBackground() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body::before');
        const speed = 0.5;
        
        if (parallax) {
            document.body.style.setProperty('--parallax-y', `${scrolled * speed}px`);
        }
    });
}

// Анимация появления элементов при прокрутке
function animateOnScroll() {
    const elements = document.querySelectorAll('.scheme-card, .story-card, .protection-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// Функция для шаринга предупреждения
function shareWarning() {
    const text = '⚠️ ВНИМАНИЕ! Мошенническая схема: Сергей Панфилов (организатор) и Зарема (руководитель сетевых лидеров) работали вместе. Тысячи пострадавших!';
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'Предупреждение о мошенничестве',
            text: text,
            url: url
        }).catch(err => console.log('Ошибка при попытке поделиться:', err));
    } else {
        // Fallback - копирование в буфер обмена
        const textToCopy = `${text} ${url}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showNotification('Ссылка скопирована в буфер обмена!');
        }).catch(err => {
            console.error('Ошибка при копировании:', err);
        });
    }
}

// Показ уведомления
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification show';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Добавление CSS анимаций для уведомлений (теперь в CSS файле)
function addNotificationStyles() {
    // Стили теперь в CSS файле, эта функция оставлена для совместимости
    console.log('Notification styles loaded from CSS');
}

// Функция убрана - эффект печатающегося текста отключен

// Добавление эффекта глитча при наведении на опасные элементы
function addGlitchEffect() {
    const dangerElements = document.querySelectorAll('.danger-text, .loss-amount');
    
    dangerElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('glitch');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('glitch');
        });
    });
    
    // CSS для глитч эффекта теперь в основном CSS файле
    console.log('Glitch effect initialized');
}

// Плавная пульсация для предупреждающего баннера (без агрессивного мигания)
function warningBannerEffect() {
    const banner = document.querySelector('.warning-banner');
    if (!banner) return;
    
    // Добавляем CSS класс для плавной пульсации
    banner.classList.add('gentle-pulse');
}

// Инициализация всех эффектов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    smoothScroll();
    parallaxBackground();
    animateOnScroll();
    addNotificationStyles();

    addGlitchEffect();
    warningBannerEffect();
    
    // Добавление эффекта свечения при движении мыши
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
    });
});

// Защита от копирования (опционально)
document.addEventListener('contextmenu', (e) => {
    // Разрешаем копирование только для важной информации
    if (!e.target.closest('.protection-card, .btn, .main-footer')) {
        e.preventDefault();
        showNotification('Содержимое защищено от копирования');
        return false;
    }
});

// Консольное предупреждение
console.log('%c⚠️ ВНИМАНИЕ: МОШЕННИЧЕСКАЯ СХЕМА!', 'color: red; font-size: 30px; font-weight: bold;');
console.log('%cСергей Панфилов (организатор) и Зарема (руководитель сетевых лидеров)', 'color: yellow; font-size: 16px;');
console.log('%cПострадали? Присоединяйтесь к чату пострадавших!', 'color: white; font-size: 14px;');

// Функция для присоединения к чату
function joinChat() {
    // Открываем реальный Telegram чат пострадавших
    window.open('https://t.me/+BCX91JicBdMyYWU0', '_blank');
}

// Функция для присоединения к чату выплат
function joinPaymentsChat() {
    // Открываем Telegram чат выплат пострадавшим
    window.open('https://t.me/+oAHOynCQcNI1Nzky', '_blank');
}

// Функция для копирования ссылки на чат
function copyTelegramLink() {
    const link = 'https://t.me/+BCX91JicBdMyYWU0';
    navigator.clipboard.writeText(link).then(() => {
        showNotification('✅ Ссылка на Telegram чат скопирована!');
    }).catch(err => {
        console.error('Ошибка при копировании:', err);
    });
}

// Функции для модального окна МВД
function openMVDModal() {
    const modal = document.getElementById('mvdModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
    }
}

function closeMVDModal(event) {
    const modal = document.getElementById('mvdModal');
    if (modal && (event === undefined || event.target === modal || event.target.classList.contains('modal-close'))) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
    }
}

// Закрытие модального окна по нажатию ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMVDModal();
    }
});

// Улучшенная функция для анимации кнопок
function enhanceButtons() {
    const buttons = document.querySelectorAll('.telegram-btn, .telegram-btn-large, .mvd-btn');
    
    buttons.forEach(button => {
        // Добавляем эффект ripple при клике
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Используем CSS custom properties вместо inline стилей
            ripple.classList.add('ripple');
            ripple.style.setProperty('--ripple-size', size + 'px');
            ripple.style.setProperty('--ripple-x', x + 'px');
            ripple.style.setProperty('--ripple-y', y + 'px');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });
    
    console.log('Button enhancements applied');
}

// Функция для улучшения анимации счетчиков в модальном окне
function animateModalStats() {
    const modal = document.getElementById('mvdModal');
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' && modal.classList.contains('show')) {
                // Анимируем появление элементов модального окна
                const items = modal.querySelectorAll('.modal-info li');
                items.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        item.style.transition = 'all 0.3s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        });
    });
    
    if (modal) {
        observer.observe(modal, { attributes: true });
    }
}

// Универсальный обработчик событий без inline handlers
function setupEventHandlers() {
    // Обработка всех кнопок с data-action
    document.addEventListener('click', (e) => {
        const action = e.target.closest('[data-action]')?.getAttribute('data-action');
        
        switch(action) {
            case 'telegram-chat':
                e.preventDefault();
                openTelegramChat(e.target);
                break;
            case 'telegram-payments':
                e.preventDefault();
                joinPaymentsChat();
                break;
            case 'open-mvd-modal':
                e.preventDefault();
                openMVDModal();
                break;
            case 'close-modal':
                e.preventDefault();
                closeMVDModal();
                break;
            case 'close-modal-bg':
                if (e.target === e.currentTarget) {
                    closeMVDModal();
                }
                break;
            case 'stop-propagation':
                e.stopPropagation();
                break;
        }
    });
    
    // Закрытие модального окна по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMVDModal();
        }
    });
}

// Функция открытия Telegram чата с анимацией
function openTelegramChat(button) {
    // Добавляем loading эффект
    const icon = button.querySelector('.btn-icon');
    if (icon) {
        const originalIcon = icon.textContent;
        icon.textContent = '⏳';
        
        setTimeout(() => {
            icon.textContent = originalIcon;
        }, 1000);
    }
    
    // Открываем чат
    window.open('https://t.me/+BCX91JicBdMyYWU0', '_blank');
}

// Добавляем все в инициализацию
document.addEventListener('DOMContentLoaded', () => {
    // Сначала настраиваем обработчики событий
    setupEventHandlers();
    
    // Существующие функции...
    animateCounters();
    smoothScroll();
    parallaxBackground();
    animateOnScroll();
    addNotificationStyles();

    addGlitchEffect();
    warningBannerEffect();
    
    // Новые функции
    enhanceButtons();
    animateModalStats();
    
    // Добавление эффекта свечения при движении мыши
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.documentElement.style.setProperty('--mouse-x', x);
        document.documentElement.style.setProperty('--mouse-y', y);
    });
});

// Экспорт функций для использования в HTML
window.shareWarning = shareWarning;
window.joinChat = joinChat;
window.copyTelegramLink = copyTelegramLink;
window.openMVDModal = openMVDModal;
window.closeMVDModal = closeMVDModal;