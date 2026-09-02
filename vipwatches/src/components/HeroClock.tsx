import { useEffect, useState } from "react";

/**
 * Аналоговый циферблат, идущий в реальном времени по Ташкенту (UTC+5).
 * Один смысловой акцент главной страницы: «Время — деньги» показано, а не написано.
 */
function tashkentTime(): { h: number; m: number; s: number; label: string } {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("ru-RU", {
    timeZone: "Asia/Tashkent",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? "0");

  const h = get("hour");
  const m = get("minute");
  const s = get("second");
  const pad = (n: number) => String(n).padStart(2, "0");

  return { h, m, s, label: `${pad(h)}:${pad(m)}` };
}

export default function HeroClock({ caption }: { caption: string }) {
  const [time, setTime] = useState(tashkentTime);

  useEffect(() => {
    const id = window.setInterval(() => setTime(tashkentTime()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const hourAngle = ((time.h % 12) + time.m / 60) * 30;
  const minuteAngle = (time.m + time.s / 60) * 6;
  const secondAngle = time.s * 6;

  // Метки часов по кругу
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const outer = 88;
    const inner = i % 3 === 0 ? 76 : 81;
    return {
      x1: 100 + outer * Math.sin(angle),
      y1: 100 - outer * Math.cos(angle),
      x2: 100 + inner * Math.sin(angle),
      y2: 100 - inner * Math.cos(angle),
      wide: i % 3 === 0,
    };
  });

  return (
    <div className="hero-clock">
      <svg
        viewBox="0 0 200 200"
        role="img"
        aria-label={`${caption}: ${time.label}`}
      >
        <circle cx="100" cy="100" r="95" fill="#0c2a1f" />
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="#b9924b"
          strokeWidth="1"
        />
        {ticks.map((tk, i) => (
          <line
            key={i}
            x1={tk.x1}
            y1={tk.y1}
            x2={tk.x2}
            y2={tk.y2}
            stroke={tk.wide ? "#d9bd85" : "rgba(185,146,75,.55)"}
            strokeWidth={tk.wide ? 2.4 : 1.2}
            strokeLinecap="round"
          />
        ))}

        <g transform={`rotate(${hourAngle} 100 100)`}>
          <line
            x1="100"
            y1="108"
            x2="100"
            y2="52"
            stroke="#f4efe6"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>
        <g transform={`rotate(${minuteAngle} 100 100)`}>
          <line
            x1="100"
            y1="112"
            x2="100"
            y2="30"
            stroke="#f4efe6"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <g transform={`rotate(${secondAngle} 100 100)`}>
          <line
            x1="100"
            y1="120"
            x2="100"
            y2="26"
            stroke="#b9924b"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
        <circle cx="100" cy="100" r="4" fill="#b9924b" />
      </svg>

      <div className="hero-clock-caption">
        {caption}
        <strong>{time.label}</strong>
      </div>
    </div>
  );
}
