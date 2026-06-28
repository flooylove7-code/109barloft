// ============================================================
// 109 Bar Loft — Full Menu Data
// tags: alcohol, spicy, veg, burger, hot, salad, soup, starter,
//       dessert, cocktail, tea_coffee, hookah, beer, wine, shot,
//       discount, kids, cut, snack, garnish, ice_cream, non_alc
// ============================================================

const MENU_DATA = [

  // ── БИЗНЕС-БУРГЕРЫ ──────────────────────────────────────
  {
    id: 'biz',
    title: 'Бизнес-бургеры',
    icon: 'ph ph-lightning',
    note: 'Подаются с картошкой и соусом на ваш выбор. Скидка 15% ежедневно с 12:00 до 17:00, кроме выходных и праздников.',
    alcohol: false,
    items: [
      { name: 'Бургер «Космос»', weight: '300гр', price: '440р', desc: 'Домашняя булочка, котлета из мраморной говядины, сливочный сыр, острый соус, маринованный красный лук, огурец, помидор, пекинская капуста, соус брусничный', tags: ['burger','discount','spicy'] },
      { name: 'Бургер «Чак Норрис»', weight: '320гр', price: '440р', desc: 'Домашняя булочка, котлета из свинины, помидор, сыр чеддер, острый огурец с луком, халапеньо, пекинская капуста, острый соус', tags: ['burger','discount','spicy'] },
      { name: 'Бургер «Гавайский»', weight: '320гр', price: '440р', desc: 'Домашняя булочка, филе куриной грудки в панировке, помидор, пряный ананас, красный лук, сыр чеддер, руккола, фирменный соус', tags: ['burger','discount'] },
    ],
    footer: 'Соусы к бизнес-бургеру: кетчуп · остро-сладкий из томатов · тартар · сметана · горчица'
  },

  // ── ГАМБУРГЕРЫ ─────────────────────────────────────────
  {
    id: 'burgers',
    title: 'Гамбургеры',
    icon: 'ph ph-hamburger',
    note: 'Подаются с соусом и картошкой на ваш выбор.',
    alcohol: false,
    items: [
      { name: 'Бургер «109»', weight: '400гр', price: '730р', desc: 'Домашняя булочка, две говяжьих котлеты, медовый бекон, сыр чеддер, фирменный соус', tags: ['burger'] },
      { name: 'Бургер «Космос»', weight: '300гр', price: '610р', desc: 'Домашняя булочка, котлета из мраморной говядины, сливочный сыр, острый соус, соус брусничный, маринованный красный лук, огурец, помидор, пекинская капуста', tags: ['burger','spicy'] },
      { name: 'Бургер «Чак Норрис»', weight: '320гр', price: '610р', desc: 'Домашняя булочка, котлета из свинины, помидор, сыр чеддер, острый огурец с луком, халапеньо, пекинская капуста, острый соус', tags: ['burger','spicy'] },
      { name: 'Бургер «Бони и Клайд v3.0»', weight: '450гр', price: '730р', desc: 'Домашняя булочка, две котлеты из свинины, помидор, фетакса, сыр чеддер, грибы шампиньоны, соленый огурец, луковые кольца, пекинская капуста, фирменный соус', tags: ['burger'] },
      { name: 'Бургер «Санчез»', weight: '310гр', price: '620р', desc: 'Домашняя булочка, котлета из свинины, бекон, сыр чеддер, красный лук, помидор, огурец, пекинская капуста, чипсы «начос», соус «барбекю»', tags: ['burger'] },
      { name: 'Бургер «Гавайский»', weight: '320гр', price: '610р', desc: 'Домашняя булочка, филе куриной грудки в панировке, помидор, пряный ананас, красный лук, сыр чеддер, руккола, фирменный соус', tags: ['burger'] },
      { name: 'Бургер «Фьюжн»', weight: '350гр', price: '650р', desc: 'Домашняя булочка, котлета из мраморной говядины, помидор, маринованные огурцы, карамелизированное яблоко, медовый бекон, сыр чеддер, айсберг, соус фьюжн', tags: ['burger'] },
      { name: 'Бургер «Рваная свинина»', weight: '330гр', price: '620р', desc: 'Домашняя булочка, котлета из рваной свинины, сыр моцарелла, маринованные огурцы, луковые кольца, салат коул слоу, соус барбекю', tags: ['burger'] },
    ],
    footer: 'Дополнительно: Котлета +170р · Халапеньо +70р · Перец чили +80р · Соус шрирача +60р'
  },

  // ── СТАРТЕРЫ ───────────────────────────────────────────
  {
    id: 'starters',
    title: 'Стартеры',
    icon: 'ph ph-fork-knife',
    alcohol: false,
    items: [
      { name: 'Брускетты с ростбифом', weight: '180гр', price: '480р', desc: '', tags: ['starter'] },
      { name: 'Брускетты с лососем', weight: '180гр', price: '490р', desc: '', tags: ['starter'] },
      { name: 'Тартар из говядины', weight: '200гр', price: '460р', desc: '', tags: ['starter'] },
      { name: 'Тартар из лосося с авокадо', weight: '200гр', price: '530р', desc: '', tags: ['starter'] },
    ]
  },

  // ── ГОРЯЧИЕ БЛЮДА ──────────────────────────────────────
  {
    id: 'hot',
    title: 'Горячие блюда',
    icon: 'ph ph-fire',
    alcohol: false,
    items: [
      { name: 'Говяжий стейк на гриле (стриплойн)', weight: '100гр', price: '850р', desc: 'С перечным соусом', tags: ['hot'] },
      { name: 'Свиной стейк в особом маринаде', weight: '290гр', price: '620р', desc: 'Подается с салатом из овощей', tags: ['hot'] },
      { name: 'Стейк лосося в соусе терияки', weight: '200гр', price: '980р', desc: 'С рукколой и апельсином', tags: ['hot'] },
      { name: 'Куриная грудка запеченная', weight: '300гр', price: '560р', desc: 'С пряными травами и сыром моцарелла', tags: ['hot'] },
      { name: 'Филе индейки со сливочным шпинатом', weight: '200гр', price: '550р', desc: '', tags: ['hot'] },
      { name: 'Дорадо под устричным соусом', weight: '300гр', price: '760р', desc: '', tags: ['hot'] },
      { name: 'Радужная форель на подушке из рататуя', weight: '300гр', price: '730р', desc: '', tags: ['hot'] },
      { name: 'Паста «Карбонара» с грибами', weight: '200гр', price: '540р', desc: '', tags: ['hot'] },
      { name: 'Паста с морепродуктами', weight: '250гр', price: '660р', desc: 'В сливочном соусе', tags: ['hot'] },
      { name: 'Паста фетучини', weight: '340гр', price: '570р', desc: 'С вялеными томатами, курицей и адыгейским сыром', tags: ['hot'] },
      { name: 'Паста фарфалле с лососем', weight: '200гр', price: '590р', desc: 'С лососем и сливочным шпинатом', tags: ['hot'] },
      { name: 'Паста джирандоле с рваной говядиной', weight: '200гр', price: '590р', desc: 'С вешенками и трюфельным маслом', tags: ['hot'] },
      { name: 'Бурито с курицей и овощами', weight: '400гр', price: '410р', desc: 'С жареными курицей и овощами', tags: ['hot'] },
      { name: 'Рамен с куриным бедром', weight: '490гр', price: '550р', desc: '', tags: ['hot'] },
      { name: 'Лапша с курицей кунг пао', weight: '320гр', price: '580р', desc: '', tags: ['hot','spicy'] },
      { name: 'Равиоли с креветкой и лососем', weight: '210гр', price: '450р', desc: '', tags: ['hot'] },
    ]
  },

  // ── САЛАТЫ ─────────────────────────────────────────────
  {
    id: 'salads',
    title: 'Салаты',
    icon: 'ph ph-leaf',
    alcohol: false,
    items: [
      { name: 'Греческий', weight: '250гр', price: '390р', desc: '', tags: ['salad','veg'] },
      { name: 'Цезарь с маринованной курицей', weight: '220гр', price: '440р', desc: 'Курица маринована в кефире', tags: ['salad'] },
      { name: 'Цезарь с лососем', weight: '220гр', price: '590р', desc: '', tags: ['salad'] },
      { name: 'С куриной грудкой и вялеными томатами', weight: '230гр', price: '510р', desc: '', tags: ['salad'] },
      { name: 'С лососем и манго', weight: '260гр', price: '610р', desc: 'Под орехово-пряной заправкой', tags: ['salad'] },
      { name: 'С маринованным лососем, сливочным сыром', weight: '340гр', price: '640р', desc: 'С авокадо и инжиром', tags: ['salad'] },
      { name: 'С уткой, сыром фета и вишней', weight: '200гр', price: '570р', desc: '', tags: ['salad'] },
      { name: 'С ростбифом и вялеными томатами', weight: '290гр', price: '610р', desc: 'С чесноком конфи', tags: ['salad'] },
      { name: 'С хрустящей индейкой и грейпфрутом', weight: '290гр', price: '540р', desc: 'С фундуком, под авторской заправкой', tags: ['salad'] },
    ]
  },

  // ── СУПЫ ───────────────────────────────────────────────
  {
    id: 'soups',
    title: 'Супы',
    icon: 'ph ph-bowl-food',
    alcohol: false,
    items: [
      { name: 'Грибной суп-пюре', weight: '250гр', price: '390р', desc: '', tags: ['soup','veg'] },
      { name: 'Сырный суп-пюре с копченостями', weight: '250гр', price: '400р', desc: 'С хрустящим луком', tags: ['soup'] },
      { name: 'Борщ с говядиной', weight: '400гр', price: '450р', desc: 'С бородинским хлебом и чесночным салом', tags: ['soup'] },
    ]
  },

  // ── ГАРНИРЫ ────────────────────────────────────────────
  {
    id: 'garnish',
    title: 'Гарниры',
    icon: 'ph ph-package',
    alcohol: false,
    items: [
      { name: 'Картофель фри / по-деревенски', weight: '150гр', price: '240р', desc: '', tags: ['garnish','veg'] },
      { name: 'Фасоль стручковая', weight: '150гр', price: '250р', desc: '', tags: ['garnish','veg'] },
      { name: 'Овощи гриль', weight: '150гр', price: '300р', desc: '', tags: ['garnish','veg'] },
    ]
  },

  // ── ДЕТСКОЕ МЕНЮ ───────────────────────────────────────
  {
    id: 'kids',
    title: 'Детское меню',
    icon: 'ph ph-baby',
    alcohol: false,
    items: [
      { name: 'Зайкин ужин', weight: '250гр', price: '410р', desc: 'Куриные наггетсы, картофель фри, кетчуп', tags: ['kids'] },
      { name: 'Попкорн из куриной грудки', weight: '250гр', price: '410р', desc: 'С картофелем фри и кетчупом', tags: ['kids'] },
    ]
  },

  // ── ЗАКУСКИ ────────────────────────────────────────────
  {
    id: 'snacks',
    title: 'Закуски',
    icon: 'ph ph-bowl-steam',
    alcohol: false,
    items: [
      { name: 'Острые куриные крылья', weight: '200гр', price: '410р', desc: 'В азиатском стиле, соус на выбор', tags: ['snack','spicy'] },
      { name: 'Сырно-куриные наггетсы', weight: '250гр', price: '380р', desc: 'В панировке, соус на выбор', tags: ['snack'] },
      { name: 'Сырные шарики', weight: '200гр', price: '410р', desc: 'Соус на выбор', tags: ['snack','veg'] },
      { name: 'Гренки чесночные', weight: '150гр', price: '230р', desc: '', tags: ['snack','veg'] },
      { name: 'Закусочная тарелка', weight: '350гр', price: '670р', desc: 'Луковые кольца в панировке, кольца кальмара в кляре, соус на выбор', tags: ['snack'] },
      { name: 'Пивное плато №1', weight: '800гр', price: '1050р', desc: 'Сырные шарики, чесночные гренки, острые куриные крылышки, картофель фри, 2 соуса на выбор', tags: ['snack','spicy'] },
      { name: 'Пивное плато №2', weight: '800гр', price: '1050р', desc: 'Сырно-куриные наггетсы в панировке, чесночные гренки, острые крылышки, картофель по-деревенски, 2 соуса на выбор', tags: ['snack','spicy'] },
      { name: 'Мексиканские чипсы', weight: '100гр', price: '250р', desc: 'Соус на выбор', tags: ['snack','veg'] },
      { name: 'Луковые кольца в панировке', weight: '200гр', price: '310р', desc: 'Соус на выбор', tags: ['snack','veg'] },
      { name: 'Кольца кальмара в кляре', weight: '200гр', price: '460р', desc: 'Соус на выбор', tags: ['snack'] },
      { name: 'Куриные чипсы к пиву', weight: '40гр', price: '240р', desc: '', tags: ['snack'] },
    ],
    footer: 'Соусы: кетчуп · остро-сладкий из томатов · сырный · тартар · сметана · горчица — 50гр/80р'
  },

  // ── НАРЕЗКИ ────────────────────────────────────────────
  {
    id: 'cuts',
    title: 'Нарезки',
    icon: 'ph ph-knife',
    alcohol: false,
    items: [
      { name: 'Овощная нарезка', weight: '330гр', price: '380р', desc: 'Помидоры, огурцы, перец, маслины, оливки, красный лук, зелень', tags: ['cut','veg'] },
      { name: 'Тарелка копченостей', weight: '360гр', price: '690р', desc: 'Карпаччо, салями, балык, бекон, соленые огурцы, черри маринованные, горчица', tags: ['cut'] },
      { name: 'Сырное ассорти', weight: '330гр', price: '660р', desc: 'Маасдам, камамбер, чеддер, пармезан, с синей плесенью, орехи, виноград, крекеры, мёд', tags: ['cut','veg'] },
      { name: 'Разносол', weight: '320гр', price: '510р', desc: 'Черри, огурцы, морковь по-корейски, опята, чеснок, халапеньо, красный лук', tags: ['cut','veg','spicy'] },
      { name: 'Лимонная нарезка', weight: '100гр', price: '190р', desc: '', tags: ['cut','veg'] },
      { name: 'Фруктовая корзина', weight: '430гр', price: '540р', desc: '', tags: ['cut','veg'] },
      { name: 'Хлебная корзина', weight: '100гр', price: '180р', desc: '', tags: ['cut','veg'] },
    ]
  },

  // ── БАР · ВОДКА ────────────────────────────────────────
  {
    id: 'vodka',
    title: 'Водка',
    icon: 'ph ph-wine',
    alcohol: true,
    items: [
      { name: 'Зеленая марка кедровая', weight: '50мл', price: '140р', tags: ['alcohol'] },
      { name: 'Мягков серебряная', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Мягков клюква', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Стандарт', weight: '50мл', price: '200р', tags: ['alcohol'] },
      { name: 'Абсолют', weight: '50мл', price: '350р', tags: ['alcohol'] },
      { name: 'Белуга', weight: '50мл', price: '390р', tags: ['alcohol'] },
    ]
  },

  // ── БАР · КОНЬЯК ───────────────────────────────────────
  {
    id: 'cognac',
    title: 'Коньяк',
    icon: 'ph ph-wine',
    alcohol: true,
    items: [
      { name: 'Арарат 3 звезды', weight: '50мл', price: '340р', tags: ['alcohol'] },
      { name: 'Арарат 5 звезд', weight: '50мл', price: '380р', tags: ['alcohol'] },
    ]
  },

  // ── БАР · ВИСКИ ────────────────────────────────────────
  {
    id: 'whisky',
    title: 'Виски, бурбон',
    icon: 'ph ph-wine',
    alcohol: true,
    items: [
      { name: 'Бэллс', weight: '50мл', price: '320р', tags: ['alcohol'] },
      { name: 'Джим Бим', weight: '50мл', price: '420р', tags: ['alcohol'] },
      { name: 'Баллантайнс Файнест', weight: '50мл', price: '440р', tags: ['alcohol'] },
    ]
  },

  // ── БАР · ДЖИН / РОМ / ТЕКИЛА ──────────────────────────
  {
    id: 'spirits',
    title: 'Джин · Ром · Текила',
    icon: 'ph ph-wine',
    alcohol: true,
    items: [
      { name: 'Джин Лэйн', weight: '50мл', price: '260р', tags: ['alcohol'] },
      { name: 'ОЛД Монк белый', weight: '50мл', price: '420р', tags: ['alcohol'] },
      { name: 'ОЛД Монк черный', weight: '50мл', price: '460р', tags: ['alcohol'] },
      { name: 'Ольмека', weight: '50мл', price: '500р', tags: ['alcohol'] },
    ]
  },

  // ── ВЕРМУТ ─────────────────────────────────────────────
  {
    id: 'vermouth',
    title: 'Вермут',
    icon: 'ph ph-wine',
    alcohol: true,
    items: [
      { name: 'Мартини Розато', weight: '50мл', price: '280р', tags: ['alcohol'] },
      { name: 'Мартини Россо', weight: '50мл', price: '280р', tags: ['alcohol'] },
      { name: 'Мартини Бьянко', weight: '50мл', price: '280р', tags: ['alcohol'] },
    ]
  },

  // ── ЛИКЁРЫ / БИТТЕРЫ ───────────────────────────────────
  {
    id: 'liqueurs',
    title: 'Ликёры, биттеры',
    icon: 'ph ph-drop',
    alcohol: true,
    items: [
      { name: 'Апероль', weight: '50мл', price: '340р', tags: ['alcohol'] },
      { name: 'Амаретто', weight: '50мл', price: '240р', tags: ['alcohol'] },
      { name: 'Кокосовый', weight: '50мл', price: '310р', tags: ['alcohol'] },
      { name: 'Дынный', weight: '50мл', price: '410р', tags: ['alcohol'] },
      { name: 'Трипл Сек', weight: '50мл', price: '360р', tags: ['alcohol'] },
      { name: 'Кампари', weight: '50мл', price: '360р', tags: ['alcohol'] },
      { name: 'Кофейный', weight: '50мл', price: '410р', tags: ['alcohol'] },
      { name: 'Персиковый', weight: '50мл', price: '450р', tags: ['alcohol'] },
      { name: 'Бэйлис', weight: '50мл', price: '420р', tags: ['alcohol'] },
      { name: 'Егермейстер', weight: '50мл', price: '410р', tags: ['alcohol'] },
      { name: 'Абсент', weight: '50мл', price: '490р', tags: ['alcohol'] },
      { name: 'Самбука', weight: '50мл', price: '250р', tags: ['alcohol'] },
      { name: 'Блю кюрасао', weight: '50мл', price: '310р', tags: ['alcohol'] },
    ]
  },

  // ── НАСТОЙКИ СОБСТВЕННОГО ПРИГОТОВЛЕНИЯ ────────────────
  {
    id: 'tinctures',
    title: 'Настойки собственного приготовления',
    icon: 'ph ph-flask',
    alcohol: true,
    items: [
      { name: 'Настойка «Лимончелло»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Нутелла»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Вишня»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Клюква»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Малина»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Облепиха»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Черная смородина»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Брусника»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Сливочная коровка»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Кислые язычки»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Мятные леденцы»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: 'Настойка «Барбарис»', weight: '50мл', price: '170р', tags: ['alcohol'] },
      { name: '«Ягодный» дегустационный сет (6 видов)', weight: '6×50мл', price: '900р', desc: 'Вишня, клюква, малина, облепиха, черная смородина, брусника', tags: ['alcohol'], set: true },
      { name: '«Ностальгия» дегустационный сет (4 вида)', weight: '4×50мл', price: '600р', desc: 'Сливочная коровка, кислые язычки, мятные леденцы, барбарис', tags: ['alcohol'], set: true },
    ]
  },

  // ── АЛКОГОЛЬНЫЕ КОКТЕЙЛИ ───────────────────────────────
  {
    id: 'cocktails',
    title: 'Алкогольные коктейли',
    icon: 'ph ph-martini',
    alcohol: true,
    items: [
      { name: 'Апероль шприц', weight: '450мл', price: '580р', desc: 'Апероль, сухое игристое, содовая, апельсин, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Королева драмы', weight: '300мл', price: '470р', desc: 'Джин, водка, текила, ром белый, сироп блю кюрасао, спрайт, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Негрони', weight: '150мл', price: '480р', desc: 'Джин, кампари, мартини россо, цедра апельсина, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Май тай', weight: '400мл', price: '580р', desc: 'Ром, ликер трипл-сек, сиропы гренадин и миндальный, сок ананас, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Пина колада', weight: '400мл', price: '530р', desc: 'Ром, кокосовый ликер, сироп кокосовый, сок ананасовый, кокосовые сливки, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Сицилийская вишня', weight: '450мл', price: '470р', desc: 'Амаретто, сухое игристое, сок вишневый, сироп миндальный, содовая, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Коньяк с колой', weight: '200мл', price: '350р', desc: 'Коньяк, кола, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Виски с колой', weight: '200мл', price: '400р', desc: 'Виски, кола, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Егерьбёрн', weight: '400мл', price: '590р', desc: 'Егермейстер, энергетик, стручок чили, лёд', tags: ['alcohol','cocktail','spicy'] },
      { name: 'Лонг Айленд', weight: '450мл', price: '580р', desc: 'Джин, водка, ром, текила, ликер трипл-сек, сок лимона, кола, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Мохито', weight: '400мл', price: '480р', desc: 'Ром, содовая, лайм, мята, сок лимона, сахарный сироп, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Секс на пляже', weight: '400мл', price: '530р', desc: 'Водка, персиковый ликер, клюквенный морс, ананасовый сок, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Аллигатор на кислоте', weight: '300мл', price: '500р', desc: 'Егермейстер, кокосовый ликер, дынный ликер, ананасовый сок, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Темный апельсин', weight: '300мл', price: '530р', desc: 'Егермейстер, сок апельсин, сок лимона, сироп гренадин, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Лазурный шепот', weight: '300мл', price: '540р', desc: 'Белый ром, ликер малибу, сок ананас, сироп блю кюрасао, сок лимона, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Химера', weight: '400мл', price: '430р', desc: 'Текила, сок ананас, сироп смородина, сок лимона, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Айриш пай', weight: '400мл', price: '590р', desc: 'Бэйлис, сок вишневый, сироп ваниль, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Ягодный сауэр', weight: '300мл', price: '550р', desc: 'Три настойки (барбарис, вишня, малина), сок лимона, сахарный сироп, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Клевер клаб', weight: '400мл', price: '450р', desc: 'Джин, настойка малина, малиновый сироп, тоник, сок лимона, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Игристая ягода', weight: '450мл', price: '450р', desc: 'Пюре облепихи, сухое игристое, мёд, лёд', tags: ['alcohol','cocktail'] },
      { name: 'Космополитен', weight: '150мл', price: '390р', desc: 'Лимончелло, ликер трипл сек, пюре брусники, сок лимона, сахарный сироп', tags: ['alcohol','cocktail'] },
      { name: 'Дама в голубом', weight: '150мл', price: '350р', desc: 'Джин, ликер блю кюрасао, сок лимона, сахарный сироп', tags: ['alcohol','cocktail'] },
      { name: 'Жгучий ловелас', weight: '300мл', price: '410р', desc: 'Текила, сок грейпфрут, сок лимона, чили, мята, сироп корица, лёд', tags: ['alcohol','cocktail','spicy'] },
    ]
  },

  // ── ШОТЫ ───────────────────────────────────────────────
  {
    id: 'shots',
    title: 'Шоты',
    icon: 'ph ph-cup',
    alcohol: true,
    items: [
      { name: 'Б-52', weight: '60мл', price: '330р', desc: 'Ликер кофейный, ликер бейлис, ликер трипл сек', tags: ['alcohol','shot'] },
      { name: 'Таракан', weight: '60мл', price: '330р', desc: 'Самбука, абсент, ликер кофейный', tags: ['alcohol','shot'] },
      { name: 'Маршмеллоу', weight: '60мл', price: '330р', desc: 'Ягермайстер, сироп карамель, сливки', tags: ['alcohol','shot'] },
      { name: 'Облака', weight: '60мл', price: '330р', desc: 'Самбука, текила, абсент', tags: ['alcohol','shot'] },
      { name: 'Камикадзе', weight: '60мл', price: '330р', desc: 'Водка, ликер трипл сек, сок лайма', tags: ['alcohol','shot'] },
      { name: 'Пьяная дыня', weight: '60мл', price: '330р', desc: 'Самбука, ликер дынный, джин', tags: ['alcohol','shot'] },
      { name: 'Сет «Смешарики» (6 шотов)', weight: '6×60мл', price: '1500р', desc: 'Нюша, Крош, Ёжик, Би-би, Копатыч, Лосяш', tags: ['alcohol','shot'], set: true },
      { name: 'Нюша', weight: '60мл', price: '330р', desc: 'Текила, ликер кокосовый, кокосовые сливки, сироп клубника', tags: ['alcohol','shot'] },
      { name: 'Крош', weight: '60мл', price: '330р', desc: 'Ликер блю кюрасао, ликер персик, кокосовые сливки', tags: ['alcohol','shot'] },
      { name: 'Ёжик', weight: '60мл', price: '330р', desc: 'Бэйлис, ликер кокосовый, кокосовые сливки, сироп смородина', tags: ['alcohol','shot'] },
      { name: 'Би-би', weight: '60мл', price: '330р', desc: 'Ликер дынный, водка ваниль, сок лимона', tags: ['alcohol','shot'] },
      { name: 'Копатыч', weight: '60мл', price: '330р', desc: 'Водка груша, ликер смородина, сироп гренадин, сок лимона', tags: ['alcohol','shot'] },
      { name: 'Лосяш', weight: '60мл', price: '330р', desc: 'Егермейстер, сок грейпфрут, сироп гренадин', tags: ['alcohol','shot'] },
    ]
  },

  // ── ГЛИНТВЕЙНЫ / ГРОГИ ─────────────────────────────────
  {
    id: 'mulledwine',
    title: 'Глинтвейны, гроги (алкогольные)',
    icon: 'ph ph-fire-simple',
    alcohol: true,
    items: [
      { name: 'Глинтвейн с фруктами и мёдом', weight: '200мл', price: '420р', desc: 'Красное вино, яблоко, лимон, апельсин, мед, пряности', tags: ['alcohol'] },
      { name: 'Глинтвейн с облепихой и корицей', weight: '200мл', price: '420р', desc: 'Белое вино, пюре облепихи, мёд, корица', tags: ['alcohol'] },
      { name: 'Грог «Пьяная вишня»', weight: '1000мл', price: '740р', desc: 'Ромовая вишня, ягермайстер, пуэр вишня, корица, мёд, сок вишня, лимон', tags: ['alcohol'] },
      { name: 'Грог с апельсином и пряностями', weight: '1000мл', price: '740р', desc: 'Ром, чай черный, сок апельсин, сок грейпфрут, апельсин, лимон, мёд, корица, гвоздика', tags: ['alcohol'] },
      { name: 'Грог с яблоком и анисом', weight: '1000мл', price: '650р', desc: 'Самбука, чай черный, сок яблочный, яблоко, мёд, корица', tags: ['alcohol'] },
    ]
  },

  // ── ВИНА ───────────────────────────────────────────────
  {
    id: 'wine',
    title: 'Вина',
    icon: 'ph ph-wine',
    alcohol: true,
    items: [
      { name: 'Кастильо Де Чива Темпранильо', weight: '150мл / 750мл', price: '360р / 1750р', desc: 'Испания, красное полусладкое', tags: ['alcohol','wine'] },
      { name: 'Шевалье Дю Валь', weight: '750мл', price: '1750р', desc: 'Франция, красное сухое', tags: ['alcohol','wine'] },
      { name: 'Исаса Риоха', weight: '750мл', price: '2500р', desc: 'Испания, красное сухое', tags: ['alcohol','wine'] },
      { name: 'Казильеро Дель Дьябло Резерва', weight: '750мл', price: '2700р', desc: 'Каберне Совиньон, Чили, красное сухое', tags: ['alcohol','wine'] },
      { name: 'Кастильо Де Чива Макабео', weight: '150мл / 750мл', price: '360р / 1750р', desc: 'Испания, белое полусладкое', tags: ['alcohol','wine'] },
      { name: 'Альба Рьетта Макабео', weight: '150мл / 750мл', price: '360р / 1750р', desc: 'Испания, белое сухое', tags: ['alcohol','wine'] },
      { name: 'Вердека Рокка', weight: '750мл', price: '2500р', desc: 'Италия, белое сухое', tags: ['alcohol','wine'] },
      { name: 'Российское Шампанское', weight: '750мл', price: '730р', desc: 'Россия, белое полусладкое', tags: ['alcohol','wine'] },
      { name: 'Кава Нувиана', weight: '750мл', price: '2500р', desc: 'Испания, игристое белое полусладкое', tags: ['alcohol','wine'] },
      { name: 'Мартини Асти', weight: '750мл', price: '3300р', desc: 'Италия, игристое белое сладкое', tags: ['alcohol','wine'] },
      { name: 'Ганча Просекко', weight: '750мл', price: '3200р', desc: 'Италия, белое сухое', tags: ['alcohol','wine'] },
      { name: 'Ежевичное', weight: '750мл', price: '2100р', desc: 'Армения, плодовое', tags: ['alcohol','wine'] },
      { name: 'Гранатовое', weight: '750мл', price: '2100р', desc: 'Армения, плодовое', tags: ['alcohol','wine'] },
    ]
  },

  // ── КРАФТОВОЕ ПИВО ─────────────────────────────────────
  {
    id: 'beer',
    title: 'Крафтовое пиво',
    icon: 'ph ph-beer-bottle',
    alcohol: true,
    note: 'Ассортимент постоянно меняется! Наличие уточняйте у официантов!',
    items: [
      { name: '«ЛАГЕР» светлое (разливное)', weight: '0,3л / 0,5л', price: '180р / 250р', desc: '4,5% ABV', tags: ['alcohol','beer'] },
      { name: '«БЛАНШ» пшеничное (разливное)', weight: '0,3л / 0,5л', price: '180р / 250р', desc: '4,7% ABV', tags: ['alcohol','beer'] },
      { name: '«ПОРТЕР» темное (разливное)', weight: '0,3л / 0,5л', price: '200р / 280р', desc: '5,3% ABV', tags: ['alcohol','beer'] },
      { name: 'BAKALAR «Non-Alcoholic»', weight: '0,33л', price: '290р', desc: 'Безалкогольное, 0.5% ABV, 75 IBU, холодное охмеление', tags: ['beer'] },
      { name: 'Василеостровская «ЧЕХОВ»', weight: '0,75л', price: '490р', desc: 'Fruit Beer, 6.3% ABV, 16 IBU. Натуральный вишневый сок, ноты вишневых косточек', tags: ['alcohol','beer'] },
      { name: 'Василеостровская «ПУАРЕ»', weight: '0,75л', price: '490р', desc: 'Cider – Perry, 4.7% ABV. Ферментированный грушевый сок', tags: ['alcohol','beer'] },
      { name: 'Василеостровская «Тройной пшеничный эль»', weight: '0,75л', price: '490р', desc: 'Belgian Tripel, 6.9% ABV, 23 IBU. Апельсиновая цедра, кориандр, ягоды можжевельника', tags: ['alcohol','beer'] },
      { name: 'Василеостровская «Синяя борода»', weight: '0,75л', price: '490р', desc: 'Belgian Dubbel, 8% ABV, 24 IBU. Темный солод, ноты сухофруктов', tags: ['alcohol','beer'] },
      { name: 'Jaws «Oatmeal Stout»', weight: '0,5л', price: '380р', desc: 'Stout, 5.2% ABV, 23 IBU. Шоколад, кофе, мягкая бархатная консистенция', tags: ['alcohol','beer'] },
      { name: 'Konix «Crazy Moose»', weight: '0,5л', price: '350р', desc: 'Pale Ale, 5.5% ABV, 45 IBU. Цитрус, луговые цветы, нотки мяты', tags: ['alcohol','beer'] },
      { name: 'Konix «Chérie Cherry»', weight: '0,5л', price: '350р', desc: 'Fruit Beer, 5% ABV, 10 IBU. Натуральный вишневый сок', tags: ['alcohol','beer'] },
      { name: 'Konix «Ma Chere Framboise»', weight: '0,5л', price: '350р', desc: 'Fruit Beer, 5% ABV, 10 IBU. Натуральный малиновый сок', tags: ['alcohol','beer'] },
      { name: 'Konix «Mon Cher Cassis»', weight: '0,5л', price: '350р', desc: 'Fruit Beer, 5% ABV, 0 IBU. Черная смородина, солнечное настроение', tags: ['alcohol','beer'] },
      { name: 'Konix «Hefeweizen»', weight: '0,5л', price: '360р', desc: 'Hefeweizen, 4.8% ABV, 12 IBU. Банановые нотки, белый хлеб', tags: ['alcohol','beer'] },
      { name: 'Konix «OVERFALL»', weight: '0,5л', price: '350р', desc: 'American IPA, 6.5% ABV, 65 IBU. Цитрус, манго, хмель Cascade', tags: ['alcohol','beer'] },
      { name: 'Konix «МОЛОКО УБЕЖАЛО»', weight: '0,45л', price: '370р', desc: 'Milk stout, 5.0% ABV, 10 IBU. Сливочная сладость, шоколад, кофе', tags: ['alcohol','beer'] },
      { name: 'PARADOX «Fatum»', weight: '0,45л', price: '440р', desc: 'Double IPA, 8.2% ABV, 75 IBU. Columbus, Citra, Idaho', tags: ['alcohol','beer'] },
    ]
  },

  // ── КАЛЬЯНЫ ────────────────────────────────────────────
  {
    id: 'hookah',
    title: 'Кальяны',
    icon: 'ph ph-cloud-fog',
    alcohol: true,
    items: [
      { name: 'Табак Стандарт', weight: '—', price: '1100р', tags: ['alcohol','hookah'] },
      { name: 'Табак Классик', weight: '—', price: '1290р', tags: ['alcohol','hookah'] },
      { name: 'Табак Премиум', weight: '—', price: '1490р', tags: ['alcohol','hookah'] },
      { name: 'Наполнение: Молоко', weight: '—', price: '+150р', tags: ['hookah'] },
      { name: 'Наполнение: Сок (ананас / апельсин / яблоко)', weight: '—', price: '+170р', tags: ['hookah'] },
      { name: 'Наполнение: Самбука', weight: '—', price: '+240р', tags: ['alcohol','hookah'] },
      { name: 'Наполнение: Вино', weight: '—', price: '+280р', tags: ['alcohol','hookah'] },
      { name: 'Наполнение: Абсент', weight: '—', price: '+490р', tags: ['alcohol','hookah'] },
    ]
  },

  // ── ЧАЙ И КОФЕ ─────────────────────────────────────────
  {
    id: 'tea',
    title: 'Чай',
    icon: 'ph ph-coffee',
    alcohol: false,
    items: [
      { name: 'Английский классический', weight: '800мл / 1500мл', price: '300р / 430р', desc: 'Смесь крупнолистового индийского и цейлонского чая', tags: ['tea_coffee'] },
      { name: 'Брызги шампанского', weight: '800мл / 1500мл', price: '300р / 430р', desc: 'Черный и цейлонский чай, вкус сливок и шампанского', tags: ['tea_coffee'] },
      { name: 'Ночь Клеопатры (черный)', weight: '800мл / 1500мл', price: '300р / 430р', desc: 'Черный и зеленый чай, папайя, ананас, виноград, маракуйя, земляника', tags: ['tea_coffee'] },
      { name: 'Чай с чабрецом', weight: '800мл / 1500мл', price: '300р / 430р', desc: 'Черный крупнолистовой чай с чабрецом', tags: ['tea_coffee'] },
      { name: 'Сен-Ча', weight: '800мл / 1500мл', price: '300р / 430р', desc: 'Зеленый широколистный чай', tags: ['tea_coffee','veg'] },
      { name: 'Молочный улун', weight: '800мл / 1500мл', price: '430р / 540р', desc: 'Элитный китайский зеленый чай', tags: ['tea_coffee','veg'] },
      { name: 'Ночь Клеопатры (зеленый)', weight: '800мл / 1500мл', price: '300р / 430р', desc: 'Зеленый чай, ананас, папайя, виноград, маракуйя', tags: ['tea_coffee'] },
      { name: 'Вишневый Пу-Эр', weight: '800мл / 1500мл', price: '320р / 440р', desc: 'Черный китайский чай пу-эр с ягодами вишни', tags: ['tea_coffee'] },
      { name: 'Пу-Эр Туо-Ча', weight: '800мл / 1500мл', price: '320р / 440р', desc: 'Полуферментированный черный китайский чай', tags: ['tea_coffee'] },
      { name: 'Каркаде королевский', weight: '800мл / 1500мл', price: '300р / 430р', desc: 'Освежающий напиток красного цвета', tags: ['tea_coffee','veg'] },
      { name: 'Анчан', weight: '800мл / 1500мл', price: '370р / 490р', desc: 'Синий тайский чай', tags: ['tea_coffee','veg'] },
      { name: 'Ройбуш «Земляничный»', weight: '800мл / 1500мл', price: '300р / 430р', desc: 'Кустарниковое растение, цитрус, мальва, роза, клубника, персик, грейпфрут', tags: ['tea_coffee','veg'] },
      { name: 'Матча-Латте', weight: '150мл', price: '330р', desc: 'Зеленый японский чай матча, молоко', tags: ['tea_coffee'] },
    ]
  },
  {
    id: 'homemade_tea',
    title: 'Домашние чаи и напитки',
    icon: 'ph ph-tea-cup',
    alcohol: false,
    items: [
      { name: 'Таежный', weight: '1000мл', price: '580р', desc: 'Черный чай, сироп из сосновых шишек, малина, розмарин, апельсин, лимон, корица, гвоздика, бадьян, мёд', tags: ['tea_coffee'] },
      { name: 'Горячий цитрус', weight: '1000мл', price: '430р', desc: 'Каркаде, фреш грейпфрута, апельсина и лимона, мёд', tags: ['tea_coffee','veg'] },
      { name: 'Клубника, смородина, мята', weight: '1000мл', price: '430р', desc: 'Черный чай, смородина, мята, сироп клубники, мёд, лимон', tags: ['tea_coffee'] },
      { name: 'Тропический цветок', weight: '1000мл', price: '450р', desc: 'Чай анчан, ананасовое пюре, маракуйя, ананас, лайм, бадьян', tags: ['tea_coffee','veg'] },
      { name: 'Смородина-лайм', weight: '1000мл', price: '440р', desc: 'Черный чай, ягоды и сироп черной смородины, лайм, гвоздика, бадьян', tags: ['tea_coffee'] },
      { name: 'Бархатный персик', weight: '1000мл', price: '450р', desc: 'Черный чай, пюре персика, сиропы ваниль и лаванда, мята, сок лимона, мёд', tags: ['tea_coffee'] },
      { name: 'Манго-кокосовый риф', weight: '1000мл', price: '430р', desc: 'Черный чай, пюре манго, сироп кокос, сок манго, лайм', tags: ['tea_coffee'] },
      { name: 'Облепиховый', weight: '1000мл', price: '430р', desc: 'Пюре облепихи, мёд, шалфей, лимон, сироп маракуйя', tags: ['tea_coffee','veg'] },
      { name: 'Согревающий', weight: '1000мл', price: '430р', desc: 'Корень имбиря, фреш лимона и апельсина, мёд', tags: ['tea_coffee','veg'] },
      { name: 'Бруснично-малиновый', weight: '1000мл', price: '430р', desc: 'Пюре брусники, ягода малина, бадьян, розмарин, сироп малина, лимон, мёд', tags: ['tea_coffee','veg'] },
      { name: 'Глинтвейн безалкогольный с фруктами', weight: '200мл', price: '300р', desc: 'Вишневый сок, яблоко, лимон, апельсин, мед, пряности', tags: ['tea_coffee','veg'] },
      { name: 'Глинтвейн безалкогольный с облепихой', weight: '200мл', price: '300р', desc: 'Яблочный сок, пюре облепихи, мёд, корица', tags: ['tea_coffee','veg'] },
      { name: 'Айс-ти Мятный', weight: '400мл', price: '340р', desc: 'Чай сенча, лемонграсс, мята, лимон, мёд', tags: ['tea_coffee'] },
      { name: 'Айс-ти Гибискус', weight: '400мл', price: '340р', desc: 'Чай каркаде, лемонграсс, сироп лаванда', tags: ['tea_coffee','veg'] },
      { name: 'Айс-ти Тропический', weight: '400мл', price: '380р', desc: 'Чай анчан, пюре ананас, лайм', tags: ['tea_coffee','veg'] },
      { name: 'Айс-ти Имбирный', weight: '400мл', price: '340р', desc: 'Черный чай, пюре облепиховое, имбирный сок, мед', tags: ['tea_coffee'] },
    ]
  },
  {
    id: 'coffee',
    title: 'Кофе и какао',
    icon: 'ph ph-coffee',
    alcohol: false,
    items: [
      { name: 'Эспрессо', weight: '30мл', price: '120р', tags: ['tea_coffee'] },
      { name: 'Доппио', weight: '60мл', price: '140р', tags: ['tea_coffee'] },
      { name: 'Латте', weight: '200мл', price: '230р', tags: ['tea_coffee'] },
      { name: 'Латте XL', weight: '350мл', price: '260р', tags: ['tea_coffee'] },
      { name: 'Капучино', weight: '250мл', price: '180р', tags: ['tea_coffee'] },
      { name: 'Капучино XL', weight: '350мл', price: '220р', tags: ['tea_coffee'] },
      { name: 'Американо', weight: '150мл', price: '150р', tags: ['tea_coffee'] },
      { name: 'Глясе', weight: '200мл', price: '200р', desc: 'Эспрессо, ванильное мороженое, взбитые сливки', tags: ['tea_coffee'] },
      { name: 'Флэт уайт', weight: '200мл', price: '220р', desc: 'Двойной эспрессо, молоко', tags: ['tea_coffee'] },
      { name: 'Раф', weight: '300мл', price: '330р', desc: 'Двойной эспрессо, сливки', tags: ['tea_coffee'] },
      { name: 'Мокко', weight: '250мл', price: '340р', desc: 'Двойной эспрессо, шоколад, молоко, взбитые сливки', tags: ['tea_coffee'] },
      { name: 'Горячий шоколад', weight: '250мл', price: '270р', tags: ['tea_coffee'] },
      { name: 'Какао', weight: '250мл', price: '200р', tags: ['tea_coffee'] },
      { name: 'Фраппе', weight: '400мл', price: '360р', desc: 'Двойной эспрессо, молоко, взбитые сливки, лёд', tags: ['tea_coffee'] },
      { name: 'Айс-латте', weight: '400мл', price: '290р', desc: 'Двойной эспрессо, молоко, лёд', tags: ['tea_coffee'] },
      { name: 'Бамбл', weight: '400мл', price: '290р', desc: 'Двойной эспрессо, сок апельсин, сироп карамель, лёд', tags: ['tea_coffee'] },
      { name: 'Эспрессо тоник', weight: '400мл', price: '290р', desc: 'Двойной эспрессо, тоник, лёд', tags: ['tea_coffee'] },
      { name: 'Сироп в ассортименте', weight: '10мл', price: '20р', tags: ['tea_coffee','veg'] },
    ]
  },

  // ── БЕЗАЛКОГОЛЬНЫЕ КОКТЕЙЛИ ─────────────────────────────
  {
    id: 'non_alc_cocktails',
    title: 'Безалкогольные коктейли',
    icon: 'ph ph-martini',
    alcohol: false,
    items: [
      { name: 'Голубая лагуна', weight: '400мл', price: '320р', desc: 'Сироп блю кюрасао, сок ананасовый, сок лимона, спрайт, лёд', tags: ['cocktail','non_alc','veg'] },
      { name: 'Мохито безалкогольный', weight: '400мл', price: '330р', desc: 'Содовая, сахарный сироп, лимон, лайм, мята, лёд', tags: ['cocktail','non_alc','veg'] },
      { name: 'Пина колада безалкогольная', weight: '400мл', price: '330р', desc: 'Сок ананасовый, сироп кокосовый, сироп ванильный, кокосовые сливки, лёд', tags: ['cocktail','non_alc','veg'] },
      { name: 'Летний физз', weight: '400мл', price: '350р', desc: 'Ягоды смородины, персиковый сок, спрайт, мята, лёд', tags: ['cocktail','non_alc','veg'] },
      { name: 'Малиновый чилл', weight: '400мл', price: '350р', desc: 'Ягоды малины, сироп малины, газ.вода лимон-лайм, сок лимона, мята, лёд', tags: ['cocktail','non_alc','veg'] },
      { name: 'Клюквенный краш', weight: '400мл', price: '350р', desc: 'Ягода клюквы, морс клюквенный, апельсиновый сок, тоник, сок лимона, сахарный сироп, мята, лёд', tags: ['cocktail','non_alc','veg'] },
      { name: 'Солнечный удар', weight: '400мл', price: '350р', desc: 'Пюре ананаса, ананасовый и апельсиновый соки, содовая, тимьян, мед, лёд', tags: ['cocktail','non_alc','veg'] },
    ]
  },

  // ── СМУЗИ / МИЛКШЕЙКИ / ЛИМОНАДЫ ───────────────────────
  {
    id: 'smoothies',
    title: 'Смузи',
    icon: 'ph ph-tumbler',
    alcohol: false,
    items: [
      { name: 'Тик Так Бум', weight: '400мл', price: '350р', desc: 'Банан, сок ананас, сироп кокос, смородина', tags: ['non_alc','veg'] },
      { name: 'Вишнево-банановый', weight: '400мл', price: '360р', desc: 'Банан, вишня, сок ананас, сок манго', tags: ['non_alc','veg'] },
      { name: 'Пеликан', weight: '400мл', price: '350р', desc: 'Сок персиковый, сироп гренадин, банан', tags: ['non_alc','veg'] },
    ]
  },
  {
    id: 'milkshakes',
    title: 'Милкшейки',
    icon: 'ph ph-glass-water',
    alcohol: false,
    items: [
      { name: 'Ванильный', weight: '400мл', price: '330р', tags: ['non_alc'] },
      { name: 'Шоколадный', weight: '400мл', price: '330р', tags: ['non_alc'] },
      { name: 'Клубничный', weight: '400мл', price: '330р', tags: ['non_alc'] },
      { name: 'Банан-клубника', weight: '400мл', price: '370р', tags: ['non_alc'] },
      { name: 'Сникерс', weight: '400мл', price: '370р', desc: 'Ванильное мороженое, сироп карамельный, молоко, взбитые сливки, арахис', tags: ['non_alc'] },
      { name: 'Орео', weight: '400мл', price: '380р', desc: 'Шоколадное мороженое, топпинг карамель, орео, молоко, взбитые сливки', tags: ['non_alc'] },
      { name: 'Фисташковый рай', weight: '400мл', price: '370р', desc: 'Ванильное мороженое, фисташка и бобы тонка, молоко, взбитые сливки', tags: ['non_alc'] },
      { name: 'Имбирный пряник', weight: '400мл', price: '370р', desc: 'Ванильное мороженое, сироп печенье спекулос, молотая корица, молоко, молотый имбирь, взбитые сливки', tags: ['non_alc'] },
      { name: 'Черная смородина со сливками', weight: '400мл', price: '370р', desc: 'Ванильное мороженое, ягода и сироп черная смородина, молоко, взбитые сливки', tags: ['non_alc'] },
    ]
  },
  {
    id: 'lemonade',
    title: 'Лимонады',
    icon: 'ph ph-lemon',
    alcohol: false,
    items: [
      { name: 'Ананас-кокос', weight: '400мл / 1000мл', price: '340р / 560р', desc: 'Сиропы кокос и ананас, содовая, лимон, мята, лёд', tags: ['non_alc','veg'] },
      { name: 'Гранат-клубника-грейпфрут', weight: '400мл / 1000мл', price: '340р / 560р', desc: 'Сиропы гранат, клубника, грейпфрут, содовая, лимон, мята, лёд', tags: ['non_alc','veg'] },
      { name: 'Манго-маракуйя', weight: '400мл / 1000мл', price: '340р / 560р', desc: 'Сироп маракуйя, сок манго, содовая, апельсин, лимон, мята, лёд', tags: ['non_alc','veg'] },
      { name: 'Апельсин-клубника', weight: '400мл / 1000мл', price: '340р / 560р', desc: 'Сироп клубничный, содовая, апельсин, мята, лёд', tags: ['non_alc','veg'] },
      { name: 'Киви-лайм', weight: '400мл / 1000мл', price: '340р / 560р', desc: 'Сироп киви, содовая, лайм, мята, лёд', tags: ['non_alc','veg'] },
      { name: 'Лаванда-лесные ягоды', weight: '400мл / 1000мл', price: '340р / 560р', desc: 'Сироп лаванда, содовая, топпинг лесные ягоды, мята, лёд', tags: ['non_alc','veg'] },
    ]
  },
  {
    id: 'drinks',
    title: 'Безалкогольные напитки',
    icon: 'ph ph-drop-half',
    alcohol: false,
    items: [
      { name: 'Морс Клюквенный', weight: '200мл / 1000мл', price: '100р / 400р', tags: ['non_alc','veg'] },
      { name: 'Морс Смородиновый', weight: '200мл / 1000мл', price: '100р / 400р', tags: ['non_alc','veg'] },
      { name: 'Фреш Яблочный / Апельсиновый', weight: '200мл', price: '330р', tags: ['non_alc','veg'] },
      { name: 'Фреш Грейпфрутовый', weight: '200мл', price: '370р', tags: ['non_alc','veg'] },
      { name: 'Сок Добрый', weight: '200мл / 1000мл', price: '100р / 400р', desc: 'Апельсин, яблоко, томат, ананас, персик, манго', tags: ['non_alc','veg'] },
      { name: 'Сок Рич', weight: '200мл / 1000мл', price: '140р / 430р', desc: 'Вишня, грейпфрут', tags: ['non_alc','veg'] },
      { name: 'Вода БонАква газированная', weight: '500мл / 1000мл', price: '130р / 200р', tags: ['non_alc','veg'] },
      { name: 'Вода БонАква без газа', weight: '500мл / 1000мл', price: '100р / 130р', tags: ['non_alc','veg'] },
      { name: 'Добрый Кола / Лимон-лайм', weight: '330мл / 500мл / 1000мл', price: '150р / 180р / 240р', tags: ['non_alc','veg'] },
      { name: 'Добрый Кола без сахара', weight: '330мл / 500мл', price: '150р / 180р', tags: ['non_alc','veg'] },
      { name: 'Энергетический напиток Берн', weight: '449мл', price: '300р', tags: ['non_alc'] },
    ]
  },

  // ── МОРОЖЕНОЕ ──────────────────────────────────────────
  {
    id: 'ice_cream',
    title: 'Мороженое',
    icon: 'ph ph-ice-cream',
    alcohol: false,
    note: 'Топпинг на выбор: лесной орех, фисташка, кленовый сироп, клубника, вишня, лесные ягоды, голубое небо, шоколад, карамель.',
    items: [
      { name: 'Ванильное / шоколадное / клубничное', weight: '1 / 2 шарика', price: '130р / 180р', tags: ['ice_cream','veg'] },
      { name: 'Домашнее мороженое', weight: '1 / 2 шарика', price: '160р / 240р', desc: 'Чернослив, клюква, малина, вишня, персик-манго', tags: ['ice_cream','veg'] },
    ]
  },

  // ── ДЕСЕРТЫ ────────────────────────────────────────────
  {
    id: 'desserts',
    title: 'Десерты',
    icon: 'ph ph-cake',
    alcohol: false,
    note: 'Наличие десертов уточняйте у официантов!',
    items: [
      { name: 'Меренговый рулет', weight: '150гр', price: '310р', desc: 'В ассортименте', tags: ['dessert','veg'] },
      { name: 'Торт', weight: '200гр', price: '370р', desc: 'В ассортименте', tags: ['dessert','veg'] },
      { name: 'Штрудель «Вишнево-яблочный»', weight: '150гр', price: '360р', desc: 'С ванильным мороженым', tags: ['dessert','veg'] },
      { name: 'Чизкейк', weight: '100гр', price: '360р', desc: 'В ассортименте', tags: ['dessert','veg'] },
      { name: 'Киш с вишней', weight: '180гр', price: '290р', tags: ['dessert','veg'] },
      { name: 'Трайфл «Сникерс»', weight: '200гр', price: '360р', tags: ['dessert','veg'] },
      { name: 'Трайфл «Пьяная вишня»', weight: '180гр', price: '320р', tags: ['dessert','veg'] },
      { name: 'Трайфл «Красный бархат»', weight: '200гр', price: '360р', tags: ['dessert','veg'] },
      { name: 'Тирамису', weight: '220гр', price: '330р', tags: ['dessert','veg'] },
      { name: 'Пудинг на белом шоколаде', weight: '200гр', price: '310р', tags: ['dessert','veg'] },
      { name: 'Лимонный курд', weight: '180гр', price: '360р', tags: ['dessert','veg'] },
      { name: 'Пломбир с финиками и бананом', weight: '220гр', price: '300р', tags: ['dessert','veg'] },
    ]
  },

];
