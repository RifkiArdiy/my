import { GridBackgroundDemo } from "@/components/grid-background";
import AboutMeSection from "@/components/about-me";
import { BlurFade } from "@/components/ui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import TextType from "@/components/magicui/typing-animation";
import Footer from "@/components/footer";
import { TextReveal } from "@/components/magicui/text-reveal";

const BLUR_FADE_DELAY = 0.1;


export default function Home() {
  return (
    <div>
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <TextType
              text={["Rifki Ardiy", "Personal Website"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </BlurFade>
        </div>
      </section>
      <section id="background">
        <div className="space-y-12 w-full py-12">
          <GridBackgroundDemo />
        </div>
      </section>
      {/* <div className="relative flex h-screen w-full items-center justify-center">
        <GridBackgroundDemo />
      </div> */}
      {/* <HeroSectionOne /> */}
      <section id="about">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <AboutMeSection />
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center px-4">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <div className="w-full">
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                      className="w-full h-full"
                    />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <TextReveal>
          {'"the plan/t in my hand. I have to risk everything that I have"'}
        </TextReveal>
      </section>
      
      <section id="footer">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <Footer />
        </BlurFade>
      </section>
    </div>
  );
}
