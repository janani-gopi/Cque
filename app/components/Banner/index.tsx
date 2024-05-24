import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "../magicui/animated-gradient-text";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0" style={{ margin: "auto 0" }}>
          <div className="py-3 text-center lg:text-start" >
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              Smartle.AI
            </button>
            {/* <AnimatedGradientText>
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                 Smartle.AI
                </span>
              </AnimatedGradientText> */}
          </div>
          <div className="py-3 text-center lg:text-start">
            <h1
              className="text-5xl lg:text-70xl font-bold text-darkpurple"
              style={{ lineHeight: "3.5rem" }}
            >
              Turn your window shoppers into paying customers with{" "}
              <span className="text-style-gradient">Smartle's Chat AI </span>
              Assistance
            </h1>
           
          </div>
          <div className="my-7 text-center lg:text-start">
            <button
              className="text-sm md:text-xl font-semibold hover:shadow-xl text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue"
              style={{ backgroundColor: "#00356b" }}
            >
              Try Smartle AI
            </button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="lg:-m-24 lg:pt-20 lg:block">
          <Image
            src="/images/banner/banner.svg"
            alt="hero-image"
            width={800}
            height={442}
            style={{ position: "absolute" }}
            className="lg:block hidden"
          />
          <div className="scene" style={{ margin: "0 auto" }}>
            <div className="phone-con" style={{ width: 300 }}>
              <div className="phone" style={{ width: 300 }}>
                <div className="buttons">
                  <div className="left">
                    <div className="button" />
                    <div className="button" />
                    <div className="button" />
                  </div>
                  <div className="right">
                    <div className="button" />
                  </div>
                </div>
                <div className="camera" />
                <div className="screen-container">
                  <iframe
                    src="https://chat.smartle.ai/"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: 49, border: "none" }}
                  />
                  <div className="notch-container" tabIndex={0}>
                    <div className="notch">
                      <div className="content">
                        <div className="left" style={{ margin: "auto 0" }}>
                          {/* <div class="tile"> */}
                          <img
                            src="/images/Sicon.png"
                            style={{
                              height: 20,
                              width: "20x",
                              marginLeft: "1.2rem",
                            }}
                          />
                          {/* </div> */}
                          <div className="text" />
                        </div>
                        <div className="right" />
                        <div className="bar">
                          <div className="duration" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notch-blur" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <div className="blur-box">
          <div className="blur-box center-box">
            <div className="bg-shape1 bg-blur"></div>
            <div className="bg-shape2 bg-blur"></div>
            <div className="bg-shape3 bg-blur"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
