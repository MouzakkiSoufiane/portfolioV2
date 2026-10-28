import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { Expertise } from "@/components/sections/expertise";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills, Education } from "@/components/sections/skills-education";
import { Contact } from "@/components/sections/contact";
import { Reveal } from "@/components/motion/reveal";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Reveal>
        <Work />
      </Reveal>
      <Expertise />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}
