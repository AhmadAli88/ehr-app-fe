export const samplePackage = {
  id: "pkg_001",
  name: "Clinic Package",
  status: "Active",
  price: "10,000",
  currency: "CFA",
  duration: "1-Month",
  usps: `Available Services:
1. Unlimited General Consultations
   • In-person or telemedicine.
2. 2 Specialist Consultations per Month
   • Access to Cardiologists, Dermatologists, etc.
3. Emergency Consultations
   • 24/7 priority access.
4. Priority Appointments
   • Faster booking and scheduling.

Extra Benefits:
   • Online access to medical records.
   • 24/7 support and exclusive discounts.`,
  services: [
    {
      heading: "Unlimited General Consultations",
      description: "In-person or telemedicine.",
    },
    {
      heading: "2 Specialist Consultations per Month",
      description: "Access to Cardiologists, Dermatologists, etc.",
    },
    {
      heading: "Emergency Consultations",
      description: "24/7 priority access.",
    },
    {
      heading: "Priority Appointments",
      description: "Faster booking and scheduling.",
    },
    { isSection: true, heading: "Extra Benefits:" },
    {
      heading: "Online access to medical records.",
    },
    {
      heading: "24/7 support and exclusive discounts.",
    },
  ],
};
