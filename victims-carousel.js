// Данные пострадавших
const victimsData = [
    { username: 'yanagorr', name: 'Яна', status: 'Пострадала' },
    { username: 'Apv1612', name: 'Анна', status: 'Пострадала' },
    { username: 'Alla_2705', name: 'Алла', status: 'Пострадала' },
    { username: 'azmalceva19', name: 'Азиза', status: 'Пострадала' },
    { username: 'V0228', name: 'Виктория', status: 'Пострадала' },
    { username: 'richwoomen', name: 'Ричард', status: 'Пострадал' },
    { username: 'andra441', name: 'Андрей', status: 'Пострадал' },
    { username: 'kutalevaov', name: 'Ольга', status: 'Пострадала' },
    { username: 'mersik_619', name: 'Мерсик', status: 'Пострадал' },
    { username: 'Mariana0503', name: 'Марианна', status: 'Пострадала' },
    { username: 'lamourtm', name: 'Ламур', status: 'Пострадал' },
    { username: 'ilyaPIV85', name: 'Илья', status: 'Пострадал' },
    { username: 'Fiodor555', name: 'Федор', status: 'Пострадал' },
    { username: 'mimino224', name: 'Михаил', status: 'Пострадал' },
    { username: 'LeoKing555777555', name: 'Лео', status: 'Пострадал' },
    { username: 'AsDilEma', name: 'Асдилема', status: 'Пострадала' },
    { username: 'ma198aa', name: 'Мария', status: 'Пострадала' },
    { username: 'lumos_vip', name: 'Люмос', status: 'Пострадал' },
    { username: 'Viktoriay_victory0', name: 'Виктория', status: 'Пострадала' },
    { username: 'Pypc765', name: 'Павел', status: 'Пострадал' },
    { username: 'andreiakk', name: 'Андрей', status: 'Пострадал' },
    { username: 'Klimatika_68', name: 'Климатика', status: 'Пострадала' },
    { username: 'Biznes_vomen', name: 'Бизнес', status: 'Пострадал' },
    { username: 'GorillaTY', name: 'Горилла', status: 'Пострадал' },
    { username: 'MaGa5588', name: 'Мага', status: 'Пострадала' },
    { username: 'LaNina246', name: 'Ла Нина', status: 'Пострадала' },
    { username: 'JacKPWNZwork', name: 'Джек', status: 'Пострадал' },
    { username: 'olen4ik1', name: 'Олень', status: 'Пострадал' },
    { username: 'kretss', name: 'Крест', status: 'Пострадал' },
    { username: 'Ellaya_Kara', name: 'Элла', status: 'Пострадала' },
    { username: 'medperewod_strahowka_Korea_Ansan', name: 'Медперевод', status: 'Пострадал' },
    { username: 'Timka99267', name: 'Тимофей', status: 'Пострадал' },
    { username: 'aminhotep', name: 'Аминхотеп', status: 'Пострадал' },
    { username: 'Tanyuta28', name: 'Танюта', status: 'Пострадала' },
    { username: 'Ulugbek770323', name: 'Улугбек', status: 'Пострадал' },
    { username: 'bogdanusyu', name: 'Богдан', status: 'Пострадал' },
    { username: 'Abuska89', name: 'Абус', status: 'Пострадал' },
    { username: 'galka568', name: 'Галка', status: 'Пострадала' },
    { username: 'ETakhir79', name: 'Эмиль', status: 'Пострадал' },
    { username: 'myropol72', name: 'Мирополь', status: 'Пострадал' },
    { username: 'Tokmakova25', name: 'Токмакова', status: 'Пострадала' },
    { username: 'Tulskiy_Pavel', name: 'Павел', status: 'Пострадал' },
    { username: 'Archisin95', name: 'Арчисин', status: 'Пострадал' },
    { username: 'nznznnnzr', name: 'НЗ', status: 'Пострадал' },
    { username: 'dliten_ssss', name: 'Длитен', status: 'Пострадал' },
    { username: 'NurlaN_said', name: 'Нурлан', status: 'Пострадал' },
    { username: 'Bibi_Amankosovna', name: 'Биби', status: 'Пострадала' },
    { username: 'MarineAster', name: 'Марина', status: 'Пострадала' },
    { username: 'ZArukaZ', name: 'Зарука', status: 'Пострадала' },
    { username: 'NEVAZNO888', name: 'Неважно', status: 'Пострадал' },
    { username: 'Zembanzagura', name: 'Зембанзагура', status: 'Пострадал' },
    { username: 'Mandarinixxx13', name: 'Мандарин', status: 'Пострадала' },
    { username: 'TAHYAKYDRUAVCEVA', name: 'Татьяна', status: 'Пострадала' },
    { username: 'Sarafroz1984', name: 'Сарафроз', status: 'Пострадала' },
    { username: 'Jahan0208', name: 'Джахан', status: 'Пострадала' },
    { username: 'Mks_Nov', name: 'Макс', status: 'Пострадал' },
    { username: 'info3241', name: 'Инфо', status: 'Пострадал' },
    { username: 'Assy15', name: 'Асси', status: 'Пострадала' },
    { username: 'Alla6164', name: 'Алла', status: 'Пострадала' },
    { username: 'Angelka2222', name: 'Анжелка', status: 'Пострадала' },
    { username: 'Aigulkg', name: 'Айгуль', status: 'Пострадала' },
    { username: 'Biker1112', name: 'Байкер', status: 'Пострадал' },
    { username: 'OlgaLim71', name: 'Ольга', status: 'Пострадала' },
    { username: 'akmyradovsha', name: 'Акмыра', status: 'Пострадала' },
    { username: 'yuriduminika', name: 'Юридик', status: 'Пострадал' },
    { username: 'Mirut5676', name: 'Мирут', status: 'Пострадал' },
    { username: 'Marina_Rayl', name: 'Марина', status: 'Пострадала' },
    { username: 'Vobvato', name: 'Вобато', status: 'Пострадал' },
    { username: 'Dmitri113366', name: 'Дмитрий', status: 'Пострадал' },
    { username: 'li_zhva', name: 'Ли Жва', status: 'Пострадала' },
    { username: 'Jkkkk99', name: 'Джей', status: 'Пострадал' },
    { username: 'MountolivesF', name: 'Маунтоливз', status: 'Пострадал' },
    { username: 'aleksej67340', name: 'Алексей', status: 'Пострадал' },
    { username: 'mango01shine', name: 'Манго', status: 'Пострадал' },
    { username: 'wirtix1', name: 'Виртикс', status: 'Пострадал' },
    { username: 'lily_kos94', name: 'Лилия', status: 'Пострадала' },
    { username: 'mkaidashh', name: 'Мкайдаш', status: 'Пострадал' },
    { username: 'KopoArka', name: 'Копоарка', status: 'Пострадала' },
    { username: 'ADM3VORK', name: 'Админ', status: 'Пострадал' },
    { username: 'kaamy_3099', name: 'Каамы', status: 'Пострадал' },
    { username: 'Vladlen2025', name: 'Владлен', status: 'Пострадал' },
    { username: 'Jamila_8990', name: 'Джамиля', status: 'Пострадала' },
    { username: 'Fukusima01', name: 'Фукусима', status: 'Пострадала' },
    { username: 'DikoBaimbet', name: 'Дико', status: 'Пострадал' },
    { username: 'benigale', name: 'Бенигале', status: 'Пострадал' },
    { username: 'iren20087', name: 'Ирен', status: 'Пострадала' },
    { username: 'agafon_777', name: 'Агафон', status: 'Пострадал' },
    { username: 'simion5', name: 'Симон', status: 'Пострадал' },
    { username: 'eliz0106', name: 'Элиза', status: 'Пострадала' },
    { username: 'Viktoria_Matvijchuk', name: 'Виктория', status: 'Пострадала' },
    { username: 'Tatiana9866', name: 'Татьяна', status: 'Пострадала' },
    { username: 'Mich1564', name: 'Михаил', status: 'Пострадал' },
    { username: 'Medinka98', name: 'Мединка', status: 'Пострадала' },
    { username: 'mirasaf', name: 'Мирасаф', status: 'Пострадал' },
    { username: 'Ledings', name: 'Ледингс', status: 'Пострадал' },
    { username: 'Dianapka', name: 'Диана', status: 'Пострадала' },
    { username: 'starverify', name: 'Старверифи', status: 'Пострадал' },
    { username: 'atayev_70', name: 'Атаев', status: 'Пострадал' },
    { username: 'Kuznesovva', name: 'Кузнецова', status: 'Пострадала' },
    { username: 'mergen1990', name: 'Мерген', status: 'Пострадал' },
    { username: 'vik555555555555', name: 'Вик', status: 'Пострадал' },
    { username: 'vangaut70', name: 'Вангаут', status: 'Пострадал' },
    { username: 'elenasstar', name: 'Елена', status: 'Пострадала' },
    { username: 'Dora197828', name: 'Дора', status: 'Пострадала' },
    { username: 'cernysoval', name: 'Чернышов', status: 'Пострадал' },
    { username: 'emmahaifa', name: 'Эмма', status: 'Пострадала' },
    { username: 'ii1208', name: 'ИИ', status: 'Пострадал' },
    { username: 'Lisovik22', name: 'Лисовик', status: 'Пострадал' },
    { username: 'Kamila_Robi', name: 'Камила', status: 'Пострадала' },
    { username: 'tatjanakir', name: 'Татьяна', status: 'Пострадала' },
    { username: 'albina1315', name: 'Альбина', status: 'Пострадала' },
    { username: 'Tikhiy1987', name: 'Тихий', status: 'Пострадал' },
    { username: 'Valeriya_Andreevna98', name: 'Валерия', status: 'Пострадала' },
    { username: 'Oksanaksushaok', name: 'Оксана', status: 'Пострадала' },
    { username: 'snusmodelx', name: 'Снус', status: 'Пострадал' },
    { username: 'tantiarella95', name: 'Тантиарелла', status: 'Пострадала' },
    { username: 'Zhaina_9', name: 'Жайна', status: 'Пострадала' },
    { username: 'mukhtor2412', name: 'Мухтор', status: 'Пострадал' },
    { username: 'Reddowaone1', name: 'Реддоу', status: 'Пострадал' },
    { username: 'victordovbnya', name: 'Виктор', status: 'Пострадал' },
    { username: 'Ledi0521d', name: 'Леди', status: 'Пострадала' },
    { username: 'Eleke777', name: 'Элеке', status: 'Пострадал' },
    { username: 'Nataliia_Chepeniak', name: 'Наталия', status: 'Пострадала' },
    { username: 'glashulyaa', name: 'Глашуля', status: 'Пострадала' },
    { username: 'Irinagold99', name: 'Ирина', status: 'Пострадала' },
    { username: 'Azat210', name: 'Азат', status: 'Пострадал' },
    { username: 'Lesyaboss', name: 'Леся', status: 'Пострадала' },
    { username: 'Khabibaluyan', name: 'Хабиб', status: 'Пострадал' },
    { username: 'ELVIRA5230', name: 'Эльвира', status: 'Пострадала' },
    { username: 'Alicipo', name: 'Алисипо', status: 'Пострадала' },
    { username: 'nastjaww', name: 'Настя', status: 'Пострадала' },
    { username: 'VANIA74', name: 'Ваня', status: 'Пострадал' },
    { username: 'Ameil78', name: 'Амеил', status: 'Пострадал' },
    { username: 'Natalie_50Nae', name: 'Натали', status: 'Пострадала' },
    { username: 'bapio_43bqrdmfwaqz', name: 'Бапио', status: 'Пострадал' },
    { username: 'rka_431111', name: 'РКА', status: 'Пострадал' },
    { username: 'bur67340', name: 'Бур', status: 'Пострадал' },
    { username: 'Gorhsokkkk', name: 'Горхсок', status: 'Пострадал' },
    { username: 'Desigga', name: 'Дезигга', status: 'Пострадал' },
    { username: 'andeandre111', name: 'Андре', status: 'Пострадал' },
    { username: 'kns_start', name: 'КНС', status: 'Пострадал' },
    { username: 'dzharkynay1966', name: 'Джаркынай', status: 'Пострадала' },
    { username: 'Arthur_1717', name: 'Артур', status: 'Пострадал' },
    { username: 'ecom1x', name: 'Эком', status: 'Пострадал' },
    { username: 'jn_assist', name: 'Джейн', status: 'Пострадала' },
    { username: 'Laurica1904', name: 'Лаурика', status: 'Пострадала' },
    { username: 'Mitis_ka09', name: 'Митис', status: 'Пострадала' },
    { username: 'okki230', name: 'Окки', status: 'Пострадал' },
    { username: 'lovyznaky', name: 'Ловызнаки', status: 'Пострадал' },
    { username: 'Sergei_Zaskalkin', name: 'Сергей', status: 'Пострадал' },
    { username: 'Ulyana14365', name: 'Ульяна', status: 'Пострадала' },
    { username: 'batyr140187', name: 'Батыр', status: 'Пострадал' },
    { username: 'Mark_g17', name: 'Марк', status: 'Пострадал' },
    { username: 'ZytAlt25', name: 'Зит', status: 'Пострадал' },
    { username: 'Lylyk', name: 'Лылык', status: 'Пострадал' },
    { username: 'MomentoMore0702', name: 'Момент', status: 'Пострадал' }
];

