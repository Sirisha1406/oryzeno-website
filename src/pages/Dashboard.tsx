import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/oryzeno-logo.png";

const Dashboard = () => {
  const { user, role, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Oryzeno" className="h-10" />
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user.email}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="gap-2"
              >
                <LogOut size={16} />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome to Oryzeno
          </h1>
          <p className="text-muted-foreground mt-2">
            Your member dashboard
          </p>
        </div>

        {/* Quick Stats / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <User className="text-secondary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Your Role</p>
                <p className="text-lg font-semibold text-foreground capitalize">
                  {role || "Member"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <BookOpen className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Programs</p>
                <p className="text-lg font-semibold text-foreground">3 Active</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Upcoming Events</p>
                <p className="text-lg font-semibold text-foreground">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Getting Started
          </h2>
          <p className="text-muted-foreground mb-4">
            Welcome to the Oryzeno team! As a member, you'll have access to
            resources, program materials, and updates. Stay tuned for more
            features coming soon.
          </p>
          <Button
            variant="outline"
            onClick={() => navigate("/programs")}
          >
            View Programs
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
