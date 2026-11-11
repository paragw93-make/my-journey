import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiAutodesk, SiAdobephotoshop, SiCanva, SiGoogleclassroom } from "react-icons/si";;
const Media = () => {
  return (
    <div className="xl:flex-row gap-8 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-2">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            {/* <span className="bannerIcon">
              <FaLinkedinIn />
            </span> */}
            <a
  href="https://www.linkedin.com/in/parag-wadhwani-8044357a/"
  target="_blank"
  rel="noopener noreferrer"
  className="bannerIcon"
>
  <FaLinkedinIn />
</a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mt-3 mb-4 px-4">
            BEST SKILL ON
          </h2>
          {/* <div className="flex gap-2">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiMongodb/>
            </span>
            <span className="bannerIcon">
              <FaNodeJs/>
            </span>
          </div> */}
<div>
  <h2 className="text-base uppercase font-titleFont mt-3 mb-4 px-4">
  </h2>

  <div className="flex flex-wrap gap-3">

    <span className="bannerIcon" title="Fusion 360">
      <SiAutodesk />
    </span>

    <span className="bannerIcon" title="Tinkercad">
      <span className="text-xl font-bold">T</span>
    </span>

    <span className="bannerIcon" title="Adobe Photoshop">
      <SiAdobephotoshop />
    </span>

    <span className="bannerIcon" title="TechSoft 2D Design">
      <span className="text-sm font-bold">2D</span>
    </span>

    <span className="bannerIcon" title="Canva">
      <SiCanva />
    </span>

    <span className="bannerIcon" title="Google Workspace for Education">
      <SiGoogleclassroom />
    </span>

  </div>
</div>
        </div>
      </div>
  )
}

export default Media