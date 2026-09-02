export type Lang = "ru" | "uz";

/**
 * Все тексты сайта. Чтобы поправить формулировку — меняйте здесь.
 * Ключи одинаковые для обоих языков, TypeScript проверит, что ничего не забыто.
 */
const ru = {
  // Навигация
  nav_home: "Главная",
  nav_catalog: "Каталог",
  nav_promos: "Акции",
  nav_about: "О магазине",
  nav_contacts: "Контакты",
  nav_cart: "Корзина",

  // Hero
  hero_kicker: "Бутик часов в Ташкенте · с 2024 года",
  hero_title: "Время — деньги.",
  hero_sub:
    "Часы, которые говорят за вас. Примерка в шоуруме, проверка при вас, подгонка браслета в подарок.",
  hero_cta: "Смотреть каталог",
  hero_cta2: "Написать в Telegram",
  hero_clock_caption: "Сейчас в Ташкенте",

  // Главная
  featured_title: "Выбор бутика",
  featured_all: "Весь каталог",
  why_title: "Почему VIPWATCHES_UZ",
  why1_t: "Примерка в шоуруме",
  why1_d:
    "Приезжайте, наденьте часы на руку и посмотрите вживую. Сервис в белых перчатках — без спешки.",
  why2_t: "Проверка при вас",
  why2_d:
    "Каждые часы проверяем вместе с вами перед покупкой: механизм, ход, комплект.",
  why3_t: "Доставка по Ташкенту",
  why3_d:
    "Привезём в день заказа. Оплата при получении — наличными или картой.",
  tg_band_title: "Новинки и цены — первыми в нашем Telegram-канале",
  tg_band_btn: "Подписаться",

  // Каталог
  catalog_title: "Каталог",
  search_ph: "Поиск по названию…",
  filter_all: "Все",
  filter_classic: "Классика",
  filter_sport: "Спорт",
  filter_casual: "Кэжуал",
  brand_all: "Все бренды",
  sort_label: "Сортировка",
  sort_pop: "По популярности",
  sort_asc: "Сначала дешевле",
  sort_desc: "Сначала дороже",
  nothing_found: "Ничего не нашлось. Попробуйте изменить фильтры.",
  add_cart: "В корзину",
  in_cart: "В корзине",
  badge_new: "Новинка",

  // Карточка товара
  back_catalog: "Назад в каталог",
  spec_brand: "Бренд",
  spec_category: "Категория",
  spec_mechanism: "Механизм",
  mech_quartz: "Кварцевый",
  mech_auto: "Автоматический",
  qty: "Количество",
  product_note:
    "Точная цена и наличие — уточняйте у менеджера: модели быстро разбирают.",

  // Акции
  promos_title: "Акции",
  promo_until: "Действует до",

  // О магазине
  about_title: "О магазине",
  about_lead:
    "VIPWATCHES_UZ — бутик часов в Ташкенте. Мы открылись в 2024 году с простой идеей: покупка часов должна быть событием, а не сделкой.",
  about_p1:
    "Основатель бутика — Азиз Тожимуродов. Начав с небольшой витрины, за год мы собрали аудиторию почти 300 тысяч подписчиков и открыли шоурум, куда приезжают со всего города.",
  about_p2:
    "В шоуруме — изумрудные витрины, белые перчатки и время на то, чтобы примерить, сравнить и выбрать без спешки. Каждые часы проверяем вместе с покупателем.",
  about_p3:
    "Наш принцип помещается в три слова на трёх языках: Vaqt pul. Time is money. Время — деньги.",
  stat_year: "год основания",
  stat_subs: "подписчиков в Instagram",
  stat_models: "моделей в наличии",

  // Контакты
  contacts_title: "Контакты",
  address_label: "Шоурум",
  address_value: "Ташкент — точный адрес уточняйте в Telegram",
  phone_label: "Телефон · PR и реклама",
  hours_label: "Часы работы",
  hours_value: "Ежедневно, 10:00 — 21:00",
  socials_label: "Мы в соцсетях",
  map_hint: "Как добраться — подскажем в Telegram",

  // Корзина и заявка
  cart_title: "Корзина",
  cart_empty: "В корзине пока пусто.",
  cart_go: "Перейти в каталог",
  remove: "Убрать",
  total: "Итого",
  checkout_title: "Оформление заявки",
  checkout_hint:
    "Оставьте контакты — менеджер напишет вам, подтвердит наличие и договорится о примерке или доставке.",
  f_name: "Как к вам обращаться",
  f_phone: "Телефон",
  f_comment: "Комментарий (необязательно)",
  f_delivery: "Как удобнее получить",
  d_pickup: "Приеду в шоурум",
  d_delivery: "Доставка по Ташкенту",
  submit: "Отправить заявку",
  success_title: "Заявка принята",
  success_text:
    "Мы свяжемся с вами в ближайшее время. Хотите быстрее — отправьте заявку нам в Telegram одной кнопкой:",
  send_tg: "Отправить в Telegram",
  order_more: "Вернуться на главную",

  // Футер
  footer_tag: "Vaqt pul · Time is money · Время — деньги",
  footer_rights: "Все права защищены",
} as const;

export type TKey = keyof typeof ru;

