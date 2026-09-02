import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import { site } from "../data/site";
import { ProductImage } from "../components/ProductCard";
import { TelegramIcon } from "../components/Icons";

type Delivery = "pickup" | "delivery";

export default function CartPage() {
  const { t } = useLang();
  const { items, setQty, remove, clear, total } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [delivery, setDelivery] = useState<Delivery>("pickup");
  const [sent, setSent] = useState(false);
  const [orderText, setOrderText] = useState("");

  /** Собирает текст заявки — его же отправляем в Telegram */
  const buildOrderText = () => {
    const lines = [
      `Заявка с сайта ${site.name}`,
      "",
      ...items.map(
        (i) =>
          `• ${i.product.brand} ${i.product.name} × ${i.qty} — ${formatPrice(
            i.product.price * i.qty,
          )}`,
      ),
      "",
      `Итого: ${formatPrice(total)}`,
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Получение: ${delivery === "pickup" ? "самовывоз из шоурума" : "доставка по Ташкенту"}`,
    ];
    if (comment.trim()) lines.push(`Комментарий: ${comment.trim()}`);
    return lines.join("\n");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const text = buildOrderText();
    setOrderText(text);

    /**
     * Пока бэкенда нет — заявка просто формируется на клиенте.
     * Когда появится сервер, отправьте её сюда:
     *
     * await fetch("/api/orders", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify({ name, phone, comment, delivery, items, total }),
     * });
     */
    console.log(text);

    setSent(true);
    clear();
  };

  if (sent) {
    const tgLink = `${site.telegramOrderChat}?text=${encodeURIComponent(orderText)}`;
    return (
      <section className="section">
        <div className="container">
          <div className="success-box">
            <h2>{t("success_title")}</h2>
            <p>{t("success_text")}</p>
            <div className="success-actions">
              <a href={tgLink} target="_blank" rel="noreferrer" className="btn">
                <TelegramIcon />
                {t("send_tg")}
              </a>
              <Link to="/" className="btn btn-dark-outline">
                {t("order_more")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">{t("cart_title")}</h1>

        {items.length === 0 ? (
          <>
            <p className="empty-note">{t("cart_empty")}</p>
            <Link to="/catalog" className="btn btn-dark-outline">
              {t("cart_go")}
            </Link>
          </>
        ) : (
          <div className="cart-layout">
            <div>
              {items.map((item) => (
                <div key={item.product.id} className="cart-item">
                  <Link
                    to={`/catalog/${item.product.id}`}
                    className="cart-thumb"
                  >
                    <ProductImage product={item.product} />
                  </Link>

                  <div>
                    <div className="cart-item-brand">{item.product.brand}</div>
                    <div className="cart-item-name">{item.product.name}</div>
                    <div className="qty-ctrl" style={{ marginTop: 10 }}>
                      <button
                        type="button"
                        onClick={() => setQty(item.product.id, item.qty - 1)}
                        aria-label="−"
                      >
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(item.product.id, item.qty + 1)}
                        aria-label="+"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-right">
                    <span className="product-price">
                      {formatPrice(item.product.price * item.qty)}
                    </span>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => remove(item.product.id)}
                    >
                      {t("remove")}
                    </button>
                  </div>
                </div>
              ))}

              <div className="cart-total">
                <span>{t("total")}</span>
                <strong>{formatPrice(total)}</strong>
              </div>
            </div>

            <form className="order-panel" onSubmit={handleSubmit}>
              <h2>{t("checkout_title")}</h2>
              <p className="hint">{t("checkout_hint")}</p>

              <div className="field">
                <label htmlFor="name">{t("f_name")}</label>
                <input
                  id="name"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="phone">{t("f_phone")}</label>
                <input
                  id="phone"
                  className="input"
                  type="tel"
                  placeholder="+998 __ ___ __ __"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <span className="contact-label" style={{ color: "inherit" }}>
                  {t("f_delivery")}
                </span>
                <div className="radio-row" style={{ marginTop: 6 }}>
                  <label>
                    <input
                      type="radio"
                      name="delivery"
                      checked={delivery === "pickup"}
                      onChange={() => setDelivery("pickup")}
                    />
                    {t("d_pickup")}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="delivery"
                      checked={delivery === "delivery"}
                      onChange={() => setDelivery("delivery")}
                    />
                    {t("d_delivery")}
                  </label>
                </div>
              </div>

              <div className="field">
                <label htmlFor="comment">{t("f_comment")}</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              <button type="submit" className="btn">
                {t("submit")}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
