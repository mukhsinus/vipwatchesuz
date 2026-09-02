import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice, type Product } from "../data/products";
import { useLang } from "../i18n/LanguageContext";
import { useCart } from "../context/CartContext";
import { WatchGlyph } from "./Icons";

/**
 * Показывает фото товара. Если файла нет (или он не загрузился) —
 * рисует аккуратную заглушку вместо «битой» картинки.
 */
export function ProductImage({ product }: { product: Product }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="product-placeholder">
        <WatchGlyph />
        <span>{product.brand}</span>
      </div>
    );
  }

  return (
    <img
      src={product.image}
      alt={`${product.brand} ${product.name}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { t } = useLang();
  const { add, has } = useCart();
  const inCart = has(product.id);

  return (
    <article className="product-card">
      <Link to={`/catalog/${product.id}`} className="product-media">
        <ProductImage product={product} />
        {product.isNew && <span className="badge-new">{t("badge_new")}</span>}
      </Link>

      <div className="product-body">
        <div className="product-brand">{product.brand}</div>
        <h3 className="product-name">
          <Link to={`/catalog/${product.id}`}>{product.name}</Link>
        </h3>

        <div className="product-foot">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button
            type="button"
            className="btn btn-dark-outline btn-sm"
            onClick={() => add(product)}
            disabled={inCart}
          >
            {inCart ? t("in_cart") : t("add_cart")}
          </button>
        </div>
      </div>
    </article>
  );
}
