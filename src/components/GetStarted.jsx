import Input from "./Input";
import GenerateQRCode from "./GenerateQRCode";
import { States } from "./States";
import { useContext, useState } from "react";
import OptionsButton from "./OptionsButton";

const GetStarted = () => {
  const [toggle, setToggle] = useState(false);
  const [optionToggle, setOptionToggle] = useState(false);
  const { url, setLogo, setBackgroundImg, addColors, setAddColors } =
    useContext(States);

  return (
    <section id="start" className="pt-24 mb-24 w-full h-screen">
      <h1 className="text-5xl sm:text-9xl  font-bold">Get Started</h1>
      <h2 className="mt-4 text-xs sm:text-2xl tracking-wide">
        Type the url in the input below and click Submit
      </h2>
      <Input />
      <div className="get__started__btns flex justify-center gap-4 my-8 mb-4">
        <button
          onClick={() => {
            if (url.length < 1) setToggle(false);
            setToggle(true);
          }}
          className="bg-accent text-primary px-4 py-2 rounded-lg font-bold"
        >
          Generate
        </button>
        {toggle && (
          <button
            onClick={() => setOptionToggle(!optionToggle)}
            className="bg-accent text-primary px-4 py-2 rounded-lg font-bold"
          >
            Options
          </button>
        )}
      </div>
      {optionToggle && (
        <div className="options ml-[22em] mb-8">
          <div className="options__all w-max max-w-[400px] min-w-[260px] flex flex-wrap flex-col sm:flex-row sm:justify-start  justify-center bg-primaryLight p-2 rounded-lg">
            <OptionsButton
              wrapper={"logo"}
              id={"logo-upload"}
              text={"Add Logo"}
              handleOnChange={(e) => {
                // Handle file upload logic here
                const selectedFile = e.target.files[0];
                if (selectedFile) setLogo(URL.createObjectURL(selectedFile));
              }}
            />

            <OptionsButton
              wrapper={"background"}
              id={"bg-upload"}
              text={"Add Background"}
              handleOnChange={(e) => {
                // Handle file upload logic here
                const selectedFile = e.target.files[0];
                if (selectedFile)
                  setBackgroundImg(URL.createObjectURL(selectedFile));
              }}
            />
            <div className="add__colors">
              <label htmlFor="add_colors">Add Colors: </label>
              <input
                type="checkbox"
                name="add_colors"
                id="add_colors"
                value={addColors.isChecked}
                onChange={(e) =>
                  setAddColors({ ...addColors, isChecked: e.target.checked })
                }
              />
              {addColors.isChecked && (
                <>
                  <input
                    type="color"
                    name="color1"
                    id="color1"
                    value={addColors.color1}
                    onChange={(e) => {
                      setAddColors({ ...addColors, color1: e.target.value });
                    }}
                  />
                  <input
                    type="color"
                    name="color2"
                    id="color2"
                    value={addColors.color2}
                    onChange={(e) => {
                      setAddColors({ ...addColors, color2: e.target.value });
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {toggle && url.length > 12 && <GenerateQRCode />}
    </section>
  );
};

export default GetStarted;
