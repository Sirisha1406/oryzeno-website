import { Linkedin } from "lucide-react";
import Layout from "@/components/Layout";

const teamMembers = [
  {
    name: "Rachakonda Shireesha Sagar",
    role: "Founder",
    linkedin: "", // Will be updated later
  },
  {
    name: "Pala Deepak",
    role: "Tech Lead",
    linkedin: "", // Will be updated later
  },
  {
    name: "Creative Lead",
    role: "Creative Lead",
    linkedin: "", // Will be updated later
  },
  {
    name: "Addetla Kavya",
    role: "Outreach Lead",
    linkedin: "", // Will be updated later
  },
  {
    name: "Annapureddy Gayathri",
    role: "Outreach Associate",
    linkedin: "", // Will be updated later
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Oryzeno
          </h1>
          <p className="text-xl text-primary-foreground/80">
            Our story, our mission, our team
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg mb-6">
                Oryzeno was born from a simple observation: many talented students in local schools 
                and colleges were unaware of the technological revolution happening around them. 
                While AI and coding were reshaping industries worldwide, these opportunities weren't 
                reaching students who needed them most.
              </p>
              <p className="text-lg mb-6">
                Founded by <strong className="text-foreground">Rachakonda Shireesha Sagar</strong>, 
                Oryzeno set out to bridge this gap. We believe that every student deserves to 
                understand the technologies that will define their future careers.
              </p>
              <p className="text-lg">
                Our approach is simple and honest — no complex jargon, no intimidating concepts. 
                We meet students where they are and guide them step by step into the world of 
                AI and programming, preparing them to become the digital pioneers of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm text-center"
              >
                <div className="w-20 h-20 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                {member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