// Настройки карусели
const VICTIMS_PER_PAGE = 10;
let currentPage = 0;
const totalPages = Math.ceil(victimsData.length / VICTIMS_PER_PAGE);

// Инициализация карусели
function initVictimsCarousel() {
    const victimsGrid = document.getElementById('victimsGrid');
    const currentPageEl = document.querySelector('.current-page');
    const totalPagesEl = document.querySelector('.total-pages');
    const mobileCurrentEl = document.querySelector('.mobile-current');
    const mobileTotalEl = document.querySelector('.mobile-total');
    
    // Обновляем индикаторы
    if (currentPageEl) currentPageEl.textContent = '1';
    if (totalPagesEl) totalPagesEl.textContent = totalPages.toString();
    if (mobileCurrentEl) mobileCurrentEl.textContent = '1';
    if (mobileTotalEl) mobileTotalEl.textContent = totalPages.toString();
    
    // Показываем первую страницу
    showVictimsPage(0);
    
    // Добавляем обработчики событий
    document.addEventListener('click', handleCarouselClick);
}

// Обработка кликов по кнопкам карусели
function handleCarouselClick(e) {
    const action = e.target.closest('[data-action]')?.getAttribute('data-action');
    
    switch(action) {
        case 'prev-victims':
            e.preventDefault();
            showPrevPage();
            break;
        case 'next-victims':
            e.preventDefault();
            showNextPage();
            break;
        case 'contact-victim':
            e.preventDefault();
            const username = e.target.closest('.victim-card')?.getAttribute('data-username');
            if (username) {
                window.open(`https://t.me/${username}`, '_blank');
            }
            break;
    }
}

