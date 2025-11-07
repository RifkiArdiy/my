import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden transition-shadow duration-200 hover:shadow-lg",
        className
      )}
    >
      <Link
        href={href || "#"}
        className="block w-full"
        aria-label={title}
      >
        {/* media wrapper keeps 16:9 ratio and prevents overflow */}
        <div className="w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 relative" style={{ paddingTop: "56.25%" }}>
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full"
              style={{ objectFit: "contain" }}
            />
          ) : image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 h-full w-full"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
              No preview
            </div>
          )}
        </div>
      </Link>

      <CardHeader className="px-4 pt-4">
        <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
      </CardHeader>

      <CardContent className="px-4 pt-0 pb-4 flex-1">
        <div className="text-sm text-muted-foreground max-h-24 overflow-hidden">
          {/* fallback plain text while react-markdown not installed */}
          <div className="whitespace-pre-wrap">{description}</div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span
              key={t}
              className="rounded-full bg-muted/40 px-2 py-1 text-xs font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-4 pt-0 pb-4">
        <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
          <div>{dates}</div>
          <div className="flex items-center gap-2">
            {links?.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md p-1 text-sm hover:bg-muted/10"
                aria-label={l.type}
              >
                {l.icon}
              </a>
            ))}

            {link && (
              <Link
                href={link}
                className="ml-1 inline-flex items-center rounded-md bg-primary px-2 py-1 text-xs font-medium text-white"
              >
                Visit
              </Link>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}