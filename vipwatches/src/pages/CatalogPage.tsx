import { useMemo, useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { brands, products, type Category } from "../data/products";
import ProductCard from "../components/ProductCard";
import type { TKey } from "../i18n/translations";

type CategoryFilter = Category | "all";
type Sort = "popular" | "asc" | "desc";

const categoryFilters: { value: CategoryFilter; key: TKey }[] = [
  { value: "all", key: "filter_all" },
  { value: "classic", key: "filter_classic" },
  { value: "sport", key: "filter_sport" },
  { value: "casual", key: "filter_casual" },
];

export default function CatalogPage() {
  const { t } = useLang();
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [brand, setBrand] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("popular");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (brand !== "all" && p.brand !== brand) return false;
      if (q && !`${p.brand} ${p.name}`.toLowerCase().includes(q)) return false;
      return true;
    });

    const sorted = [...filtered];
    if (sort === "asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "desc") sorted.sort((a, b) => b.price - a.price);
    else sorted.sort((a, b) => b.popularity - a.popularity);

    return sorted;
  }, [category, brand, query, sort]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">{t("catalog_title")}</h1>

        <div className="filters">
          <div className="chip-row">
            {categoryFilters.map((c) => (
              <button
                key={c.value}
                type="button"
                className={category === c.value ? "chip on" : "chip"}
                onClick={() => setCategory(c.value)}
                aria-pressed={category === c.value}
              >
                {t(c.key)}
              </button>
            ))}
          </div>

          <div className="filters-right">
            <input
              className="input"
              type="search"
              value={query}
              placeholder={t("search_ph")}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={t("search_ph")}
            />

            <select
              className="select"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              aria-label={t("brand_all")}
            >
              <option value="all">{t("brand_all")}</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            <select
              className="select"
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              aria-label={t("sort_label")}
            >
              <option value="popular">{t("sort_pop")}</option>
              <option value="asc">{t("sort_asc")}</option>
              <option value="desc">{t("sort_desc")}</option>
            </select>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="empty-note">{t("nothing_found")}</p>
        ) : (
          <div className="grid-products">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
