
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { MessageSquare, LayoutDashboard, LogOut } from "lucide-react";

const AppHeader = () => {
  const { isAdmin, logout } = useAuth();

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-xl flex items-center gap-2 text-feedback">
          <MessageSquare className="h-5 w-5" />
          <span>FeedbackSystem</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm font-medium hover:text-feedback">
            Submit Feedback
          </Link>
          
          {isAdmin && (
            <>
              <Link to="/admin" className="text-sm font-medium hover:text-feedback">
                Dashboard
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={logout} 
                className="gap-1 text-sm"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </>
          )}
          
          {!isAdmin && (
            <Link to="/admin">
              <Button variant="outline" size="sm" className="gap-1 text-sm">
                <LayoutDashboard className="h-4 w-4" />
                Admin
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
