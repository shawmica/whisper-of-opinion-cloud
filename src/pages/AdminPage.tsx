
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import AdminLogin from "@/components/AdminLogin";
import FeedbackTable from "@/components/FeedbackTable";
import AppHeader from "@/components/AppHeader";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RefreshCcw } from "lucide-react";
import { toast } from "sonner";

const AdminPage = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Admin Dashboard | Feedback System";
  }, []);

  const handleRefresh = () => {
    window.location.reload();
    toast.info("Refreshing data...");
  };

  if (!isAdmin) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-feedback">Feedback Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleRefresh}
              className="flex items-center gap-1"
            >
              <RefreshCcw className="h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>
        <FeedbackTable />
      </div>
    </div>
  );
};

export default AdminPage;
