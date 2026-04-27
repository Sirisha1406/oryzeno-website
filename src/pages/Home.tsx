import { useState } from "react";
import { ArrowRight, Sparkles, Target, Briefcase, BookOpen, TrendingUp, ChevronLeft, ChevronRight, X, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Layout from "@/components/Layout";
import logo from "@/assets/oryzeno-logo.png";
import surveyQr from "@/assets/survey-qr.png";

const SURVEY_URL = "https://forms.gle/YOUR_GOOGLE_FORM_LINK";

const courses = [
  {
    name: "Python Programming",
    desc: "Master Python from basics to advanced concepts with hands-on projects.",
    color: "from-primary to-secondary",
    syllabus: ["Introduction to Python", "Variables & Data Types", "Control Flow", "Functions & Modules", "OOP Basics", "File Handling", "Mini Projects"],
    duration: "6 Weeks (Weekend Batches)",
  },
  {
    name: "Java Development",
    desc: "Build strong foundations in Java with real-world application development.",
    color: "from-secondary to-accent",
    syllabus: ["Java Fundamentals", "OOP Principles", "Collections Framework", "Exception Handling", "Multithreading Basics", "JDBC Introduction", "Capstone Project"],
    duration: "8 Weeks (Weekend Batches)",
  },
  {
    name: "MS Word Mastery",
    desc: "Professional document creation and formatting for academic & office use.",
    color: "from-accent to-primary",
    syllabus: ["Document Basics", "Formatting & Styles", "Tables & Graphics", "Mail Merge", "Headers, Footers & TOC", "Templates & Macros", "Professional Documents"],
    duration: "3 Weeks (Intensive)",
  },
  {
    name: "Web Development",
    desc: "Create modern, responsive websites using HTML, CSS, and JavaScript.",
    color: "from-primary to-accent",
    syllabus: ["HTML5 Fundamentals", "CSS3 & Flexbox/Grid", "JavaScript Essentials", "DOM Manipulation", "Responsive Design", "React Introduction", "Portfolio Project"],
    duration: "10 Weeks (Weekend Batches)",
  },
  {
    name: "Data Analytics",
    desc: "Learn to analyze, visualize, and interpret data for real-world insights.",
    color: "from-secondary to-primary",
    syllabus: ["Data Analytics Overview", "Excel for Analytics", "SQL Fundamentals", "Python for Data", "Data Visualization", "Dashboard Creation", "Case Study Project"],
    duration: "8 Weeks (Weekend Batches)",
  },
];

const mentors = [
  { name: "Rahul Sharma", expertise: "Python & AI", bio: "10+ years in Python development and AI research. Passionate about making complex concepts simple for students.", avatar: "RS" },
  { name: "Priya Patel", expertise: "Java & Backend", bio: "Senior Java developer with expertise in enterprise applications. Loves mentoring young developers.", avatar: "PP" },
  { name: "Arjun Reddy", expertise: "Web Development", bio: "Full-stack web developer and open-source contributor. Building the web since 2015.", avatar: "AR" },
  { name: "Sneha Gupta", expertise: "Data Analytics", bio: "Data scientist with experience at top tech firms. Specializes in making data tell stories.", avatar: "SG" },
  { name: "Vikram Singh", expertise: "MS Office & Productivity", bio: "Corporate trainer with 8+ years helping professionals master productivity tools.", avatar: "VS" },
];

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative gradient-hero min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm text-white/90 font-medium">Cultivating Digital Pioneers</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-heading">
              Building Future-Ready
              <span className="block mt-2">Students with <span className="text-accent">Technology</span></span>
            </h1>

            <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cultivating digital pioneers through practical learning — empowering students with real-world digital skills for tomorrow's careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl text-base px-8 h-13 rounded-xl font-semibold" onClick={() => scrollTo("contact")}>
                Book a Session <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8 h-13 rounded-xl font-semibold" asChild>
                <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer">Fill Survey</a>
              </Button>
            </div>

            {/* QR Code placeholder */}
            <div className="inline-flex flex-col items-center glass rounded-2xl p-4">
              <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer">
                <img src={surveyQr} alt="Survey QR Code" className="w-28 h-28 rounded-xl bg-white p-1" />
              </a>
              <span className="text-white/60 text-xs mt-2">Scan to fill survey</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 font-heading">
              What is <span className="text-gradient">ORYZENO</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ORYZENO is dedicated to delivering practical, skill-based education for school and college students. 
              We bridge the gap between traditional learning and real-world digital skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Skill Focus", desc: "Targeted skill development programs designed for real-world application." },
              { icon: Briefcase, title: "Career Ready", desc: "Prepare students to excel in technology-driven professional environments." },
              { icon: BookOpen, title: "Practical Learning", desc: "Hands-on projects and workshops — not just theory." },
              { icon: TrendingUp, title: "Growth Impact", desc: "Measurable growth in digital literacy and confidence." },
            ].map((item, i) => (
              <Card key={i} className="group hover:shadow-elevated transition-all duration-300 border-border/50 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <item.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Programs</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 font-heading">
              Courses We <span className="text-gradient">Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <Card key={i} className="group hover:shadow-elevated transition-all duration-300 border-border/50 hover:-translate-y-1 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                <CardContent className="p-7">
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">{course.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{course.desc}</p>
                  <Button variant="outline" size="sm" className="rounded-lg" onClick={() => setSelectedCourse(course)}>
                    View Details <ArrowRight className="ml-1" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{selectedCourse?.name}</DialogTitle>
            <DialogDescription>{selectedCourse?.desc}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-2">Duration</h4>
              <p className="text-muted-foreground text-sm">{selectedCourse?.duration}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-2">Beginner Syllabus</h4>
              <ul className="space-y-2">
                {selectedCourse?.syllabus.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold shrink-0">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-muted-foreground italic">✨ All courses include hands-on projects and real-world assignments.</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mentors Section */}
      <section id="mentors" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Team</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 font-heading">
              Meet Our <span className="text-gradient">Mentors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {mentors.map((mentor, i) => (
              <Card
                key={i}
                className="group cursor-pointer hover:shadow-elevated transition-all duration-300 border-border/50 hover:-translate-y-1"
                onClick={() => setSelectedMentor(mentor)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold font-heading group-hover:scale-110 transition-transform">
                    {mentor.avatar}
                  </div>
                  <h3 className="text-base font-semibold text-foreground font-heading">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{mentor.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Detail Modal */}
      <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold font-heading">
                {selectedMentor?.avatar}
              </div>
              <div>
                <DialogTitle className="font-heading text-xl">{selectedMentor?.name}</DialogTitle>
                <DialogDescription>{selectedMentor?.expertise}</DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <p className="text-muted-foreground text-sm leading-relaxed mt-2">{selectedMentor?.bio}</p>
        </DialogContent>
      </Dialog>

      {/* Survey Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-[20%] w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">Help Us Improve</h2>
          <p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">
            Fill a short survey to partner with us and shape the future of digital education.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl text-base px-10 h-13 rounded-xl font-semibold" asChild>
              <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer">
                Fill Survey <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-4 inline-block">
              <img src={surveyQr} alt="Survey QR Code" className="w-32 h-32 rounded-xl bg-white p-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 font-heading">
              Contact <span className="text-gradient">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold font-heading mb-4">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions about our courses? Want to bring ORYZENO to your institution? Reach out to us.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "info@oryzeno.in", href: "mailto:info@oryzeno.in" },
                  { icon: Phone, label: "+91 7671802363", href: "tel:+917671802363" },
                  { icon: MapPin, label: "Hyderabad, India", href: undefined },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="text-white" size={18} />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary transition-colors">{item.label}</a>
                    ) : (
                      <span className="text-foreground">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {["LinkedIn", "Instagram"].map((s) => (
                  <a key={s} href="#" className="px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm text-muted-foreground">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <Input placeholder="Your name" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input type="email" placeholder="you@example.com" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <textarea placeholder="How can we help?" className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[120px] resize-none" />
                  </div>
                  <Button className="w-full gradient-primary text-white rounded-lg h-11">
                    Send Message <Send className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
