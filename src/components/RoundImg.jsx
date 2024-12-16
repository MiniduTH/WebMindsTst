import React from "react";

function RoundImg({ className,url='https://via.placeholder.com/150' }) {
  return (
 
      <div
        className={`w-12 h-12 rounded-full bg-cover absolute ${className}`}
        style={{ backgroundImage: `url(${url}) `}}
      ></div>
  
  );
}

export default RoundImg;
