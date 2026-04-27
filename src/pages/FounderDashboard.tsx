import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Users, BookOpen, Calendar, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/oryzeno-logo.png";

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
}

const FounderDashboard = () => {
  const { user, role, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [members, setMembers] = useState<Profile[]>([]);
  const [membersLoading, setMembersLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && (!user || role !== "founder")) {
      navigate("/founder-login");
    }
  }, [user, role, isLoading, navigate]);

  useEffect(() => {
    const fetchMembers = async () => {
      if (role === "founder") {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && data) {
          setMembers(data);
        }
        setMembersLoading(false);
      }
    };

    fetchMembers();
  }, [role]);

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

  if (!user || role !== "founder") return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Oryzeno" className="h-10 bg-white rounded p-1" />
              <div className="hidden sm:block">
                <span className="text-sm opacity-80">Founder Dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <Shield size={16} className="text-secondary" />
                <span className="text-sm">Founder Access</span>
              </div>
              <Button
                variant="secondary"
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
            Founder Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your team and monitor Oryzeno's progress
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Users className="text-secondary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Members</p>
                <p className="text-2xl font-bold text-foreground">
                  {membersLoading ? "..." : members.length}
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
                <p className="text-2xl font-bold text-foreground">3</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Events</p>
                <p className="text-2xl font-bold text-foreground">0</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <Settings className="text-destructive" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Settings</p>
                <p className="text-lg font-semibold text-foreground">Manage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Members List */}
        <div className="bg-card rounded-xl shadow-sm border border-border">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-semibold text-foreground">Team Members</h2>
            <p className="text-sm text-muted-foreground mt-1">
              All registered members of Oryzeno
            </p>
          </div>

          {membersLoading ? (
            <div className="p-8 text-center text-muted-foreground">
              Loading members...
            </div>
          ) : members.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No members registered yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium text-muted-foreground">
                      Name
                    </th>
                    <th className="text-left p-4 font-medium text-muted-foreground">
                      Email
                    </th>
                    <th className="text-left p-4 font-medium text-muted-foreground">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr
                      key={member.id}
                      className="border-t border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 text-foreground">
                        {member.full_name || "—"}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {member.email}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {new Date(member.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FounderDashboard;
