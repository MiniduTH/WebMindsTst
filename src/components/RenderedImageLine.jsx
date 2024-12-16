import React from "react";
import ImageLineCard from "./ImageLineCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dessert from "../assets/dessert.jpg";
import glacier2 from "../assets/glacier2.jpg";

function RenderedImageLine() {
  return (
    <>
      <div className="flex flex-row justify-center bg-gray-50 p-14">
        <ImageLineCard text="We" bgColor="bg-gray-100" />
        <ImageLineCard
          text="Protect"
          imgUrl={glacier2}
        />
        <ImageLineCard
          text={<FontAwesomeIcon icon={faArrowRight} />}
          bgColor="bg-lime-200"
        />
        <ImageLineCard
          text="Nature"
          imgUrl={dessert}
        />
      </div>
    </>
  );
}

export default RenderedImageLine;
