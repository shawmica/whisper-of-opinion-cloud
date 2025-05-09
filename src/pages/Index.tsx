
import FeedbackForm from "@/components/FeedbackForm";
import AppHeader from "@/components/AppHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      <main className="flex-1 container py-8">
        <div className="max-w-md mx-auto">
          <FeedbackForm />
        </div>
      </main>
    </div>
  );
};

export default Index;
