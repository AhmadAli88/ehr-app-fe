import React from "react";
import Modal from "@/components/ui/Modal";

const DeleteLabTest = ({ isOpen, onClose, onConfirm, testName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Test"
      size="sm"
      showButtons
      primaryButton={{ text: "Delete", onClick: onConfirm }}
      secondaryButton={{ text: "Cancel", onClick: onClose }}
    >
      <p className="text-sm text-text opacity-70">
        Are you sure you want to delete{" "}
        <span className="font-semibold text-text opacity-100">
          {testName}
        </span>
        ? This action cannot be undone.
      </p>
    </Modal>
  );
};

export default DeleteLabTest;
