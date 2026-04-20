import React from "react";
import { Formik, Form } from "formik";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { serviceSchema } from "@/schemas/schemas";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const initialValues = {
  serviceHeading: "",
  serviceName: "",
  service: "",
  fee: "",
};

const AddNewService = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      // TODO: integrate save API
      console.log("Service payload:", values);
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
        validationSchema={serviceSchema}
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
                <h1 className="text-2xl font-bold text-text">Add New Services</h1>
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
                label="Service Name"
                name="serviceName"
                placeholder="Basic Tests"
                value={values.serviceName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.serviceName && errors.serviceName ? errors.serviceName : ""}
              />

              <Input
                label="Service"
                name="service"
                placeholder="Blood Sugar"
                value={values.service}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.service && errors.service ? errors.service : ""}
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

export default AddNewService;
