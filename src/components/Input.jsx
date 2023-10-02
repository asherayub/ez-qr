import { useContext } from "react";
import { States } from "./States";

const Input = () => {
  const { URL, handleURL } = useContext(States);
  return (
    <>
      <input
        className="mx-auto block  my-4 mt-10 sm:w-96 px-2 py-3 bg-transparent text-xl border-2 border-primaryLight focus:border-secondary rounded-lg outline-none"
        type="text"
        value={URL}
        onChange={(e) => handleURL(e)}
        placeholder="https://example.com"
      />
    </>
  );
};

export default Input;
