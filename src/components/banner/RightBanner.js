import React from 'react'
import { DSC06448 } from "../../assets/index";

const RightBanner = () => {
  return (
    // <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
    //   <img
    //     className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
    //     src={DSC06448}
    //     alt="bannerImg"
    //   />
<div className="w-full lgl:w-1/2 flex justify-center items-center relative">
  <img
    className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] object-cover object-[75%_center] z-10"
    src={DSC06448}
    alt="bannerImg"
  />
</div>
  );
}

export default RightBanner