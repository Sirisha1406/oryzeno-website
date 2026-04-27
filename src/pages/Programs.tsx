import { Link } from "react-router-dom";
import { Brain, Code, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const programs = [
  {
    icon: Brain,
    title: "AI Awareness Sessions",
    description:
      "Interactive sessions introducing students to artificial intelligence — what it is, how it works, and how it's changing the world around us.",
    highlights: [
      "Understanding AI basics in simple terms",
      "Real-world AI applications in daily life",
      "Future career opportunities in AI",
      "Hands-on demos with AI tools",
    ],
  },
  {
    icon: Code,
    title: "Coding Basics Workshops",
    description:
      "Beginner-friendly workshops teaching fundamental programming concepts. No prior experience needed — just curiosity and willingness to learn.",
    highlights: [
      "Introduction to programming logic",
      "Hands-on coding exercises",
      "Building simple projects",
      "Problem-solving mindset development",
    ],
  },
  {
    icon: Rocket,
    title: "Future Tech Orientation for Schools",
    description:
      "Comprehensive orientation programs designed for schools, covering emerging technologies and their impact on future careers.",
    highlights: [
      "Overview of emerging technologies",
      "Career guidance in tech fields",
      "Interactive Q&A sessions",
      "Customized for different age groups",
    ],
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Programs
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Practical, hands-on learning experiences designed to prepare students for the digital future.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <program.icon className="text-secondary" size={32} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {program.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {program.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {program.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className="flex items-center gap-2 text-foreground"
                          >
                            <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Interested in Our Programs?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to bring our workshops and awareness sessions to your school or college. 
            Get in touch to discuss how we can work together.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
