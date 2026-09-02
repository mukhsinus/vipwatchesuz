/**
 * ВСЕ НАСТРОЙКИ САЙТА В ОДНОМ МЕСТЕ.
 * Меняйте значения здесь — они подставятся во все страницы.
 */
export const site = {
  name: "VIPWATCHES_UZ",
  founded: 2024,
  owner: "Aziz Tojimurodov",

  phone: "+998 33 044 00 44",
  phoneHref: "tel:+998330440044",

  telegram: "https://t.me/vipwatches_uz",
  telegramChannel: "@vipwatches_uz",
  instagram: "https://instagram.com/vipwatches_uz",
  instagramHandle: "@vipwatches_uz",

  /**
   * Куда уходит заявка из корзины.
   * Сейчас — открывается чат в Telegram с готовым текстом заявки.
   * Если появится бэкенд, замените отправку в src/pages/CartPage.tsx.
   */
  telegramOrderChat: "https://t.me/vipwatches_uz",

  /**
   * Карта. Вставьте свою ссылку из Google Maps:
   * Поделиться → Встроить карту → скопируйте адрес из src="..."
   */
  mapEmbed:
    "https://www.google.com/maps?q=Tashkent,Uzbekistan&output=embed",

  instagramFollowers: "294 000",
};
