import { Icons } from "@/components/icons";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const DATA = {
  name: "",
  initials: "DV",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  //   contact: {
  //     email: "hello@example.com",
  //     tel: "+123456789",
  //     social: {
  //       GitHub: {
  //         name: "GitHub",
  //         url: "https://dub.sh/dillion-github",
  //         icon: Icons.github,

  //         navbar: true,
  //       },
  //       LinkedIn: {
  //         name: "LinkedIn",
  //         url: "https://dub.sh/dillion-linkedin",
  //         icon: Icons.linkedin,

  //         navbar: true,
  //       },
  //       X: {
  //         name: "X",
  //         url: "https://dub.sh/dillion-twitter",
  //         icon: Icons.x,

  //         navbar: true,
  //       },
  //       Youtube: {
  //         name: "Youtube",
  //         url: "https://dub.sh/dillion-youtube",
  //         icon: Icons.youtube,
  //         navbar: true,
  //       },
  //       email: {
  //         name: "Send Email",
  //         url: "#",
  //         icon: Icons.email,

  //         navbar: false,
  //       },
  //     },
  //   },
  projects: [
    {
      title: "LinkId",
      href: "https://link.id",
      dates: "Juli 2023 - Agustus 2023",
      active: true,
      description:
        "LinkId/Business Card is a Multi-user Digital Business Card Builder system, that allows many users to create their business cards or digital cards with lots of information and they can share it with their customers.",
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "JSON",
        "jQuery",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: `${prefix}/images/linkid.jpg`,
      video:
        "",
    },
    {
      title: "Upskilling",
      href: "https://upskilling.ac.id",
      dates: "Agustus 2023 - November 2024",
      active: true,
      description:
        "Upskilling is a web-based responsive application that includes an online learning management system, as well as admin, instructor and student panel. This is a completely ready-to-use learning management system.",
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "jQuery",
      ],
      links: [
        {
          type: "Website",
          href: "https://upskilling.ac.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: `${prefix}/images/upskilling.png`,
      video:
        "",
    },
    {
      title: "Internify",
      href: "https://internify.dbsnetwork.my.id/",
      dates: "Agustus 2023 - November 2024",
      active: true,
      description:
        "Internify is a modern Internship Management System designed to make the internship process easier, more structured, and more integrated.",
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "jQuery",
      ],
      links: [
        {
          type: "Website",
          href: "https://internify.dbsnetwork.my.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/internify.png",
      video:
        "",
    },
    {
      title: "Sibeta",
      href: "https://github.com/FirmanJK/Project_PBL",
      dates: "",
      active: true,
      description:
        "With Sibeta, we try to simplify the management and submission of documents without any liability, making it easier for users (Students and Admins). This application is web-based, making it easy for users to access it anywhere and with any device.",
      technologies: [
        "PHP",
        "MySQL",
        "Bootstrap",
        "JavaScript",
        "jQuery",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: `${prefix}/images/sibeta2.png`,
      video:
        "",
    },
    {
      title: "TalentHub",
      href: "https://github.com/RifkiArdiy/TalentHub",
      dates: "",
      active: true,
      description:
        "Talent Hub serves as a digital solution that enhances the efficiency of the recruitment process, helps users find their dream jobs quickly, and supports companies in acquiring the best candidates accurately and on time.",
      technologies: [
        "Flutter",
        "Dart",
        "MongoDB",
        "NodeJS",
        "ExpressJS",
        "RESTful API",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: `${prefix}/images/talenhub.png`,
      video:
        "",
    },
    {
      title: "Personal Website",
      href: "https://github.com/RifkiArdiy/my.git",
      dates: "",
      active: true,
      description:
        "This is my personal website where I showcase my projects, skills, and experiences.",
      technologies: [
        "JavaScript",
        "NodeJS",
        "NextJS",
        "TailwindCSS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: `${prefix}/images/personal.png`,
      video:
        "",
    },
  ],

} as const;