import { cn } from "@/lib/utils";
import React from "react";
import TextType from "./magicui/typing-animation";

export function GridBackgroundDemo() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-white dark:bg-black">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
            {/* NOTE: this component now only renders the background layers fixed to the viewport.
                If you want the typed text to remain visible and interactable above page content,
                render TextType outside this fixed background (in page.tsx) with a higher z-index. */}
        </div>
    );
}
