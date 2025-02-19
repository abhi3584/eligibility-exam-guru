
import { useState } from "react";
import UserForm from "@/components/UserForm";
import EligibilityResults from "@/components/EligibilityResults";
import type { UserData } from "@/types/user";
import Header from "@/components/Header";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 pb-12">
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
        >
          {isDark ? (
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          ) : (
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          )}
        </Button>
      </div>
      <Header />
      <div className="container mx-auto px-4 mt-8">
        {!userData ? (
          <UserForm onSubmit={setUserData} />
        ) : (
          <EligibilityResults userData={userData} onReset={() => setUserData(null)} />
        )}
      </div>
    </div>
  );
};

export default Index;
