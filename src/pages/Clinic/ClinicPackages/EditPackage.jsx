import React from "react";
import { Formik, Form } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { addPackageSchema } from "@/schemas/schemas";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SearchableSelect from "@/components/ui/SearchableSelect";
import { FiArrowLeft } from "react-icons/fi";

const DURATION_OPTIONS = ["1-Month", "3-Months", "6-Months", "1-Year"];
const STATUS_OPTIONS = ["Active", "Inactive"];

const EditPackage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const pkg = state?.package;
  const packageId = state?.id;

  const initialValues = {
    title: pkg?.name || "",
    fee: pkg?.price || "",
    duration: pkg?.duration || "",
    status: pkg?.status || "",
    usps: pkg?.usps || "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      // TODO: integrate update API
      console.log("Update package id:", packageId, "payload:", values);
      navigate(-1);
    } catch (error) {
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="p-6 mx-auto">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-700 hover:text-gray-900 mb-6 cursor-pointer"
      >
        <FiArrowLeft className="mr-2" /> Back
      </button>
      <h1 className="text-2xl font-bold text-text mb-6">Edit Package</h1>

      <Card shadow="md" padding="md" border>
        <Formik
          initialValues={initialValues}
          validationSchema={addPackageSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form className="space-y-5">
              <Input
                label="Package Title"
                name="title"
                type="text"
                placeholder="Clinic Package"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.title && errors.title ? errors.title : ""}
              />

              <Input
                label="Fee"
                name="fee"
                type="text"
                placeholder="10,000 CFA"
                value={values.fee}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fee && errors.fee ? errors.fee : ""}
              />

              <SearchableSelect
                label="Duration"
                name="duration"
                options={DURATION_OPTIONS}
                value={values.duration}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select duration"
                error={errors.duration}
                touched={touched.duration}
              />

              <SearchableSelect
                label="Status"
                name="status"
                options={STATUS_OPTIONS}
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Select status"
                error={errors.status}
                touched={touched.status}
              />

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Package USP&apos;s
                </label>
                <textarea
                  name="usps"
                  value={values.usps}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={8}
                  className={`w-full px-4 py-3 border text-xs sm:text-sm rounded-lg outline-none focus:ring-2 focus:ring-opacity-50 transition-all resize-none ${
                    touched.usps && errors.usps
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-[#0ebe7f] focus:ring-[#0ebe7f]"
                  }`}
                />
                {touched.usps && errors.usps && (
                  <p className="mt-1 text-sm text-red-500">{errors.usps}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
                loaderSize={25}
              >
                Save Changes
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default EditPackage;
