
import { useState } from "react";
import UserForm from "@/components/UserForm";
import EligibilityResults from "@/components/EligibilityResults";
import type { UserData } from "@/types/user";
import Header from "@/components/Header";

const Index = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-12">
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
