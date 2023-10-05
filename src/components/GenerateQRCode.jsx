import { useEffect, useRef, useContext } from "react";
import QRCode from "easyqrcodejs";
import { States } from "./States";

const GenerateQRCode = () => {
  const { url, logo, backgroundImg, addColors } = useContext(States);
  const qrcodeRef = useRef(null);
  let qrCode = useRef(null);
  const removeOldCanvas = () => {
    const canvasEls = document.querySelectorAll("canvas");
    canvasEls.forEach((canvas, index) => {
      if (index !== canvasEls.length - 1) canvas.remove();
    });
  };

  useEffect(() => {
    // Options
    const options = {
      width: 226,
      height: 226,
      text: url,
      logo: logo,
      backgroundImage: backgroundImg,
      backgroundImageAlpha: 0.55,
      PO: addColors.color1,
      PI: addColors.color2,
      AO: addColors.color3 && addColors.color3,
      AI: addColors.color4 && addColors.color4,
    };

    // Create new QRCode Object
    qrCode.current = new QRCode(qrcodeRef.current, options);
    removeOldCanvas();
  }, [url, logo, backgroundImg, addColors]);

  return (
    <div
      className="qr-codes flex flex-col-reverse justify-center items-center w-max mx-auto bg-primaryLight p-3 rounded-lg"
      ref={qrcodeRef}
    >
      <button
        className="bg-accent  hover:bg-accent/70 transition duration-300 ease-in-out  text-lg   sm:text-2xl text-primary px-4 py-2 rounded-lg font-bold my-4"
        onClick={() => {
          let fileName = "EZQRCode";
          qrCode.current.download(fileName);
        }}
      >
        Download
      </button>
    </div>
  );
};

export default GenerateQRCode;
