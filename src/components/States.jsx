import { createContext, useState } from "react";

const States = createContext(null);

const ContextProvider = ({ children }) => {
  const [url, setURL] = useState("https://");
  const [logo, setLogo] = useState("");
  const [backgroundImg, setBackgroundImg] = useState("");
  const [addColors, setAddColors] = useState({
    isChecked1: false,
    color1: "#000000",
    color2: "#000000",
    isChecked2: false,
    color3: "#000000",
    color4: "#000000",
  });

  const handleURL = (e) => {
    setURL(e.target.value);
  };

  return (
    <States.Provider
      value={{
        url,
        handleURL,
        logo,
        setLogo,
        backgroundImg,
        setBackgroundImg,
        addColors,
        setAddColors,
      }}
    >
      {children}
    </States.Provider>
  );
};

export { States, ContextProvider };
