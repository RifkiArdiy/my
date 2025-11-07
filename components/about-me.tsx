"use client";

import Image from "next/image";

export default function AboutMeSection() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6">
            {/* Card background — match ProjectCard background */}
            <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-6 md:p-12 border border-neutral-200/20 dark:border-white/10 shadow-lg">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                    {/* Left — quote & bio */}
                    <div>
                        <div className="mb-6 text-6xl leading-none tracking-tight">“</div>
                        <h3 className="text-lg/relaxed tracking-tight">
                            Enthusiastic Informatics Engineering student with a strong interest in Backend Development. Proficient in
                            programming languages such as PHP and JavaScript (NodeJS & ExpressJS), and experienced in
                            designing and building RESTful APIs. Strong understanding of SQL (MySQL) and NoSQL (MongoDB)
                            database management. Looking for opportunities to contribute and grow in a Junior Backend Developer
                            position.
                        </h3>

                        <div className="mt-10">
                            <p className="font-semibold tracking-tight">Ashrul Rifki Ardiyhasa</p>
                            <p className="text-sm tracking-tight">Backend Developer</p>
                        </div>
                    </div>

                    {/* Right — photo with layered frame */}
                    <div className="relative mx-auto w-full max-w-md">
                        {/* offset frame */}
                        <div className="absolute -right-6 -top-6 hidden h-full w-full rounded-2xl border border-neutral-400/40 dark:border-white/10 md:block" />

                        {/* photo */}
                        <div className="relative overflow-hidden rounded-2xl border border-neutral-400/40 dark:border-white/10 md:block">
                            <Image
                                src="/images/rifki.jpg" // letakkan file di /public/rifki.jpg
                                alt="Foto profil"
                                width={800}
                                height={800}
                                className="h-auto w-full object-cover"
                                priority
                            />
                            {/* decorative waves */}
                            <svg
                                className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 opacity-70"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    className="text-blue-300/80"
                                />
                                <path
                                    d="M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    className="text-blue-300/60"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
