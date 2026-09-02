import { useLang } from "../i18n/LanguageContext";
import { site } from "../data/site";
import { products } from "../data/products";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">{t("about_title")}</h1>
        <p className="about-lead">{t("about_lead")}</p>

        <div className="about-cols">
          <div className="about-text">
            <p>{t("about_p1")}</p>
            <p>{t("about_p2")}</p>
            <p>{t("about_p3")}</p>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>{site.founded}</strong>
              <span>{t("stat_year")}</span>
            </div>
            <div className="stat">
              <strong>{site.instagramFollowers}</strong>
              <span>{t("stat_subs")}</span>
            </div>
            <div className="stat">
              <strong>{products.length}+</strong>
              <span>{t("stat_models")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
