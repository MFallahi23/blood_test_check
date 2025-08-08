import { type FC } from "react";
import "./CustomInput.scss";

interface CustomInputProps {
  label: string;
  id: string;
  unit: string;
}

const CustomInput: FC<CustomInputProps> = ({ label, id, unit }) => {
  return (
    <div className="custom-input">
      <label className="custom-input__label" htmlFor={id}>
        <span className="custom-input__label-text">{label}</span>
      </label>
      <input className="custom-input__field" type="text" id={id} name={id} />
      <span className="custom-input__unit">{unit}</span>
    </div>
  );
};

export default CustomInput;
