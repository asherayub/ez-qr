import Input from "./Input";
import GenerateQRCode from "./GenerateQRCode";
import { States } from "./States";
import { useContext, useState } from "react";
import OptionsButton from "./OptionsButton";
import AddColorsOptBtn from "./AddColorsOptBtn";
import { AiOutlineCloseCircle } from "react-icons/ai";

const GetStarted = () => {
  const [toggle, setToggle] = useState(false);
  const [optionToggle, setOptionToggle] = useState(false);
  const { url, logo, setLogo, setBackgroundImg, backgroundImg } =
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
              deleteIcon={
                logo && (
                  <AiOutlineCloseCircle
                    className="text-3xl p-1 w-10 h-10 rounded-lg bg-accent text-primary cursor-pointer"
                    onClick={() => setLogo("")}
                  />
                )
              }
              handleOnChange={(e) => {
                // Handle file upload logic here
                const selectedFile = e.target.files[0];
                if (selectedFile) setLogo(URL.createObjectURL(selectedFile));
              }}
            />

            <OptionsButton
              wrapper={"background"}
              id={"bg-upload"}
              text={backgroundImg ? `Remove Background` : "Add Background"}
              deleteIcon={
                backgroundImg && (
                  <AiOutlineCloseCircle
                    className="text-3xl p-1 w-10 h-10 rounded-lg bg-accent text-primary cursor-pointer"
                    onClick={() => setBackgroundImg("")}
                  />
                )
              }
              handleOnChange={(e) => {
                // if backgroundImg is not empty, remove it
                // Handle file upload logic here
                const selectedFile = e.target.files[0];
                if (selectedFile)
                  setBackgroundImg(URL.createObjectURL(selectedFile));
              }}
            />
            <AddColorsOptBtn
              labelText={"Add Global Pos Colors"}
              isCheckedNo={"isChecked1"}
              colorBox1={"color1"}
              colorBox2={"color2"}
            />
            <AddColorsOptBtn
              labelText={"Add Alignment Colors"}
              isCheckedNo={"isChecked2"}
              colorBox1={"color3"}
              colorBox2={"color4"}
            />
          </div>
        </div>
      )}

      {toggle && url.length > 12 && <GenerateQRCode />}
    </section>
  );
};

export default GetStarted;
