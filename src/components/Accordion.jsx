import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-primaryLight rounded-lg overflow-hidden mb-2 ">
      <div
        className="flex justify-between items-center p-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="font-semibold text-sm sm:text-2xl">{title}</p>
        <span>{isOpen ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</span>
      </div>
      {isOpen && (
        <div className="p-3 py-6 bg-primary">
          <p className="text-sm sm:text-xl mt-2 ">{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
