import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

/**
 * Reusable List component
 *
 * Props:
 *  items          – array of { heading, description, isSection }
 *                   isSection: renders a bold heading row without an icon
 *  listType       – "check" | "bullet" | "number" | "none"
 *  iconPosition   – "left" | "right" | "none"
 *  icon           – custom icon component (overrides listType icon)
 *  iconColor      – tailwind text-color class for the icon  (default "text-secondary")
 *  iconSize       – px size passed to the icon             (default 20)
 *  className      – extra classes on the <ul>
 *  itemClassName  – extra classes on each <li>
 */
const List = ({
  items = [],
  listType = "check",
  iconPosition = "left",
  icon: CustomIcon = null,
  iconColor = "text-secondary",
  iconSize = 20,
  className = "",
  itemClassName = "",
}) => {
  const renderIcon = (index) => {
    if (CustomIcon) return <CustomIcon size={iconSize} className={iconColor} />;
    if (listType === "check")
      return <BsCheckCircleFill size={iconSize} className={iconColor} />;
    if (listType === "bullet")
      return (
        <span
          className={`inline-block w-2 h-2 rounded-full bg-current mt-1.5 shrink-0 ${iconColor}`}
        />
      );
    if (listType === "number")
      return (
        <span className={`font-semibold shrink-0 ${iconColor}`}>
          {index + 1}.
        </span>
      );
    return null;
  };

  return (
    <ul className={`space-y-3 list-none p-0 ${className}`}>
      {items.map((item, index) => {
        /* ── Section heading row (no icon) ─────────────────────── */
        if (item.isSection) {
          return (
            <li key={index} className="pt-1">
              <p className="font-bold text-text">{item.heading}</p>
            </li>
          );
        }

        /* ── Normal list item ───────────────────────────────────── */
        return (
          <li
            key={index}
            className={`flex ${
              iconPosition === "right" ? "flex-row-reverse" : "flex-row"
            } gap-3 items-start ${itemClassName}`}
          >
            {listType !== "none" && iconPosition !== "none" && (
              <span className="flex-shrink-0 mt-0.5">{renderIcon(index)}</span>
            )}

            <div className="flex-1">
              {item.heading && (
                <p className="font-semibold text-text text-sm">
                  {item.heading}
                </p>
              )}
              {item.description && (
                <p className="text-text opacity-60 text-sm">
                  • {item.description}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
