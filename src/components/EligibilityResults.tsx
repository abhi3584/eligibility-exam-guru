import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { examData } from "@/utils/constants";
import type { UserData } from "@/types/user";
import { differenceInYears } from "date-fns";
import { CheckCircle, XCircle, AlertCircle, ArrowLeft, BookOpen, ScrollText } from "lucide-react";

type Props = {
  userData: UserData;
  onReset: () => void;
};

const EligibilityResults = ({ userData, onReset }: Props) => {
  const calculateAge = (dateOfBirth: Date) => {
    return differenceInYears(new Date(), dateOfBirth);
  };

  const checkEligibility = (exam: typeof examData[0]) => {
    const age = calculateAge(userData.dateOfBirth);
    let maxAge = exam.ageRange.max;
    
    if (exam.relaxations?.age) {
      const relaxation = exam.relaxations.age[userData.category as keyof typeof exam.relaxations.age] || 0;
      maxAge += relaxation;
    }

    const ageEligible = age >= exam.ageRange.min && age <= maxAge;
    const categoryEligible = exam.categoryEligible.includes(userData.category);
    const genderEligible = exam.genderEligible.includes(userData.gender);
    const pwdEligible = !userData.isPWD || exam.pwdEligible;
    const nationalityEligible = exam.nationalityRequired.includes(userData.nationality);
    const educationEligible = userData.education.level >= exam.education.minimumQualification;

    return {
      eligible: ageEligible && categoryEligible && genderEligible && pwdEligible && nationalityEligible && educationEligible,
      criteria: {
        age: ageEligible,
        category: categoryEligible,
        gender: genderEligible,
        pwd: pwdEligible,
        nationality: nationalityEligible,
        education: educationEligible,
      },
    };
  };

  const handleSyllabusClick = (examId: string) => {
    console.log(`Show syllabus for exam: ${examId}`);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onReset}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Form
        </Button>
        <Badge variant="outline" className="text-sm">
          🎂 Age: {calculateAge(userData.dateOfBirth)} years
        </Badge>
      </div>

      <div className="grid gap-6">
        {examData.map((exam) => {
          const { eligible, criteria } = checkEligibility(exam);
          
          return (
            <Card key={exam.id} className="p-6 result-card">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    {exam.name}
                    {eligible ? "✨" : ""}
                  </h3>
                  <Badge
                    variant={eligible ? "default" : "destructive"}
                    className="mt-2"
                  >
                    {eligible ? "✅ Eligible" : "❌ Not Eligible"}
                  </Badge>
                </div>
                {eligible ? (
                  <CheckCircle className="h-6 w-6 text-success animate-bounce" />
                ) : (
                  <XCircle className="h-6 w-6 text-error" />
                )}
              </div>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                <CriteriaItem
                  label="Age"
                  eligible={criteria.age}
                  details={`${exam.ageRange.min}-${exam.ageRange.max} years`}
                />
                <CriteriaItem
                  label="Category"
                  eligible={criteria.category}
                  details={exam.categoryEligible.join(", ")}
                />
                <CriteriaItem
                  label="Gender"
                  eligible={criteria.gender}
                  details={exam.genderEligible.join(", ")}
                />
                <CriteriaItem
                  label="PWD Status"
                  eligible={criteria.pwd}
                  details={exam.pwdEligible ? "Eligible" : "Not Eligible"}
                />
                <CriteriaItem
                  label="Nationality"
                  eligible={criteria.nationality}
                  details={exam.nationalityRequired.join(", ")}
                />
                <CriteriaItem
                  label="Education"
                  eligible={criteria.education}
                  details={exam.education.minimumQualification}
                />
              </div>

              {exam.attemptLimit && (
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Maximum attempts allowed: {exam.attemptLimit}
                </div>
              )}

              {eligible && (
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="syllabus-button group"
                    onClick={() => handleSyllabusClick(exam.id)}
                  >
                    <BookOpen className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    <span className="mr-2">See Full Details Syllabus</span>
                    <span className="text-lg">📚</span>
                  </Button>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const CriteriaItem = ({
  label,
  eligible,
  details,
}: {
  label: string;
  eligible: boolean;
  details: string;
}) => (
  <div className="flex items-start space-x-2">
    {eligible ? (
      <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
    ) : (
      <XCircle className="h-4 w-4 text-error shrink-0 mt-0.5" />
    )}
    <div>
      <p className="font-medium">{label}</p>
      <p className="text-sm text-muted-foreground">{details}</p>
    </div>
  </div>
);

export default EligibilityResults;
