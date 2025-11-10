// components/footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 relative backdrop-blur-sm py-6 px-6 z-40">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <div className="text-sm text-muted-foreground max-h-24 overflow-hidden">
                        <div className="whitespace-pre-wrap">© {new Date().getFullYear()} Rifki Ardiy - Website All rights reserved</div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/username" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-sm text-muted-foreground max-h-24 overflow-hidden">
                        GITHUB
                    </a>
                    <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-sm text-muted-foreground max-h-24 overflow-hidden">
                        LINKEDIN
                    </a>
                    <a href="mailto:email@example.com" aria-label="Email" className="text-sm text-muted-foreground max-h-24 overflow-hidden">
                        EMAIL
                    </a>
                </div>
            </div>
        </footer>
    );
}
