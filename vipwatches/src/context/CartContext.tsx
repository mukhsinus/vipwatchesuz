import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "../data/products";

export interface CartItem {
  product: Product;
  qty: number;
}

interface CartValue {
  items: CartItem[];
  add: (product: Product, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  /** Общее число единиц — для бейджа в шапке */
  count: number;
  /** Сумма в USD */
  total: number;
  has: (productId: string) => boolean;
}

const CartContext = createContext<CartValue | null>(null);

const STORAGE_KEY = "vw_cart";

/** В storage храним только id и qty, товар восстанавливаем из каталога */
type StoredItem = { id: string; qty: number };

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const stored: StoredItem[] = JSON.parse(raw);
    return stored
      .map((s) => {
        const product = getProduct(s.id);
        return product ? { product, qty: Math.max(1, s.qty) } : null;
      })
      .filter((x): x is CartItem => x !== null);
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  useEffect(() => {
    try {
      const stored: StoredItem[] = items.map((i) => ({
        id: i.product.id,
        qty: i.qty,
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add = useCallback((product: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + qty } : i,
        );
      }
      return [...prev, { product, qty }];
    });
  }, []);

  const remove = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const setQty = useCallback((productId: string, qty: number) => {
    setItems((prev) =>
      qty < 1
        ? prev.filter((i) => i.product.id !== productId)
        : prev.map((i) =>
            i.product.id === productId ? { ...i, qty } : i,
          ),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items],
  );
  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.qty, 0),
    [items],
  );
  const has = useCallback(
    (productId: string) => items.some((i) => i.product.id === productId),
    [items],
  );

  const value = useMemo(
    () => ({ items, add, remove, setQty, clear, count, total, has }),
    [items, add, remove, setQty, clear, count, total, has],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart должен вызываться внутри <CartProvider>");
  return ctx;
}
