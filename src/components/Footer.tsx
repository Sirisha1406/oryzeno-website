import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/oryzeno-logo.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img src={logo} alt="Oryzeno Logo" className="h-12 w-auto mb-4 bg-white rounded-lg p-2" />
            <p className="text-white/60 text-sm leading-relaxed">
              Cultivating Digital Pioneers — empowering students with practical digital skills.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-5 font-heading">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {["about", "courses", "mentors", "contact"].map((id) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-white/60 hover:text-white transition-colors text-sm text-left capitalize">
                  {id}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-5 font-heading">Portals</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/login" className="text-white/60 hover:text-white transition-colors text-sm">Team Login</Link>
              <Link to="/founder-login" className="text-white/60 hover:text-white transition-colors text-sm">Founder Portal</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-5 font-heading">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@oryzeno.in" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Mail size={16} /> info@oryzeno.in
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm">
                <Phone size={16} /> +91 98765 43210
              </a>
              <span className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin size={16} /> Hyderabad, India
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} ORYZENO. All rights reserved.</p>
          <div className="flex gap-4">
            {["LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-white/40 hover:text-white text-sm transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
