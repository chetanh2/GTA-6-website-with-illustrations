import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".vi-mask-group", {
        rotate: 10,
        duration: 2,
        ease: "Power4.easeInOut",
        transformOrigin: "50% 50%",
      })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        },
      });
  });

  useGSAP(()=>{
    if(!showContent) return
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease: "Expo.easeInOut"
    })
    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".character",{
      scale:1,
      // x: "-50%",
      bottom:"-32%",
      rotate:0,
      duration:2,
      delay:"-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".text",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease: "Expo.easeInOut"
    })
    const main = document.querySelector(".main")
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });

  },[showContent])
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full overflow-hidden rotate-[-10deg] scale-[1.7]">
          <div className="landing w-full overflow-hidden relative h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-7 items-center">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl text-white -mt-2 leading-none">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img
                className="w-full sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0  h-full  object-cover"
                src="./sky.png"
              />
              <img
                className="w-full bg scale-[1.5]  absolute rotate-[-3deg] top-0 left-0 h-full  object-cover"
                src="./bg.png"
              />
              <div className="text text-white flex flex-col gap-3 absolute top-12 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[8rem] leading-none -ml-60">grand</h1>
                <h1 className="text-[8rem] leading-none -ml-30">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-60">auto</h1>
              </div>
              <img
                className="absolute  character -bottom-[32%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]  h-[740px] w-[610px]"
                src="./girlbg.png"
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0  w-full py-10 px-10  bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className ="text-xl ri-arrow-down-fill"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-[60px]"
                src="./ps5.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="w-full  flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-[45%] h-full">
                <img
                  className=""
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[45%] py-16">
                <h1 className="text-7xl">Still Running,</h1>
                <h1 className="text-7xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
