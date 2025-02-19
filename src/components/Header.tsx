
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          <h1 className="text-2xl font-semibold text-primary">Exam Eligibility Calculator</h1>
        </div>
        <p className="mt-2 text-muted-foreground">
          Check your eligibility for top government exams and track your attempts
        </p>
      </div>
    </header>
  );
};

export default Header;
