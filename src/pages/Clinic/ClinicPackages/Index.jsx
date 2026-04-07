import React from "react";
import { FiEdit2, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import List from "@/components/ui/List";
import { samplePackage } from "@/constant/staticData";
import { PATH } from "../../../../config";

const ClinicPackages = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 mx-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text">Clinic Package</h1>
        <Button
          variant="secondary"
          size="md"
          icon={FiPlus}
          onClick={() => navigate(PATH.CLINIC_ADD_PACKAGE)}
        >
          Add New Package
        </Button>
      </div>

      {/* Package Card */}
      <Card shadow="md" padding="md" border>
        {/* Card Header */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-bold text-text">{samplePackage.name}</h2>
          <div className="flex flex-col items-end gap-1">
            <button
              className="text-text opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              onClick={() =>
                navigate(PATH.CLINIC_EDIT_PACKAGE, {
                  state: { id: samplePackage.id, package: samplePackage },
                })
              }
            >
              <FiEdit2 size={18} />
            </button>
            <span className="flex items-center gap-1 text-secondary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              {samplePackage.status}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-4xl font-bold text-text">
            {samplePackage.price}
          </span>
          <span className="text-base font-semibold text-text opacity-70">
            {samplePackage.currency}
          </span>
        </div>
        <p className="text-text opacity-50 text-sm mb-5">
          / {samplePackage.duration}
        </p>

        {/* Divider */}
        <hr className="border-border mb-5" />

        {/* Services */}
        <p className="text-text font-medium mb-4">Available Services:</p>
        <List
          items={samplePackage.services}
          listType="check"
          iconPosition="left"
          iconColor="text-secondary"
          iconSize={20}
        />
      </Card>
    </div>
  );
};

export default ClinicPackages;
