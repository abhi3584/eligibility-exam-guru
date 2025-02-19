
import { useState, useEffect } from "react";
import UserForm from "@/components/UserForm";
import EligibilityResults from "@/components/EligibilityResults";
import type { UserData } from "@/types/user";
import Header from "@/components/Header";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen pb-12 relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl animate-[floating_8s_ease-in-out_infinite]" style={{ animationDelay: '-1s' }} />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl animate-[floating_10s_ease-in-out_infinite]" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto px-4 mt-8">
          {!userData ? (
            <UserForm onSubmit={setUserData} />
          ) : (
            <EligibilityResults userData={userData} onReset={() => setUserData(null)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
