"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

type ModeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  duration?: number;
};

export function ModeToggle({ duration = 400, className, ...props }: ModeToggleProps) {
  const [theme, setTheme] = React.useState<Theme>("light");
  const btnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const sync = () =>
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = React.useCallback(async () => {
    if (!btnRef.current) return;

    const applyToggle = () => {
      const next: Theme = theme === "light" ? "dark" : "light";
      flushSync(() => {
        setTheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        localStorage.setItem("theme", next);
      });
    };

    // Gunakan tipe bawaan DOM (tidak redeclare). Optional chaining untuk dukungan yang aman.
    const startVT = document.startViewTransition?.bind(document);

    if (!startVT) {
      // Fallback tanpa View Transitions
      applyToggle();
      return;
    }

    const vt = startVT(() => {
      // Signature bawaan menerima callback atau options—callback ini valid.
      applyToggle();
    });

    try {
      await vt.ready;
    } catch {
      // kalau ada error, tetap lanjut tanpa animasi tambahan
    }

    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [theme, duration]);

  return (
    <button
      ref={btnRef}
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
      className={className}
      {...props}
    >
      {theme === "light" ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
