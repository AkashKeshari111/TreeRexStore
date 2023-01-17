import React from "react";

const CheckboxFilter = ({ options, category, filters, onChange }) => {
  return (
    <>
      <label>{category} </label>
      {options.map((option,i) => (
        <section key={i}>
            <input
              type="checkbox"
              value={option}
              checked={filters.includes(option)}
              onChange={() => onChange(category, option)}
            />
            <text>{option}</text>
        </section>
      ))}
    </>
  );
};

export default CheckboxFilter;
