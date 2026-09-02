import { useLang } from "../i18n/LanguageContext";
import { site } from "../data/site";
import { InstagramIcon, TelegramIcon } from "../components/Icons";

export default function ContactsPage() {
  const { t } = useLang();

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">{t("contacts_title")}</h1>

        <div className="contacts-grid">
          <div>
            <div className="contact-row">
              <div className="contact-label">{t("address_label")}</div>
              <div className="contact-value">{t("address_value")}</div>
            </div>

            <div className="contact-row">
              <div className="contact-label">{t("phone_label")}</div>
              <div className="contact-value">
                <a href={site.phoneHref}>{site.phone}</a>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-label">{t("hours_label")}</div>
              <div className="contact-value">{t("hours_value")}</div>
            </div>

            <div className="contact-row">
              <div className="contact-label">{t("socials_label")}</div>
              <div className="contact-value">{site.instagramHandle}</div>
              <div className="socials">
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark-outline btn-sm"
                >
                  <TelegramIcon />
                  Telegram
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark-outline btn-sm"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="map-box">
            <iframe
              src={site.mapEmbed}
              title={t("address_label")}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-hint">{t("map_hint")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
