import { useContext } from "react";
import { States } from "./States";

const AddColorsOptBtn = ({labelText, isCheckedNo, colorBox1, colorBox2 }) => {
  const { addColors, setAddColors } = useContext(States);
  return (
    <div className="add__colors">
      <label htmlFor="add_colors">{labelText}: </label>
      <input
        type="checkbox"
        name={isCheckedNo}
        id="add_colors"
        value={addColors[isCheckedNo]}
        onChange={(e) => {
            const { name, checked } = e.target
            setAddColors({ ...addColors, [name]: checked })
        }
        }
      />
      {addColors[isCheckedNo] && (
        <>
          <input
            type="color"
            name={colorBox1}
            id={colorBox1}
            value={addColors.color1}
            onChange={(e) => {
              const { name, value } = e.target;
              setAddColors({ ...addColors, [name]: value });
            }}
          />
          <input
            type="color"
            name={colorBox2}
            id={colorBox2}
            value={addColors.color2}
            onChange={(e) => {
              const { name, value } = e.target;
              setAddColors({ ...addColors, [name]: value });
            }}
          />
        </>
      )}
    </div>
  );
};

export default AddColorsOptBtn;
