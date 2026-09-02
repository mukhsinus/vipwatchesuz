import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

export default function NotFoundPage() {
  const { t } = useLang();

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">404</h1>
        <p className="empty-note">{t("nothing_found")}</p>
        <Link to="/" className="btn btn-dark-outline">
          {t("nav_home")}
        </Link>
      </div>
    </section>
  );
}
