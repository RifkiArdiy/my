"use client";

import * as React from "react";
import { Button } from "./ui/button";

type ModeToggleProps = React.ComponentPropsWithoutRef<typeof Button>

export function ModeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        document.documentElement.classList.toggle("dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white"
        >
            {theme === "light" ? "🌞" : "🌜"}
        </button>
    );
}
