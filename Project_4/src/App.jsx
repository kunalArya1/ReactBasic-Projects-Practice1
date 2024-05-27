import React from "react";
import Image from "./Component/Image";

const App = () => {
  return (
    <>
      <div>Image Caption App</div>
      <Image
        imageLink={
          "https://th.bing.com/th/id/OIP.zgiDOfpjSb5jqL9bSPKK8QHaD8?rs=1&pid=ImgDetMain"
        }
        imageCaption={"Musk"}
      />
    </>
  );
};

export default App;
