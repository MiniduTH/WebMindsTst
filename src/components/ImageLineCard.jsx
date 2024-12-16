import React from "react";


function ImageLineCard({
  text = "sample text",
  //   imgUrl = "https://images.unsplash.com/photo-1579618218494-04a080ff0204?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
