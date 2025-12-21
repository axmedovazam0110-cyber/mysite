document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    { id: 'home', title: 'Главная' },
    { id: 'nutrition', title: 'Питание' },
    { id: 'muscles', title: 'Мышцы' },
    { id: 'supplements', title: 'Добавки' },
    { id: 'training', title: 'Тренировки' },
    { id: 'purchase', title: 'Покупка' }
  ];

  const heroFeatures = [
    { title: '7 групп мышц', icon: 'check' },
    { title: 'Таблицы БЖУ', icon: 'check' },
    { title: 'Программы тренировок', icon: 'check' },
    { title: 'Спортивные добавки', icon: 'check' }
  ];

  const muscleGroups = [
    { title: 'Руки', subtitle: 'Бицепс и трицепс', description: 'Полный разбор анатомии, лучших упражнений и типичных ошибок при тренировке рук', icon: 'dumbbell' },
    { title: 'Плечи', subtitle: 'Дельтовидные мышцы', description: 'Передний, средний и задний пучки — как тренировать для максимальной ширины', icon: 'target' },
    { title: 'Грудь', subtitle: 'Грудные мышцы', description: 'Верх, середина и низ груди — упражнения для полного развития', icon: 'shield' },
    { title: 'Спина', subtitle: 'Широчайшие и трапеции', description: 'Как правильно тянуть спиной, а не руками — секрет роста широчайших', icon: 'box' },
    { title: 'Пресс', subtitle: 'Мышцы живота', description: 'Прямая мышца, косые мышцы и техника для видимых кубиков', icon: 'target' },
    { title: 'Ноги', subtitle: 'Квадрицепс и бицепс бедра', description: '50% мышечной массы — без них не станешь по-настоящему сильным', icon: 'dumbbell' }
  ];

  const nutritionData = [
    { title: 'Белки', subtitle: 'Строительный материал мышц', value: '1.8-2.2 г на 1 кг веса', sources: 'Курица, индейка, яйца, говядина, рыба, творог', icon: 'dumbbell' },
    { title: 'Углеводы', subtitle: 'Энергия и памп для тренировок', value: '3-5 г на 1 кг веса', sources: 'Рис, овсянка, гречка, картошка, паста', icon: 'wheat' },
    { title: 'Жиры', subtitle: 'Гормоны и анаболизм', value: '0.8-1 г на 1 кг веса', sources: 'Лосось, орехи, авокадо, оливковое масло', icon: 'droplet' }
  ];

  const supplementsData = [
    { title: 'Протеин', description: 'Быстро усваивается, идеален после тренировки', dosage: '1-2 порции в день', icon: 'test-tube' },
    { title: 'Креатин', description: 'Повышает силу и выносливость', dosage: '3-5 г в день', icon: 'zap' },
    { title: 'Гейнер', description: 'Для набора массы при быстром метаболизме', dosage: 'После тренировки', icon: 'flame' }
  ];

  const trainingPlans = [
    { title: 'Full Body', description: 'Вся мышечная система за тренировку', frequency: '3 раза в неделю', icon: 'heart-pulse' },
    { title: 'Верх/Низ', description: 'Отдельно тренируем верх и низ', frequency: '4 раза в неделю', icon: 'heart-pulse' },
    { title: 'Тяни/Толкай/Ноги', description: 'Разделение по типу движений', frequency: '3-6 раз в неделю', icon: 'heart-pulse' },
    { title: 'Сплит по мышцам', description: 'Каждая группа мышц в отдельный день', frequency: '5-6 раз в неделю', icon: 'heart-pulse' }
  ];

  const purchaseBenefits = [
    'Полный разбор 7 групп мышц',
    'Анатомия и физиология каждой мышцы',
    'Лучшие упражнения для каждой группы',
    'Типичные ошибки и как их избежать',
    'Полная таблица БЖУ на 50+ продуктов',
    'Расчет макронутриентов для набора массы',
    '4 типа тренировочных сплитов',
    'Гид по спортивным добавкам'
  ];

  const navLinks = document.getElementById('nav-links');
  const mobileNavLinks = document.getElementById('mobile-nav-links');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const navButtons = [];
  const mobileButtons = [];

  const baseNavClass = 'text-sm font-medium transition-colors';
  const mobileNavClass = 'text-sm font-medium py-2';

  const handleBuyClick = () => {
    alert('Кнопка "Купить сейчас" нажата! В реальном сайте здесь будет переход на страницу оплаты через ЮКасса.');
  };

  const setActiveSection = (sectionId) => {
    navButtons.forEach((btn) => {
      const isActive = btn.dataset.section === sectionId;
      btn.className = `${baseNavClass} ${isActive ? 'text-orange-500' : 'text-gray-300 hover:text-white'}`;
    });
    mobileButtons.forEach((btn) => {
      const isActive = btn.dataset.section === sectionId;
      btn.className = `${mobileNavClass} ${isActive ? 'text-orange-500' : 'text-gray-300'}`;
    });
  };

  const handleNavigation = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  };

  const createIcon = (name, className) => {
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', name);
    icon.className = className;
    return icon;
  };

  sections.forEach((section) => {
    const desktopBtn = document.createElement('button');
    desktopBtn.textContent = section.title;
    desktopBtn.dataset.section = section.id;
    desktopBtn.className = `${baseNavClass} text-gray-300 hover:text-white`;
    desktopBtn.addEventListener('click', () => handleNavigation(section.id));
    navLinks.appendChild(desktopBtn);
    navButtons.push(desktopBtn);

    const mobileBtn = document.createElement('button');
    mobileBtn.textContent = section.title;
    mobileBtn.dataset.section = section.id;
    mobileBtn.className = `${mobileNavClass} text-gray-300`;
    mobileBtn.addEventListener('click', () => handleNavigation(section.id));
    mobileNavLinks.appendChild(mobileBtn);
    mobileButtons.push(mobileBtn);
  });

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  document.querySelectorAll('[data-buy-button]').forEach((btn) => btn.addEventListener('click', handleBuyClick));

  const heroContainer = document.getElementById('hero-features');
  heroFeatures.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'bg-black/50 border border-orange-500/30 rounded-xl p-6 text-center transition-transform hover:scale-105';

    const iconHolder = document.createElement('div');
    iconHolder.className = 'text-orange-500 mb-3';
    iconHolder.appendChild(createIcon(item.icon, 'w-6 h-6'));
    card.appendChild(iconHolder);

    const title = document.createElement('div');
    title.className = 'font-medium';
    title.textContent = item.title;
    card.appendChild(title);

    heroContainer.appendChild(card);
  });

  const nutritionGrid = document.getElementById('nutrition-grid');
  nutritionData.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'bg-gray-900/50 border border-orange-500/20 rounded-xl p-6 text-center transition-all hover:border-orange-500/50 hover:shadow-lg';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'bg-black/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4';
    iconWrap.appendChild(createIcon(item.icon, 'w-10 h-10 text-orange-500'));
    card.appendChild(iconWrap);

    const title = document.createElement('h3');
    title.className = 'text-2xl font-bold mb-2';
    title.textContent = item.title;
    card.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.className = 'text-gray-400 mb-4';
    subtitle.textContent = item.subtitle;
    card.appendChild(subtitle);

    const valueBox = document.createElement('div');
    valueBox.className = 'bg-black/50 rounded-lg p-3 mb-4';
    const valueText = document.createElement('span');
    valueText.className = 'text-orange-500 font-semibold';
    valueText.textContent = item.value;
    valueBox.appendChild(valueText);
    card.appendChild(valueBox);

    const sources = document.createElement('p');
    sources.className = 'text-sm text-gray-500';
    sources.innerHTML = '<span class=\"font-semibold\">Источники:</span> ' + item.sources;
    card.appendChild(sources);

    nutritionGrid.appendChild(card);
  });

  const musclesGrid = document.getElementById('muscles-grid');
  muscleGroups.forEach((group) => {
    const card = document.createElement('div');
    card.className = 'bg-gray-900/50 border border-orange-500/20 rounded-xl p-6 transition-all hover:border-orange-500/50 hover:shadow-lg';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'bg-black/50 rounded-full w-16 h-16 flex items-center justify-center mb-4';
    iconWrap.appendChild(createIcon(group.icon, 'w-8 h-8 text-orange-500'));
    card.appendChild(iconWrap);

    const title = document.createElement('h3');
    title.className = 'text-xl font-bold mb-2';
    title.textContent = group.title;
    card.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.className = 'text-orange-500 mb-3';
    subtitle.textContent = group.subtitle;
    card.appendChild(subtitle);

    const desc = document.createElement('p');
    desc.className = 'text-gray-400 text-sm';
    desc.textContent = group.description;
    card.appendChild(desc);

    musclesGrid.appendChild(card);
  });

  const supplementsGrid = document.getElementById('supplements-grid');
  supplementsData.forEach((supplement) => {
    const card = document.createElement('div');
    card.className = 'bg-gray-900/50 border border-orange-500/20 rounded-xl p-6 text-center transition-all hover:border-orange-500/50 hover:shadow-lg';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'bg-black/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4';
    iconWrap.appendChild(createIcon(supplement.icon, 'w-10 h-10 text-orange-500'));
    card.appendChild(iconWrap);

    const title = document.createElement('h3');
    title.className = 'text-2xl font-bold mb-2';
    title.textContent = supplement.title;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'text-gray-400 mb-4';
    desc.textContent = supplement.description;
    card.appendChild(desc);

    const dosage = document.createElement('div');
    dosage.className = 'bg-black/50 rounded-lg p-3';
    const dosageText = document.createElement('span');
    dosageText.className = 'text-orange-500 font-semibold flex items-center justify-center';
    const checkIcon = createIcon('check', 'w-5 h-5 mr-2');
    dosageText.appendChild(checkIcon);
    dosageText.append(supplement.dosage);
    dosage.appendChild(dosageText);
    card.appendChild(dosage);

    supplementsGrid.appendChild(card);
  });

  const trainingGrid = document.getElementById('training-grid');
  trainingPlans.forEach((plan) => {
    const card = document.createElement('div');
    card.className = 'bg-gray-900/50 border border-orange-500/20 rounded-xl p-6 transition-all hover:border-orange-500/50 hover:shadow-lg';

    const titleRow = document.createElement('div');
    titleRow.className = 'flex items-center mb-4';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'bg-black/50 rounded-full w-12 h-12 flex items-center justify-center mr-4';
    iconWrap.appendChild(createIcon(plan.icon, 'w-8 h-8 text-orange-500'));
    titleRow.appendChild(iconWrap);

    const title = document.createElement('h3');
    title.className = 'text-xl font-bold';
    title.textContent = plan.title;
    titleRow.appendChild(title);

    card.appendChild(titleRow);

    const desc = document.createElement('p');
    desc.className = 'text-gray-400 mb-4';
    desc.textContent = plan.description;
    card.appendChild(desc);

    const frequency = document.createElement('div');
    frequency.className = 'flex items-center text-orange-500';
    const calendar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    calendar.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    calendar.setAttribute('class', 'h-5 w-5 mr-2');
    calendar.setAttribute('fill', 'none');
    calendar.setAttribute('viewBox', '0 0 24 24');
    calendar.setAttribute('stroke', 'currentColor');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('d', 'M8 7V3m8 4V3m-9 8h10M5 21h14');
    calendar.appendChild(path);
    frequency.appendChild(calendar);
    frequency.append(plan.frequency);
    card.appendChild(frequency);

    trainingGrid.appendChild(card);
  });

  const benefitsList = document.getElementById('benefits-list');
  purchaseBenefits.forEach((benefit) => {
    const item = document.createElement('li');
    item.className = 'flex items-start';
    const icon = createIcon('check', 'w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0');
    item.appendChild(icon);
    const text = document.createElement('span');
    text.textContent = benefit;
    item.appendChild(text);
    benefitsList.appendChild(item);
  });

  setActiveSection('home');

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
});
