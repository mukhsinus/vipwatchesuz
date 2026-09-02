import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { products } from "../data/products";
import { site } from "../data/site";
import ProductCard from "../components/ProductCard";
import HeroClock from "../components/HeroClock";
import { TelegramIcon } from "../components/Icons";

export default function HomePage() {
  const { lang, t } = useLang();
  const featured = products.filter((p) => p.featured).slice(0, 4);

  // Вторая строка слогана — на «другом» языке, чтобы держать двуязычие бренда
  const heroSecondLine = lang === "ru" ? "Vaqt — pul." : "Время — деньги.";

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="hero-kicker">{t("hero_kicker")}</div>
            <h1>{t("hero_title")}</h1>
            <div className="hero-trans">{heroSecondLine}</div>
            <p className="hero-sub">{t("hero_sub")}</p>
            <div className="hero-actions">
              <Link to="/catalog" className="btn">
                {t("hero_cta")}
              </Link>
              <a
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <TelegramIcon />
                {t("hero_cta2")}
              </a>
            </div>
          </div>

          <HeroClock caption={t("hero_clock_caption")} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t("featured_title")}</h2>
          <div className="grid-products" style={{ marginTop: 36 }}>
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link to="/catalog" className="btn btn-dark-outline">
              {t("featured_all")}
            </Link>
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container">
          <h2 className="section-title">{t("why_title")}</h2>
          <div className="why-grid">
            <div className="why-item">
              <h3>{t("why1_t")}</h3>
              <p>{t("why1_d")}</p>
            </div>
            <div className="why-item">
              <h3>{t("why2_t")}</h3>
              <p>{t("why2_d")}</p>
            </div>
            <div className="why-item">
              <h3>{t("why3_t")}</h3>
              <p>{t("why3_d")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tg-band">
        <div className="container tg-band-inner">
          <h2>{t("tg_band_title")}</h2>
          <a
            href={site.telegram}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <TelegramIcon />
            {t("tg_band_btn")}
          </a>
        </div>
      </section>
    </>
  );
}
