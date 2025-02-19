
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
  {
    id: "nda",
    name: "National Defence Academy (NDA) Examination",
    ageRange: { min: 16.5, max: 19.5 },
    education: {
      minimumQualification: "high_school",
      requiredStream: ["science"]
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male"],
    pwdEligible: false,
    maritalStatusRequired: ["single"],
    nationalityRequired: ["indian"],
    attemptLimit: null
  },
  {
    id: "cds",
    name: "Combined Defence Services (CDS) Examination",
    ageRange: { min: 20, max: 25 },
    education: {
      minimumQualification: "bachelors"
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male", "female"],
    pwdEligible: false,
    maritalStatusRequired: ["single"],
    nationalityRequired: ["indian"],
    attemptLimit: null
  },
  {
    id: "rrb-ntpc",
    name: "Railway Recruitment Board (NTPC) Examination",
    ageRange: { min: 18, max: 33 },
    education: {
      minimumQualification: "high_school"
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male", "female", "transgender"],
    pwdEligible: true,
    nationalityRequired: ["indian"],
    relaxations: {
      age: {
        sc: 5,
        st: 5,
        obc: 3,
        pwd: 10
      }
    }
  },
  {
    id: "ssc-chsl",
    name: "SSC Combined Higher Secondary Level Examination",
    ageRange: { min: 18, max: 27 },
    education: {
      minimumQualification: "high_school"
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male", "female", "transgender"],
    pwdEligible: true,
    nationalityRequired: ["indian"],
    relaxations: {
      age: {
        sc: 5,
        st: 5,
        obc: 3,
        pwd: 10
      }
    }
  },
  {
    id: "ifs",
    name: "Indian Forest Service Examination",
    ageRange: { min: 21, max: 32 },
    education: {
      minimumQualification: "bachelors",
      requiredStream: ["science", "engineering", "medical"]
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male", "female", "transgender"],
    pwdEligible: true,
    nationalityRequired: ["indian"],
    relaxations: {
      age: {
        sc: 5,
        st: 5,
        obc: 3,
        pwd: 10
      }
    }
  },
  {
    id: "ese",
    name: "Engineering Services Examination",
    ageRange: { min: 21, max: 30 },
    education: {
      minimumQualification: "bachelors",
      requiredStream: ["engineering"]
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male", "female", "transgender"],
    pwdEligible: true,
    nationalityRequired: ["indian"],
    relaxations: {
      age: {
        sc: 5,
        st: 5,
        obc: 3,
        pwd: 10
      }
    }
  },
  {
    id: "ssc-mts",
    name: "SSC Multi-Tasking Staff Examination",
    ageRange: { min: 18, max: 25 },
    education: {
      minimumQualification: "high_school"
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male", "female", "transgender"],
    pwdEligible: true,
    nationalityRequired: ["indian"],
    relaxations: {
      age: {
        sc: 5,
        st: 5,
        obc: 3,
        pwd: 10
      }
    }
  },
  {
    id: "rrb-group-d",
    name: "Railway Recruitment Board Group D Examination",
    ageRange: { min: 18, max: 33 },
    education: {
      minimumQualification: "high_school"
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male", "female", "transgender"],
    pwdEligible: true,
    nationalityRequired: ["indian"],
    relaxations: {
      age: {
        sc: 5,
        st: 5,
        obc: 3,
        pwd: 10
      }
    }
  },
  {
    id: "net",
    name: "National Eligibility Test (NET)",
    ageRange: { min: 0, max: 100 }, // No age limit
    education: {
      minimumQualification: "masters"
    },
    categoryEligible: ["general", "sc", "st", "obc", "ews"],
    genderEligible: ["male", "female", "transgender"],
    pwdEligible: true,
    nationalityRequired: ["indian"],
    relaxations: {}
  }
];
