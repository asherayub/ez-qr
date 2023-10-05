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
    <section id="start" className="pt-24 mb-24 w-full">
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
          className={`bg-accent  hover:bg-accent/70 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed
          }  text-primary  text-lg   sm:text-2xl  px-4 py-2 rounded-lg font-bold`}
          disabled={url.length < 9 || !url.startsWith("https://")}
        >
          Generate
        </button>
        {toggle && (
          <div className="relative">
            <button
              onClick={() => {
                setOptionToggle(!optionToggle);
              }}
              className={`bg-accent text-primary  text-lg   sm:text-2xl   px-4 py-2 rounded-lg font-bold   hover:bg-accent/70 transition duration-300 ease-in-out ${
                url.length < 9 ? "hidden" : ""
              }`}
            >
              Options
            </button>
            {optionToggle && (
              <div className="options  absolute top-40 sm:top-36 -left-4 sm:left-44 sm:right-0 right-32 bottom-0 z-50 flex justify-center items-center   mb-8">
                <div className="options__all  min-w-[200px] max-w[350px]  flex flex-wrap flex-col justify-center bg-primaryLight p-2 rounded-lg">
                  <OptionsButton
                    wrapper={"logo"}
                    id={"logo-upload"}
                    text={"Logo"}
                    deleteIcon={
                      logo && (
                        <AiOutlineCloseCircle
                          className="text-3xl p-1 w-9  rounded-full bg-red-400 hover:bg-red-600  transition-colors text-primary cursor-pointer"
                          onClick={() => setLogo("")}
                        />
                      )
                    }
                    handleOnChange={(e) => {
                      // Handle file upload logic here
                      const selectedFile = e.target.files[0];
                      if (selectedFile)
                        setLogo(URL.createObjectURL(selectedFile));
                    }}
                  />

                  <OptionsButton
                    wrapper={"background"}
                    id={"bg-upload"}
                    text={"Background"}
                    deleteIcon={
                      backgroundImg && (
                        <AiOutlineCloseCircle
                          className="text-3xl p-1 w-9  rounded-full bg-red-400 hover:bg-red-600  transition-colors text-primary cursor-pointer"
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
                  <div className="colors my-2 px-2 flex flex-col justify-center gap-4">
                    <AddColorsOptBtn
                      labelText={"Global Pos Colors"}
                      htmlfor={"color1"}
                      isCheckedNo={"isChecked1"}
                      colorBox1={"color1"}
                      colorBox2={"color2"}
                    />

                    <AddColorsOptBtn
                      labelText={"Alignment Colors"}
                      htmlfor={"color2"}
                      isCheckedNo={"isChecked2"}
                      colorBox1={"color3"}
                      colorBox2={"color4"}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {toggle && url.length > 5 && <GenerateQRCode />}
    </section>
  );
};

export default GetStarted;
