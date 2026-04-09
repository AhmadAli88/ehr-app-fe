import * as Yup from "yup";

export const serviceSchema = Yup.object({
  serviceHeading: Yup.string(),
  serviceName: Yup.string().required("Service name is required"),
  service: Yup.string().required("Service description is required"),
  fee: Yup.string()
    .matches(/^[0-9,]+$/, "Enter a valid fee amount")
    .required("Fee is required"),
});

export const labTestSchema = Yup.object({
  serviceHeading: Yup.string(),
  testName: Yup.string().required("Test name is required"),
  fee: Yup.string()
    .matches(/^[0-9,]+$/, "Enter a valid fee amount")
    .required("Fee is required"),
});

export const addPackageSchema = Yup.object({
  title: Yup.string().required("Package title is required"),
  fee: Yup.string()
    .matches(/^[0-9,]+$/, "Enter a valid fee amount")
    .required("Fee is required"),
  duration: Yup.string().required("Duration is required"),
  status: Yup.string()
    .oneOf(["Active", "Inactive"], "Select a valid status")
    .required("Status is required"),
  usps: Yup.string().required("Package USP's are required"),
});