// Показать предыдущую страницу
function showPrevPage() {
    if (currentPage > 0) {
        showVictimsPage(currentPage - 1);
    }
}

// Показать следующую страницу
function showNextPage() {
    if (currentPage < totalPages - 1) {
        showVictimsPage(currentPage + 1);
    }
}

// Показать конкретную страницу
function showVictimsPage(page) {
    currentPage = page;
    const victimsGrid = document.getElementById('victimsGrid');
    const currentPageEl = document.querySelector('.current-page');
    const mobileCurrentEl = document.querySelector('.mobile-current');
    
    // Обновляем индикаторы
    if (currentPageEl) currentPageEl.textContent = (page + 1).toString();
    if (mobileCurrentEl) mobileCurrentEl.textContent = (page + 1).toString();
    
    // Получаем данные для текущей страницы
    const startIndex = page * VICTIMS_PER_PAGE;
    const endIndex = Math.min(startIndex + VICTIMS_PER_PAGE, victimsData.length);
    const pageVictims = victimsData.slice(startIndex, endIndex);
    
    // Очищаем сетку
    victimsGrid.innerHTML = '';
    
    // Создаем карточки пострадавших
    pageVictims.forEach(victim => {
        const victimCard = createVictimCard(victim);
        victimsGrid.appendChild(victimCard);
    });
    
    // Обновляем состояние кнопок
    updateCarouselButtons();
}

