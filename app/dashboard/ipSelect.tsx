"use client";

interface Option {
  label: string;
  value: string;
}

interface OptionSelectProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function OptionSelect({
  options,
  selectedValue,
  onChange,
}: OptionSelectProps) {
  return (
    <div className="flex gap-2 p-1 bg-amber-100 rounded-lg w-max">
      {options.map((option) => {
        const isSelected = selectedValue === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              isSelected
                ? "bg-white text-amber-600 shadow-sm"
                : ""
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
