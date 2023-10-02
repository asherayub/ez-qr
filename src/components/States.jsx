import { createContext, useEffect, useState } from "react";

const States = createContext(null);

const ContextProvider = ({ children }) => {
  const [url, setURL] = useState("");
  const [logo, setLogo] = useState("");
  const [backgroundImg, setBackgroundImg] = useState("");

  const handleURL = (e) => {
    setURL(e.target.value);
  };

  useEffect(() => {
    console.log({ url, logo, backgroundImg });
  }, [url, logo, backgroundImg]);
  return (
    <States.Provider
      value={{ url, handleURL, logo, setLogo, backgroundImg, setBackgroundImg }}
    >
      {children}
    </States.Provider>
  );
};

export { States, ContextProvider };
