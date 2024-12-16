import React from "react";
import ImageLineCard from "./ImageLineCard";

function RenderedImageLine() {
return (
    <>
        <div className="flex flex-row justify-center bg-gray-50 p-14">
            <ImageLineCard text="We" bgColor="bg-gray-100" />
            <ImageLineCard text="Protect" imgUrl="https://img.freepik.com/free-photo/vertical-shot-amazing-glacier-texture_181624-42664.jpg?t=st=1734339432~exp=1734343032~hmac=444576728d7dc7623aea91f6e2dc10b1e1bfa579ee3ec15267328dabb333df2e&w=360" />
            <ImageLineCard text={<span>&#8594;</span>} bgColor = "bg-lime-200"/>
            <ImageLineCard text="Nature" imgUrl="https://img.freepik.com/free-photo/brown-hill_400718-19.jpg?t=st=1734339504~exp=1734343104~hmac=0618bb140e1a13316db1af4349648ea2f5b9895e9a11b38056fcab36ad4a8e98&w=826" />
        </div>
    </>
);
}

export default RenderedImageLine;
