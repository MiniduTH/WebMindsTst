import React from "react";


function ImageLineCard({
  text = "sample text",
  imgUrl = null,
  bgColor = null    ,
}) {
  const backgroundImageStyle = imgUrl
    ? {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fffce3",
      }
    : {};

  return (
    <div
      className={`flex flex-row justify-center w-52 h-32 rounded-full ${bgColor} font-semibold text-3xl `}
      style={backgroundImageStyle}
    >
      <span className="flex flex-col justify-center drop-shadow-md drop-shadow-slate-300">
        {text}
      </span>
    </div>
  );
}

export default ImageLineCard;
