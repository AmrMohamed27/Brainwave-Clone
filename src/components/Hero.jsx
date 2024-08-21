import { curve, robot, heroBackground, notification1 } from "../assets/index";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import { heroIcons, notificationImages } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";

function Hero() {
  const parallaxRef = useRef();
  return (
    <Section
      className="pt-48 -mt-20"
      crosses
      crossesOffset={"lg:translate-y-20"}
      id={"hero"}
    >
      {/* Page Container */}
      <div className="container relative" ref={parallaxRef}>
        {/* Header Text Container */}
        <div className="px-5 md:px-10 lg:px-15 xl:px-20 max-w-[77.5rem] mx-auto flex flex-col items-center justify-center gap-8">
          <h1 className="h1 text-center z-50">
            Explore the Possibilities <br></br> of AI Chatting with{" "}
            <span className="relative">
              Brainwave{" "}
              <img
                src={curve}
                alt="curve"
                width={350}
                className="absolute bottom-[-0.25rem] left-0 w-full"
              />
            </span>
          </h1>
          <p className="body-1 text-center lg:max-w-[70%] text-n-2 z-50">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button className={"z-50 mb-16"} white={true} href={"#pricing"}>
            Get Started
          </Button>
        </div>
        {/* Images Section Container*/}
        <div className="relative mx-auto md:max-w-5xl xl:mb-24 max-w-sm mb-48">
          <div className="z-1 p-0.5 relative rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-2xl">
              <div className="h-[1.4rem] bg-n-10 rounded-t-2xl"></div>
              <div className="aspect-[33/40] rounded-b-2xl overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="robot"
                  className="w-full scale-[1.7] md:scale-100 translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                />
              </div>
              <Generating className={""} />
              {/* Scroll Parallaxes */}
              <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden xl:flex flex-row bg-n-9/40 backdrop-blur rounded-2xl border border-n-1/10 px-6 py-6 gap-10 absolute bottom-32 -left-20">
                  {heroIcons.map((icon, index) => (
                    <li key={index}>
                      <img src={icon} alt={"icon"} width={25} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned>
                <div className="hidden xl:flex flex-row bg-n-9/40 backdrop-blur rounded-2xl border border-n-1/10 px-4 py-4 gap-4 absolute bottom-36 -right-20">
                  <div>
                    <img
                      src={notification1}
                      alt={"notification"}
                      width={65}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start">
                    <div className="pr-8">
                      <p className="body-2 font-bold">Code generation</p>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <ul className="flex flex-row gap-1">
                        {notificationImages.map((image, index) => (
                          <li key={index}>
                            <img
                              src={image}
                              alt={"notification"}
                              width={20}
                              className="rounded-full"
                            />
                          </li>
                        ))}
                      </ul>
                      <p className="body-2 text-n-13">1m ago</p>
                    </div>
                  </div>
                </div>
              </ScrollParallax>
            </div>
            <Gradient />
          </div>
          {/* Hero Background */}
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="hero-background"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos />
      </div>
      <BottomLine />
    </Section>
  );
}

export default Hero;
