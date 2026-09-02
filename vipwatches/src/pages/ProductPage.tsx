import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { formatPrice, getProduct } from "../data/products";
import { useCart } from "../context/CartContext";
import { ProductImage } from "../components/ProductCard";
import type { TKey } from "../i18n/translations";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLang();
  const { add } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const product = id ? getProduct(id) : undefined;

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <p className="empty-note">{t("nothing_found")}</p>
          <Link to="/catalog" className="btn btn-dark-outline">
            {t("back_catalog")}
          </Link>
        </div>
      </section>
    );
  }

  const categoryKey: TKey =
    product.category === "classic"
      ? "filter_classic"
      : product.category === "sport"
        ? "filter_sport"
        : "filter_casual";

  const mechanismKey: TKey =
    product.mechanism === "quartz" ? "mech_quartz" : "mech_auto";

  const handleAdd = () => {
    add(product, qty);
    navigate("/cart");
  };

  return (
    <section className="section">
      <div className="container">
        <Link to="/catalog" className="back-link">
          ← {t("back_catalog")}
        </Link>

        <div className="product-page">
          <div className="product-media">
            <ProductImage product={product} />
            {product.isNew && (
              <span className="badge-new">{t("badge_new")}</span>
            )}
          </div>

          <div>
            <div className="pp-brand">{product.brand}</div>
            <h1>{product.name}</h1>
            <div className="pp-price">{formatPrice(product.price)}</div>

            <p className="pp-desc">{product.desc[lang]}</p>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td>{t("spec_brand")}</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td>{t("spec_category")}</td>
                  <td>{t(categoryKey)}</td>
                </tr>
                <tr>
                  <td>{t("spec_mechanism")}</td>
                  <td>{t(mechanismKey)}</td>
                </tr>
              </tbody>
            </table>

            <div className="qty-row">
              <span>{t("qty")}</span>
              <div className="qty-ctrl">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="−"
                >
                  −
                </button>
                <span>{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(20, q + 1))}
                  aria-label="+"
                >
                  +
                </button>
              </div>

              <button type="button" className="btn" onClick={handleAdd}>
                {t("add_cart")}
              </button>
            </div>

            <p className="pp-note">{t("product_note")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
