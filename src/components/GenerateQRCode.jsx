import React, { useEffect, useRef, useContext } from "react";
import QRCode from "easyqrcodejs";
import { States } from "./States";

const GenerateQRCode = () => {
  const { url, logo, backgroundImg, addColors } = useContext(States);
  const qrcodeRef = useRef(null);

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
      subTitle: "hello",
      backgroundImage: backgroundImg,
      backgroundImageAlpha: 0.55,
      PO: addColors.color1,
      PI: addColors.color2,
    };

    // Create new QRCode Object
    new QRCode(qrcodeRef.current, options);
    removeOldCanvas();
  }, [url, logo, backgroundImg, addColors]);

  return (
    <div
      className="qr-codes flex justify-center items-center w-max mx-auto bg-primaryLight p-3 rounded-lg"
      ref={qrcodeRef}
    ></div>
  );
};

export default GenerateQRCode;
