
const OptionsButton = ({ wrapper, id, text, handleOnChange, deleteIcon }) => {
  return (
    <div
      className={`${wrapper}__img relative flex justify-center items-center gap-2  p-4`}
    >
      <label
        htmlFor={id}
        className="cursor-pointer bg-accent text-primary
                font-bold py-2 px-4 rounded-md hover:bg-accent/70 transition duration-300 ease-in-out w-full block sm:inline"
      >
        {text}
      </label>
      <input
        id={id}
        type="file"
        className="hidden"
        accept="image/*" // Set accepted file types to images only
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
     {deleteIcon}
    </div>
  );
};

export default OptionsButton;
