import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((value) => !value);
  };

  return [value, toggleValue];
};