const uz: Record<TKey, string> = {
  nav_home: "Bosh sahifa",
  nav_catalog: "Katalog",
  nav_promos: "Aksiyalar",
  nav_about: "Do'kon haqida",
  nav_contacts: "Kontaktlar",
  nav_cart: "Savat",

  hero_kicker: "Toshkentdagi soatlar butigi · 2024-yildan beri",
  hero_title: "Vaqt — pul.",
  hero_sub:
    "Siz uchun gapiradigan soatlar. Shourumda kiyib ko'rish, ko'z oldingizda tekshirish, braslet moslash — sovg'a.",
  hero_cta: "Katalogni ko'rish",
  hero_cta2: "Telegramda yozish",
  hero_clock_caption: "Hozir Toshkentda",

  featured_title: "Butik tanlovi",
  featured_all: "Butun katalog",
  why_title: "Nega aynan VIPWATCHES_UZ",
  why1_t: "Shourumda kiyib ko'rish",
  why1_d:
    "Keling, soatni qo'lingizga taqib, jonli ko'ring. Oq qo'lqopli xizmat — shoshilmasdan.",
  why2_t: "Ko'z oldingizda tekshiruv",
  why2_d:
    "Har bir soatni xariddan oldin birga tekshiramiz: mexanizm, yurishi, to'plami.",
  why3_t: "Toshkent bo'ylab yetkazish",
  why3_d:
    "Buyurtma kunida yetkazamiz. To'lov — qabul qilganda, naqd yoki karta bilan.",
  tg_band_title: "Yangi modellar va narxlar — avval Telegram kanalimizda",
  tg_band_btn: "Obuna bo'lish",

  catalog_title: "Katalog",
  search_ph: "Nomi bo'yicha qidirish…",
  filter_all: "Hammasi",
  filter_classic: "Klassika",
  filter_sport: "Sport",
  filter_casual: "Kejual",
  brand_all: "Barcha brendlar",
  sort_label: "Saralash",
  sort_pop: "Ommabopligi bo'yicha",
  sort_asc: "Avval arzonroq",
  sort_desc: "Avval qimmatroq",
  nothing_found: "Hech narsa topilmadi. Filtrlarni o'zgartirib ko'ring.",
  add_cart: "Savatga",
  in_cart: "Savatda",
  badge_new: "Yangi",

  back_catalog: "Katalogga qaytish",
  spec_brand: "Brend",
  spec_category: "Kategoriya",
  spec_mechanism: "Mexanizm",
  mech_quartz: "Kvars",
  mech_auto: "Avtomatik",
  qty: "Miqdor",
  product_note:
    "Aniq narx va mavjudligini menejerdan so'rang: modellar tez sotilib ketadi.",

  promos_title: "Aksiyalar",
  promo_until: "Amal qilish muddati",

  about_title: "Do'kon haqida",
  about_lead:
    "VIPWATCHES_UZ — Toshkentdagi soatlar butigi. Biz 2024-yilda oddiy g'oya bilan ochildik: soat xaridi shunchaki savdo emas, voqea bo'lishi kerak.",
  about_p1:
    "Butik asoschisi — Aziz Tojimurodov. Kichik vitrinadan boshlab, bir yil ichida qariyb 300 ming obunachi yig'dik va butun shahardan kelishadigan shourum ochdik.",
  about_p2:
    "Shourumda — zumrad vitrinalar, oq qo'lqoplar va shoshilmasdan kiyib ko'rish, taqqoslash va tanlash uchun vaqt. Har bir soatni xaridor bilan birga tekshiramiz.",
  about_p3:
    "Bizning tamoyilimiz uch tilda uch so'zga sig'adi: Vaqt pul. Time is money. Время — деньги.",
  stat_year: "tashkil etilgan yil",
  stat_subs: "Instagram obunachilari",
  stat_models: "mavjud modellar",

  contacts_title: "Kontaktlar",
  address_label: "Shourum",
  address_value: "Toshkent — aniq manzilni Telegramda so'rang",
  phone_label: "Telefon · PR va reklama",
  hours_label: "Ish vaqti",
  hours_value: "Har kuni, 10:00 — 21:00",
  socials_label: "Ijtimoiy tarmoqlarda",
  map_hint: "Qanday borishni Telegramda aytamiz",

  cart_title: "Savat",
  cart_empty: "Savat hozircha bo'sh.",
  cart_go: "Katalogga o'tish",
  remove: "Olib tashlash",
  total: "Jami",
  checkout_title: "Buyurtma berish",
  checkout_hint:
    "Kontaktlaringizni qoldiring — menejer siz bilan bog'lanadi, mavjudligini tasdiqlaydi va kiyib ko'rish yoki yetkazish haqida kelishadi.",
  f_name: "Sizga qanday murojaat qilaylik",
  f_phone: "Telefon",
  f_comment: "Izoh (ixtiyoriy)",
  f_delivery: "Qanday olish qulay",
  d_pickup: "Shourumga boraman",
  d_delivery: "Toshkent bo'ylab yetkazish",
  submit: "Buyurtma yuborish",
  success_title: "Buyurtma qabul qilindi",
  success_text:
    "Tez orada siz bilan bog'lanamiz. Tezroq bo'lsin desangiz — buyurtmani bir tugma bilan Telegramga yuboring:",
  send_tg: "Telegramga yuborish",
  order_more: "Bosh sahifaga qaytish",

  footer_tag: "Vaqt pul · Time is money · Время — деньги",
  footer_rights: "Barcha huquqlar himoyalangan",
};

export const translations: Record<Lang, Record<TKey, string>> = { ru, uz };
