import React from "react";

const Image = ({ imageLink, imageCaption }) => {
  return (
    <div>
      <img src={imageLink} alt={imageCaption} />
    </div>
  );
};

export default Image;