// Создать карточку пострадавшего
function createVictimCard(victim) {
    const card = document.createElement('div');
    card.className = 'victim-card';
    card.setAttribute('data-username', victim.username);
    
    const firstLetter = victim.name.charAt(0).toUpperCase();
    
    card.innerHTML = `
        <div class="victim-avatar">${firstLetter}</div>
        <div class="victim-name">${victim.name}</div>
        <div class="victim-username">@${victim.username}</div>
        <div class="victim-status">${victim.status}</div>
        <button class="victim-contact" data-action="contact-victim">
            💬 Связаться в Telegram
        </button>
    `;
    
    return card;
}

// Обновить состояние кнопок карусели
function updateCarouselButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const mobilePrevBtn = document.querySelector('.mobile-btn[data-action="prev-victims"]');
    const mobileNextBtn = document.querySelector('.mobile-btn[data-action="next-victims"]');
    
    // Десктоп кнопки
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages - 1;
    
    // Мобильные кнопки
    if (mobilePrevBtn) mobilePrevBtn.disabled = currentPage === 0;
    if (mobileNextBtn) mobileNextBtn.disabled = currentPage === totalPages - 1;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initVictimsCarousel();
});

// Добавляем поддержку свайпов на мобильных устройствах
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Свайп влево - следующая страница
            showNextPage();
        } else {
            // Свайп вправо - предыдущая страница
            showPrevPage();
        }
    }
}