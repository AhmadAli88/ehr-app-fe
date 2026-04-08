import React, { useState } from "react";
import { FiArrowLeft, FiEdit2, FiTrash2, FiSearch, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { PATH } from "../../../../config";

const sampleServices = [
  {
    category: "General Consultation",
    items: [
      {
        id: 1,
        name: "General Consultation",
        description: "In-person or telemedicine consultations with a general practitioner.",
        fee: "5,000",
        currency: "CFA",
      },
    ],
  },
  {
    category: "Specialist Consultation",
    items: [
      {
        id: 2,
        name: "Specialist Consultation",
        description: "Includes Cardiologists, Dermatologists, Neurologists, and more.",
        fee: "10,000",
        currency: "CFA",
      },
    ],
  },
  {
    category: "Laboratory Tests",
    items: [
      {
        id: 3,
        name: "Basic Tests",
        description: "Blood Sugar, Cholesterol, Urine Test",
        fee: "3,000",
        currency: "CFA",
      },
    ],
  },
  {
    category: "Imaging Services",
    items: [
      {
        id: 4,
        name: "X-Ray",
        description: "Standard X-Ray imaging for bones and chest.",
        fee: "7,500",
        currency: "CFA",
      },
    ],
  },
];

const ClinicServices = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = sampleServices
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="p-6 mx-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-text opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <FiArrowLeft size={22} />
          </button>
          <h1 className="text-2xl font-bold text-text">Services</h1>
        </div>
        <Button
          variant="secondary"
          size="md"
          icon={FiPlus}
          onClick={() => navigate(PATH.CLINIC_ADD_NEW_SERVICE)}
        >
          Add New Service
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <FiSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text opacity-40"
          size={18}
        />
        <input
          type="text"
          placeholder="Search Test (CBC, CT Scan etc)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#0ebe7f] focus:border-[#0ebe7f] focus:ring-opacity-50 transition-all"
        />
      </div>

      {/* Services List */}
      <h2 className="text-xl font-bold text-text mb-4">All Services</h2>

      {filtered.map((group) => (
        <div key={group.category} className="mb-6">
          <h3 className="text-base font-semibold text-text mb-3">{group.category}</h3>
          <div className="flex flex-col gap-3">
            {group.items.map((item) => (
              <Card key={item.id} shadow="sm" padding="md" border>
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <p className="font-semibold text-text text-sm">{item.name}</p>
                    <p className="text-text opacity-60 text-sm mt-1">{item.description}</p>
                    <p className="text-secondary text-sm font-medium mt-2">
                      Fee: {item.fee} {item.currency}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    <button
                      className="text-text opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() =>
                        navigate(PATH.CLINIC_EDIT_SERVICE, { state: { service: item } })
                      }
                    >
                      <FiEdit2 size={17} />
                    </button>
                    <button className="text-red-500 hover:text-red-600 transition-colors cursor-pointer">
                      <FiTrash2 size={17} />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="text-center text-text opacity-50 mt-10">No services found.</p>
      )}
    </div>
  );
};

export default ClinicServices;
