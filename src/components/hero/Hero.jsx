import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hey, I'm Jaydip Borad
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "AI Engineer",
                2000,
                "Data analyst",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Final-year Master student at DIT Cham.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href=""
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
              >
              <li>
                <a href="https://github.com/boradj">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jaydip-borad/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/borad.j/">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/jaydeep.borad.96">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/jdborad">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div class="relative h-[80%] w-fit flex items-center sm:items-end">
            <div class="h-[80%] md:h-[95%]">
              <img 
              loading="lazy" 
              class="image h-[450px] w-[450px] md:h-[300px] md:w-[300px]  overflow-hidden object-cover  md:m-auto sm:m-0" 
              src="https://res.cloudinary.com/dw5ge8kif/image/upload/c_crop,w_605,h_631,x_0,y_0,e_improve,e_sharpen/v1714551974/rendernet_image_2_fbmmlz_e_background_removal_c_crop_w_800_h_1067_ar_3_4_f_png_dmmdxj.png" 
              alt="mine"
              />
            </div>
            <div class=" absolute bottom-20 md:bottom-3 right-2 md:right-2">
              <div data-aos="zoom-in" data-aos-duration="1000" class="relative cursor-pointer aos-init aos-animate">
                <img loading="lazy" class=" w-[120px] md:w-[90px] circle-text" 
                src="https://i.postimg.cc/ZKxN1TLg/Ai-engineer-2-qr9qcd-e-background-removal-f-png.png" 
                alt=""/>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                      </path>
                      </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   

  );
};

export default Hero;
