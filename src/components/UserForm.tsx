
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { UserData } from "@/types/user";
import { statesList, nationalityList, streamsList } from "@/utils/constants";
import { ChevronRight, ChevronLeft } from "lucide-react";

type Props = {
  onSubmit: (data: UserData) => void;
};

const UserForm = ({ onSubmit }: Props) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<UserData>>({
    education: {},
  });

  const updateForm = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((s) => s + 1);
      return;
    }
    onSubmit(formData as UserData);
  };

  return (
    <Card className="glass-card max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="form-step space-y-4">
            <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
            
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                required
                onChange={(e) => updateForm("dateOfBirth", new Date(e.target.value))}
              />
            </div>

            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select required onValueChange={(value) => updateForm("gender", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="transgender">Transgender</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select required onValueChange={(value) => updateForm("category", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="sc">SC</SelectItem>
                  <SelectItem value="st">ST</SelectItem>
                  <SelectItem value="obc">OBC</SelectItem>
                  <SelectItem value="ews">EWS</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="isPWD"
                onCheckedChange={(checked) => updateForm("isPWD", checked)}
              />
              <Label htmlFor="isPWD">Person with Disability (PWD)</Label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step space-y-4">
            <h2 className="text-xl font-semibold mb-4">Education & Status</h2>
            
            <div>
              <Label htmlFor="education.level">Education Level</Label>
              <Select
                required
                onValueChange={(value) => updateForm("education", { ...formData.education, level: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high_school">High School</SelectItem>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.education?.level && formData.education.level !== "high_school" && (
              <div>
                <Label htmlFor="education.stream">Stream</Label>
                <Select
                  required
                  onValueChange={(value) => updateForm("education", { ...formData.education, stream: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select stream" />
                  </SelectTrigger>
                  <SelectContent>
                    {streamsList.map((stream) => (
                      <SelectItem key={stream} value={stream.toLowerCase()}>
                        {stream}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label htmlFor="education.yearOrSemester">Year/Semester</Label>
              <Input
                type="number"
                min="1"
                max="8"
                required
                onChange={(e) => updateForm("education", { ...formData.education, yearOrSemester: parseInt(e.target.value) })}
              />
            </div>

            <div>
              <Label htmlFor="maritalStatus">Marital Status</Label>
              <Select required onValueChange={(value) => updateForm("maritalStatus", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select marital status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                  <SelectItem value="divorced">Divorced</SelectItem>
                  <SelectItem value="widowed">Widowed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step space-y-4">
            <h2 className="text-xl font-semibold mb-4">Location & Preferences</h2>
            
            <div>
              <Label htmlFor="domicileState">Domicile State</Label>
              <Select required onValueChange={(value) => updateForm("domicileState", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {statesList.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase()}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Select required onValueChange={(value) => updateForm("nationality", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select nationality" />
                </SelectTrigger>
                <SelectContent>
                  {nationalityList.map((nationality) => (
                    <SelectItem key={nationality} value={nationality.toLowerCase()}>
                      {nationality}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="sectorPreference">Sector Preference</Label>
              <Select required onValueChange={(value) => updateForm("sectorPreference", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="civil_services">Civil Services</SelectItem>
                  <SelectItem value="defence">Defence</SelectItem>
                  <SelectItem value="banking">Banking</SelectItem>
                  <SelectItem value="railways">Railways</SelectItem>
                  <SelectItem value="teaching">Teaching</SelectItem>
                  <SelectItem value="law">Law</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-4">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep((s) => s - 1)}
              className="flex items-center"
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
          )}
          <Button
            type="submit"
            className="ml-auto flex items-center"
          >
            {step < 3 ? (
              <>
                Next <ChevronRight className="ml-1 h-4 w-4" />
              </>
            ) : (
              "Check Eligibility"
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
