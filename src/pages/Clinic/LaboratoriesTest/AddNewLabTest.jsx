import React from "react";
import { Formik, Form } from "formik";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { labTestSchema } from "@/schemas/schemas";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const initialValues = {
  serviceHeading: "",
  testName: "",
  fee: "",
};

const AddNewLabTest = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      // TODO: integrate save API
      console.log("Lab test payload:", values);
      navigate(-1);
    } catch (error) {
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="p-6 mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={labTestSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
          <Form>
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="text-text opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <FiArrowLeft size={22} />
                </button>
                <h1 className="text-2xl font-bold text-text">Add New Test</h1>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-secondary font-semibold text-base hover:opacity-80 transition-opacity cursor-pointer disabled:opacity-50"
              >
                Save
              </button>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-5">
              <Input
                label="Service Heading (Optional)"
                name="serviceHeading"
                placeholder="General Consultation"
                value={values.serviceHeading}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.serviceHeading && errors.serviceHeading ? errors.serviceHeading : ""}
              />

              <Input
                label="Test Name"
                name="testName"
                placeholder="Urine Test"
                value={values.testName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.testName && errors.testName ? errors.testName : ""}
              />

              <Input
                label="Fee"
                name="fee"
                placeholder="3,000 CFA"
                value={values.fee}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fee && errors.fee ? errors.fee : ""}
              />
            </div>

            {/* Save Button */}
            <div className="mt-8">
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
                loaderSize={25}
              >
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewLabTest;
