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
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--gradient-danger);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Добавление CSS анимаций для уведомлений
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Эффект печатающегося текста для заголовка
function typewriterEffect() {
    const dangerText = document.querySelector('.danger-text');
    if (!dangerText) return;
    
    const text = dangerText.textContent;
    dangerText.textContent = '';
    dangerText.style.visibility = 'visible';
    
    let index = 0;
    const speed = 100;
    
    function type() {
        if (index < text.length) {
            dangerText.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 500);
}

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
    
    // Добавление CSS для глитч эффекта
    const style = document.createElement('style');
    style.textContent = `
        .glitch {
            position: relative;
            animation: glitch 0.3s infinite;
        }
        
        @keyframes glitch {
            0%, 100% {
                text-shadow: 
                    0.05em 0 0 rgba(255, 0, 0, 0.75),
                    -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
            }
            14% {
                text-shadow: 
                    0.05em 0 0 rgba(255, 0, 0, 0.75),
                    -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
            }
            15% {
                text-shadow: 
                    -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                    -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
            }
            49% {
                text-shadow: 
                    -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                    -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
            }
            50% {
                text-shadow: 
                    0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                    0.05em 0 0 rgba(0, 255, 0, 0.75),
                    0 -0.05em 0 rgba(0, 0, 255, 0.75);
            }
            99% {
                text-shadow: 
                    0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                    0.05em 0 0 rgba(0, 255, 0, 0.75),
                    0 -0.05em 0 rgba(0, 0, 255, 0.75);
            }
        }
    `;
    document.head.appendChild(style);
}

// Эффект мерцания для предупреждающего баннера
function warningBannerEffect() {
    const banner = document.querySelector('.warning-banner');
    if (!banner) return;
    
    let isVisible = true;
    setInterval(() => {
        if (Math.random() > 0.95) {
            banner.style.opacity = isVisible ? '0.3' : '1';
            setTimeout(() => {
                banner.style.opacity = '1';
            }, 100);
        }
    }, 3000);
}

// Инициализация всех эффектов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    smoothScroll();
    parallaxBackground();
    animateOnScroll();
    addNotificationStyles();
    typewriterEffect();
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
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Добавляем эффект loading при нажатии на Telegram кнопки
        if (button.classList.contains('telegram-btn') || button.classList.contains('telegram-btn-large')) {
            button.addEventListener('click', function() {
                const icon = this.querySelector('.btn-icon');
                const originalIcon = icon.textContent;
                icon.textContent = '⏳';
                
                setTimeout(() => {
                    icon.textContent = originalIcon;
                }, 1000);
            });
        }
    });
    
    // CSS для эффекта ripple
    const style = document.createElement('style');
    style.textContent = `
        .telegram-btn, .telegram-btn-large, .mvd-btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .btn-icon {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
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

// Добавляем все в инициализацию
document.addEventListener('DOMContentLoaded', () => {
    // Существующие функции...
    animateCounters();
    smoothScroll();
    parallaxBackground();
    animateOnScroll();
    addNotificationStyles();
    typewriterEffect();
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