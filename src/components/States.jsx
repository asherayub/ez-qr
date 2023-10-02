import { createContext, useEffect, useState } from "react";

const States = createContext(null);

const ContextProvider = ({ children }) => {
  const [url, setURL] = useState("");
  const [logo, setLogo] = useState("");
  const [backgroundImg, setBackgroundImg] = useState("");
  const [addColors, setAddColors] = useState({
    isChecked: false,
    color1: "#000000",
    color2: "#761f1f",
  });

  const handleURL = (e) => {
    setURL(e.target.value);
  };

  useEffect(() => {
    console.log(addColors );
  }, [addColors]);
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
