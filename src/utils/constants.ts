
export const statesList = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export const nationalityList = [
  "Indian",
  "OCI",
  "PIO",
  "Bhutanese",
  "Nepalese",
];

export const streamsList = [
  "Arts",
  "Commerce",
  "Science",
  "Engineering",
  "Medical",
  "Law",
  "Management",
  "Others",
];

export const examData = [
  {
    id: "upsc-cse",
    name: "UPSC Civil Services Examination",
    ageRange: { min: 21, max: 32 },
    education: {
      minimumQualification: "bachelors",
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male", "female", "transgender"],
    pwdEligible: true,
    nationalityRequired: ["indian"],
    attemptLimit: 6,
    relaxations: {
      age: {
        sc: 5,
        st: 5,
        obc: 3,
        pwd: 10
      }
    }
  },
  // Add more exams here
];
