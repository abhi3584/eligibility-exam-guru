
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { UserData } from "@/types/user";
import { statesList, nationalityList, streamsList } from "@/utils/constants";

type Props = {
  onSubmit: (data: UserData) => void;
};

const UserForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<Partial<UserData>>({
    education: {
      level: "high_school",
      yearOrSemester: 1
    },
    isPWD: false
  });

  const updateForm = (key: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as UserData);
  };

  return (
    <Card className="glass-card max-w-3xl mx-auto p-8">
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Personal Details Section */}
        <div className="form-section space-y-6">
          <h2 className="section-title text-2xl font-semibold text-primary pb-2">
            Personal Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-group">
              <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                Date of Birth
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                required
                className="form-input mt-1"
                onChange={(e) => updateForm("dateOfBirth", new Date(e.target.value))}
              />
            </div>

            <div className="input-group">
              <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
                Gender
              </Label>
              <Select required onValueChange={(value) => updateForm("gender", value)}>
                <SelectTrigger className="form-input mt-1">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="transgender">Transgender</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="input-group">
              <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                Category
              </Label>
              <Select required onValueChange={(value) => updateForm("category", value)}>
                <SelectTrigger className="form-input mt-1">
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

            <div className="input-group flex items-center space-x-2">
              <Switch
                id="isPWD"
                checked={formData.isPWD}
                onCheckedChange={(checked) => updateForm("isPWD", checked)}
                className="data-[state=checked]:bg-primary"
              />
              <Label htmlFor="isPWD" className="text-sm font-medium text-gray-700">
                Person with Disability (PWD)
              </Label>
            </div>
          </div>
        </div>

        {/* Education & Status Section */}
        <div className="form-section space-y-6">
          <h2 className="section-title text-2xl font-semibold text-primary pb-2">
            Education & Status
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-group">
              <Label htmlFor="education.level" className="text-sm font-medium text-gray-700">
                Education Level
              </Label>
              <Select
                required
                value={formData.education?.level}
                onValueChange={(value) => updateForm("education", { ...formData.education, level: value })}
              >
                <SelectTrigger className="form-input mt-1">
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
              <div className="input-group">
                <Label htmlFor="education.stream" className="text-sm font-medium text-gray-700">
                  Stream
                </Label>
                <Select
                  required
                  value={formData.education?.stream}
                  onValueChange={(value) => updateForm("education", { ...formData.education, stream: value })}
                >
                  <SelectTrigger className="form-input mt-1">
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

            <div className="input-group">
              <Label htmlFor="education.yearOrSemester" className="text-sm font-medium text-gray-700">
                Year/Semester
              </Label>
              <Input
                type="number"
                min="1"
                max="8"
                required
                className="form-input mt-1"
                value={formData.education?.yearOrSemester}
                onChange={(e) => updateForm("education", { ...formData.education, yearOrSemester: parseInt(e.target.value) })}
              />
            </div>

            <div className="input-group">
              <Label htmlFor="maritalStatus" className="text-sm font-medium text-gray-700">
                Marital Status
              </Label>
              <Select required onValueChange={(value) => updateForm("maritalStatus", value)}>
                <SelectTrigger className="form-input mt-1">
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
        </div>

        {/* Location & Preferences Section */}
        <div className="form-section space-y-6">
          <h2 className="section-title text-2xl font-semibold text-primary pb-2">
            Location & Preferences
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-group">
              <Label htmlFor="domicileState" className="text-sm font-medium text-gray-700">
                Domicile State
              </Label>
              <Select required onValueChange={(value) => updateForm("domicileState", value)}>
                <SelectTrigger className="form-input mt-1">
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

            <div className="input-group">
              <Label htmlFor="nationality" className="text-sm font-medium text-gray-700">
                Nationality
              </Label>
              <Select required onValueChange={(value) => updateForm("nationality", value)}>
                <SelectTrigger className="form-input mt-1">
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

            <div className="input-group md:col-span-2">
              <Label htmlFor="sectorPreference" className="text-sm font-medium text-gray-700">
                Sector Preference
              </Label>
              <Select required onValueChange={(value) => updateForm("sectorPreference", value)}>
                <SelectTrigger className="form-input mt-1">
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
        </div>

        <Button
          type="submit"
          className="w-full submit-button bg-primary hover:bg-primary/90"
        >
          Check Eligibility
        </Button>
      </form>
    </Card>
  );
};

export default UserForm;
