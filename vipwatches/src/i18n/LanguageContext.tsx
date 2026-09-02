import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type TKey } from "./translations";

interface LanguageValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** t("nav_home") -> «Главная» или «Bosh sahifa» */
  t: (key: TKey) => string;
}

const LanguageContext = createContext<LanguageValue | null>(null);

const STORAGE_KEY = "vw_lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "uz") return saved;
  } catch {
    /* localStorage может быть недоступен — молча падаем на дефолт */
  }
  return "ru";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l;
  }, []);

  const t = useCallback((key: TKey) => translations[lang][key], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang должен вызываться внутри <LanguageProvider>");
  return ctx;
}
