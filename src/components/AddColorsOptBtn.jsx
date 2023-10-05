import { useContext } from "react";
import { States } from "./States";

const AddColorsOptBtn = ({
  labelText,
  htmlfor,
  isCheckedNo,
  colorBox1,
  colorBox2,
}) => {
  const { addColors, setAddColors } = useContext(States);
  return (
    <div className="add__colors flex flex-wrap justify-between items-center">
      <label htmlFor={htmlfor}>{labelText}: </label>
      <input
        className="p-3"
        type="checkbox"
        name={isCheckedNo}
        id={htmlfor}
        checked={addColors[isCheckedNo]}
        value={addColors[isCheckedNo]}
        onChange={(e) => {
          const { name, checked } = e.target;
          if (checked) {
            setAddColors({ ...addColors, [name]: checked });
          } else {
            setAddColors({
              ...addColors,
              [colorBox1]: "#000000",
              [colorBox2]: "#000000",
              [name]: checked,
            });
          }
        }}
      />
      {addColors[isCheckedNo] && (
        <div className="my-1 flex gap-2">
          <input
            type="color"
            name={colorBox1}
            id={colorBox1}
            value={addColors[colorBox1]}
            onChange={(e) => {
              const { name, value } = e.target;
              setAddColors({ ...addColors, [name]: value });
            }}
          />
          <input
            type="color"
            name={colorBox2}
            id={colorBox2}
            value={addColors[colorBox2]}
            onChange={(e) => {
              const { name, value } = e.target;
              setAddColors({ ...addColors, [name]: value });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AddColorsOptBtn;
