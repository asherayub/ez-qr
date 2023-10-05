import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-primary"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p className="text-sm sm:text-xl mt-2 p-5">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
