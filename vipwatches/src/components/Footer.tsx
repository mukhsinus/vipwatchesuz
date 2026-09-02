import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { site } from "../data/site";
import { InstagramIcon, LogoMark, TelegramIcon } from "./Icons";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="logo">
            <LogoMark size={22} />
            {site.name}
          </div>
          <div className="footer-tag">{t("footer_tag")}</div>
        </div>

        <div className="footer-links">
          <Link to="/catalog">{t("nav_catalog")}</Link>
          <Link to="/promos">{t("nav_promos")}</Link>
          <Link to="/about">{t("nav_about")}</Link>
          <Link to="/contacts">{t("nav_contacts")}</Link>
        </div>

        <div>
          <div className="socials">
            <a
              href={site.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <TelegramIcon size={20} />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
          <div className="footer-meta">
            © {new Date().getFullYear()} {site.name}. {t("footer_rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
