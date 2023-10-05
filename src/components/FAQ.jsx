import AccordionItem from "./Accordion";


const Faq = () => {
  return (
    <section className="faq mb-20">
      <h1 className="text-5xl sm:text-9xl mb-8  font-bold">FAQ</h1>
      <div className="faq__items bg-primaryLight rounded-lg p-2">
        <AccordionItem
          title="What is a QR code?"
          content="A QR code, short for Quick Response code, is a two-dimensional barcode that can store various types of information, such as website URLs, contact information, and more. They are designed to be easily scanned using a smartphone or QR code reader."
        />
        <AccordionItem
          title="How can I create a QR code on this website?"
          content="1). Choose the type of information you want to encode (e.g., URL, text, phone number).
          2). Enter the relevant information in the provided field.
          3). Click the 'Generate QR Code' button.
          4). Your QR code will be generated and displayed on the screen. You can then download it for use."
        />
        <AccordionItem
          title="Is this service free to use?"
          content="Yes, our basic QR code generation service is absolutely free."
        />
        <AccordionItem
          title="Can I customize the appearance of my QR code?"
          content="Yes, we offer options for customizing your QR code's appearance. You can choose from various colors and styles to make your QR code unique and attractive."
        />
      </div>
    </section>
  );
};

export default Faq;
