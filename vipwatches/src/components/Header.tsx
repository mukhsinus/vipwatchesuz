import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLang } from "../i18n/LanguageContext";
import { useCart } from "../context/CartContext";
import { site } from "../data/site";
import { BurgerIcon, CartIcon, LogoMark } from "./Icons";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Закрываем мобильное меню при переходе на другую страницу
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: t("nav_home"), end: true },
    { to: "/catalog", label: t("nav_catalog"), end: false },
    { to: "/promos", label: t("nav_promos"), end: false },
    { to: "/about", label: t("nav_about"), end: false },
    { to: "/contacts", label: t("nav_contacts"), end: false },
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <LogoMark />
          {site.name}
        </Link>

        <nav className={open ? "nav open" : "nav"}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Язык / Til">
            <button
              type="button"
              className={lang === "ru" ? "on" : undefined}
              onClick={() => setLang("ru")}
              aria-pressed={lang === "ru"}
            >
              RU
            </button>
            <button
              type="button"
              className={lang === "uz" ? "on" : undefined}
              onClick={() => setLang("uz")}
              aria-pressed={lang === "uz"}
            >
              UZ
            </button>
          </div>

          <Link to="/cart" className="cart-link" aria-label={t("nav_cart")}>
            <CartIcon />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>

          <button
            type="button"
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Меню"
          >
            <BurgerIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
