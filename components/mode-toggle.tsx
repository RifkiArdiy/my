"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

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
        >
            {theme === "light" ? <Sun /> : <Moon />}
        </button>
    );
}
