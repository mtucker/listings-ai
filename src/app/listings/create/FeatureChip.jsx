"use client";
import { useToggle } from "@/hooks";

const FeatureChip = ({ feature, register }) => {
  const [isChecked, setIsChecked] = useToggle(false);
  const { onChange, onBlur, name, ref } = register("features");

  const handleChange = (e) => {
    setIsChecked();
    onChange(e);
  };

  return (
    <div key={feature} className="inline-block">
      <input
        type="checkbox"
        id={feature}
        value={feature}
        className="hidden"
        onBlur={onBlur}
        name={name}
        ref={ref}
        onChange={handleChange}
      />
      <label
        htmlFor={feature}
        className={`inline-flex cursor-pointer items-center rounded-lg border border-gray-300 px-3 py-1 text-sm font-medium ${
          isChecked
            ? "bg-indigo-400 text-white"
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        {feature}
      </label>
    </div>
  );
};

export default FeatureChip;
