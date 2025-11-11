// components/footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 relative backdrop-blur-sm py-6 px-6 z-40">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <div className="text-sm text-muted-foreground max-h-24 overflow-hidden">
                        <div className="whitespace-pre-wrap">© {new Date().getFullYear()} Rifki Ardiy - Website All rights reserved</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
