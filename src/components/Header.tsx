import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/oryzeno-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, role, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLinks = [
    { id: "about", label: "About" },
    { id: "courses", label: "Courses" },
    { id: "mentors", label: "Mentors" },
    { id: "contact", label: "Contact" },
  ];

  const handleScrollLink = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Oryzeno Logo" className="h-11 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {scrollLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollLink(link.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${scrolled ? "text-foreground/80 hover:text-foreground hover:bg-muted" : "text-white/80 hover:text-white hover:bg-white/10"}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className={`gap-2 ${!scrolled ? "border-white/30 text-white hover:bg-white/10" : ""}`}>
                    My Account
                    <ChevronDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to={role === "founder" ? "/founder-dashboard" : "/dashboard"}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm" className={!scrolled ? "text-white hover:bg-white/10" : ""}>
                  <Link to="/login" className="gap-2">
                    <LogIn size={16} />
                    Login
                  </Link>
                </Button>
                <Button asChild size="sm" className="gradient-primary text-white rounded-lg">
                  <Link to="/founder-login">Founder Portal</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "hover:bg-muted" : "hover:bg-white/10 text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2 border-t border-border/30 pt-4 bg-card/95 backdrop-blur-md rounded-xl p-4 -mx-2">
            {scrollLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollLink(link.id)}
                className="px-4 py-2 rounded-lg font-medium text-foreground/80 hover:text-foreground hover:bg-muted text-left transition-all"
              >
                {link.label}
              </button>
            ))}

            <div className="border-t border-border mt-2 pt-4 space-y-2">
              {user ? (
                <>
                  <Link to={role === "founder" ? "/founder-dashboard" : "/dashboard"} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg font-medium text-foreground hover:bg-muted">
                    Dashboard
                  </Link>
                  <button onClick={() => { handleSignOut(); setIsMenuOpen(false); }} className="w-full text-left px-4 py-2 rounded-lg font-medium text-destructive hover:bg-destructive/10">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg font-medium text-foreground hover:bg-muted">
                    Team Login
                  </Link>
                  <Link to="/founder-login" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg font-medium gradient-primary text-white text-center rounded-lg">
                    Founder Portal
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
