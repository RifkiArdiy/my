// "use client";

// import { withBasePath } from "@/lib/asset";
// import Image from "next/image";

// export default function AboutMeSection() {
//     // Ambil basePath dari environment (diset di next.config.js)
//     const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

//     return (
//         <div className="mx-auto max-w-6xl px-4 py-24 md:px-6">
//             <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
//                 {/* Left — quote & bio */}
//                 <h2 className="text-lg/relaxed tracking-tight">
//                     Enthusiastic Informatics Engineering student with a strong
//                     interest in Backend Development. Proficient in programming
//                     languages such as PHP and JavaScript (NodeJS & ExpressJS), and
//                     experienced in designing and building RESTful APIs. Strong
//                     understanding of SQL (MySQL) and NoSQL (MongoDB) database
//                     management. Looking for opportunities to contribute and grow in a
//                     Junior Backend Developer position.
//                 </h2>
//                 <div className="flex flex-wrap -m-2">
//                     <div className="p-4 lg:w-1/2 md:w-full">
//                         <div className="h-full flex items-center border-gray-400 border p-4 rounded-lg">
//                             <div className="flex-grow">
//                                 <h2 className="text-black dark:text-white title-font font-medium">Holden Caulfield</h2>
//                                 <p className="text-black dark:text-white">UI Designer</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="p-4 lg:w-1/2 md:w-full">
//                         <div className="h-full flex items-center border-gray-400 border p-4 rounded-lg">
//                             <div className="flex-grow">
//                                 <h2 className="text-black dark:text-white title-font font-medium">Henry Letham</h2>
//                                 <p className="text-black dark:text-white">CTO</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="p-4 lg:w-1/2 md:w-full">
//                         <div className="h-full flex items-center border-gray-400 border p-4 rounded-lg">
//                             <div className="flex-grow">
//                                 <h2 className="text-black dark:text-white title-font font-medium">Oskar Blinde</h2>
//                                 <p className="text-black dark:text-white">Founder</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="p-4 lg:w-1/2 md:w-full">
//                         <div className="h-full flex items-center border-gray-400 border p-4 rounded-lg">
//                             <div className="flex-grow">
//                                 <h2 className="text-black dark:text-white title-font font-medium">John Doe</h2>
//                                 <p className="text-black dark:text-white">DevOps</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
"use client";

import Image from "next/image";

export default function AboutMeSection() {
    return (
        <section className="relative overflow-hidden text-black dark:text-white">
            {/* subtle grid overlay */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(transparent 31px, rgba(255,255,255,0.02) 32px), linear-gradient(90deg, transparent 31px, rgba(255,255,255,0.02) 32px)",
                    backgroundSize: "32px 32px"
                }}
            />

            <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 relative">
                <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
                    {/* LEFT: heading + paragraph */}
                    <div className="z-10">
                        <span className="inline-block rounded-full border border-black dark:border-white backdrop-blur px-3 py-1 text-xs tracking-widest text-black dark:text-white">
                            ABOUT
                        </span>

                        <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
                            Building calm, maintainable software for fast-moving teams.
                        </h2>

                        <p className="mt-6 max-w-xl text-grey dark:text-white text-lg leading-relaxed">
                            I focus on crafting software that balances speed, stability, and maintainability. My goal is to deliver
                            solutions that scale smoothly while keeping development processes simple and sustainable. With a deep
                            understanding of both frontend and backend systems, I help teams move faster without sacrificing quality.
                        </p>
                    </div>

                    {/* RIGHT: cards 2x2 */}
                    <div className="z-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {[
                            {
                                title: "Fullstack Delivery",
                                body:
                                    "Drive products from discovery to deployment across the entire stack — frontend, backend, and infrastructure."
                            },
                            {
                                title: "Team Enablement",
                                body:
                                    "Mentor engineers, define technical standards, and maintain actionable documentation for continuous improvement."
                            },
                            {
                                title: "Reliable Systems",
                                body:
                                    "Build resilient services with Docker and message queues to ensure uptime and performance."
                            },
                            {
                                title: "Product Thinking",
                                body:
                                    "Balance technical decisions with business context — ensuring every release aligns with real product goals."
                            }
                        ].map((card) => (
                            <article
                                key={card.title}
                                className="relative overflow-hidden rounded-2xl border border-black/30 dark:border-white/30 p-6 shadow-sm backdrop-blur-sm"
                            >
                                <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">{card.title}</h3>
                                <p className="text-black dark:text-white text-sm leading-relaxed">{card.body}</p>

                                {/* subtle rounded outline accent */}
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-2xl pointer-events-none"
                                    style={{
                                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
                                        borderRadius: "16px"
                                    }}
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
