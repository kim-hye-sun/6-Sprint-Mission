// components/CustomDropdown.tsx
"use client";

import { useState } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  options: { value: string; label: string }[];
  initialOrderBy: string;
  onOrderByChange: (orderBy: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  initialOrderBy,
  onOrderByChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(initialOrderBy);

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    onOrderByChange(value);
  };

  const selectedOptionLabel =
    options.find((option) => option.value === selectedOption)?.label ||
    options[0].label;

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton}>
        {selectedOptionLabel} <span className={styles.arrow}></span>
      </button>
      <ul className={styles.dropdownMenu}>
        {options.map((option) => (
          <li
            key={option.value}
            className={styles.dropdownItem}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
