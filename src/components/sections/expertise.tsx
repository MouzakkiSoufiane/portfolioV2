import { Code2, MonitorSmartphone, Network, UsersRound } from "lucide-react";
import { expertise } from "@/data/skills";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/reveal";
import { content } from "@/data/content";

const icons = {
  code: Code2,
  devices: MonitorSmartphone,
  network: Network,
  people: UsersRound,
};

export function Expertise() {
  return (
    <section className="section container" aria-labelledby="expertise-title">
      <SectionHeading
        number="02"
        label="What I do"
        title={
          <span id="expertise-title">
            From idea to <span className="accent">interface.</span>
          </span>
        }
        description={content.expertise.introduction}
      />
      <div className="expertise-grid">
        {expertise.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="expertise-card">
                <div className="expertise-top">
                  <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
