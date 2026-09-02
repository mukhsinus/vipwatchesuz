import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { promos } from "../data/promos";

export default function PromosPage() {
  const { lang, t } = useLang();

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">{t("promos_title")}</h1>

        <div className="promo-list">
          {promos.map((promo) => (
            <article key={promo.id} className="promo-card">
              <div className="promo-until">
                {t("promo_until")}
                <strong>{promo.until[lang]}</strong>
              </div>
              <div>
                <h3>{promo.title[lang]}</h3>
                <p>{promo.text[lang]}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 36 }}>
          <Link to="/catalog" className="btn btn-dark-outline">
            {t("featured_all")}
          </Link>
        </div>
      </div>
    </section>
  );
}
