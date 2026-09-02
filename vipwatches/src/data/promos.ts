export interface Promo {
  id: string;
  title: { ru: string; uz: string };
  text: { ru: string; uz: string };
  /** Строка вида «30 сентября» — показывается после подписи «Действует до» */
  until: { ru: string; uz: string };
}

/** ДЕМО-АКЦИИ: замените на актуальные */
export const promos: Promo[] = [
  {
    id: "gift-200",
    title: {
      ru: "Подарок на $200 к празднику",
      uz: "Bayramga $200 lik sovg'a",
    },
    text: {
      ru: "При покупке часов от $1 000 — подарок на $200 на ваш выбор: ремешок, шкатулка для часов или второй аксессуар из витрины.",
      uz: "$1 000 dan yuqori soat xaridida — o'zingiz tanlagan $200 lik sovg'a: tasma, soat qutisi yoki vitrinadan ikkinchi aksessuar.",
    },
    until: { ru: "30 сентября", uz: "30-sentabrgacha" },
  },
  {
    id: "trade-in",
    title: {
      ru: "Trade-in: обменяйте старые часы",
      uz: "Trade-in: eski soatingizni almashtiring",
    },
    text: {
      ru: "Принесите свои часы в шоурум — оценим при вас и зачтём стоимость в цену новой модели. Честная оценка, без скрытых условий.",
      uz: "Soatingizni shourumga olib keling — ko'z oldingizda baholaymiz va narxini yangi model narxiga hisoblaymiz. Halol baho, yashirin shartlarsiz.",
    },
    until: { ru: "постоянная акция", uz: "doimiy aksiya" },
  },
  {
    id: "fit-service",
    title: {
      ru: "Подгонка браслета — бесплатно",
      uz: "Braslet moslash — bepul",
    },
    text: {
      ru: "К любым часам из каталога: подгоним браслет по руке при покупке и бесплатно отрегулируем повторно в течение года.",
      uz: "Katalogdagi har qanday soatga: xaridda brasletni qo'lingizga moslaymiz va bir yil davomida bepul qayta sozlaymiz.",
    },
    until: { ru: "постоянная акция", uz: "doimiy aksiya" },
  },
];
