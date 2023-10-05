import { useContext } from "react";
import { States } from "./States";

const Input = () => {
  const { url, handleURL } = useContext(States);
  return (
    <>
      <input
        className="block mx-auto my-4 mt-10 sm:w-96 px-2 py-3 bg-transparent text-xl border-2 border-primaryLight focus:border-secondary rounded-lg outline-none"
        type="text"
        value={url}
        onChange={(e) => handleURL(e)}
        placeholder="https://example.com"
      />
      {!url.startsWith("https://") && (
        <small className="block text-center text-red-600">url must start with https://</small>
      )}
    </>
  );
};

export default Input;
