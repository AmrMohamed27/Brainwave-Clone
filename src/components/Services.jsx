import {
  PhotChatMessage,
  VideoBar,
  VideoChatMessage,
  Gradient,
} from "./design/Services";
import Section from "./Section";

import { check } from "../assets";

import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import { service1, service2, service3 } from "../assets";
import { useState } from "react";

function Services() {
  const [activeIcon, setActiveIcon] = useState(2);

  const handleClickIcon = (index) => {
    setActiveIcon(() => index);
  };
  return (
    <Section id={"services"}>
      {console.log(activeIcon)}
      <div className="relative container">
        <div className="flex flex-col gap-16">
          {/* Heading */}
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="h2">Generative AI made for creators.</h2>
            <p className="body-2 text-n-4">
              Brainwave unlocks the potential of AI-powered applications
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {/* First Section */}
            <div className="rounded-3xl border-2 border-n-3/10 p-10 h-[44rem] flex items-center justify-end relative ">
              {/* Gradient and background */}
              <Generating className={"border-2 border-n-3/10 z-10"} />
              <Gradient />
              <div className="absolute top-0 left-0 h-full z-0">
                <img
                  src={service1}
                  alt="robot"
                  className="w-full h-full object-cover overflow-hidden"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-6 md:w-[25%] z-10">
                <h4 className="h4">Smartest AI</h4>
                <p className="body-2 text-n-3">
                  Brainwave unlocks the potential of AI-powered applications
                </p>
                <ul className="flex flex-col gap-4">
                  {brainwaveServices.map((service, index) => (
                    <li key={index} className="flex gap-4 flex-col">
                      <div className="w-full h-[1px] bg-n-3/10"></div>
                      <div className="flex flex-row gap-4 items-center">
                        <img src={check} alt="check" />
                        <p>{service}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Container */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Second Section */}
              <div className="rounded-3xl border-2 border-n-3/10 px-16 py-28 h-[48rem] flex items-end justify-start relative overflow-hidden">
                {/* Images */}
                <div className="absolute top-0 right-0 h-full z-0 opacity-40">
                  <img
                    src={service2}
                    alt="robot"
                    className="w-full h-full object-cover overflow-hidden"
                  />
                </div>
                <PhotChatMessage />
                {/* Text */}
                <div className="flex flex-col gap-6 z-10">
                  <h4 className="h4">Photo Editing</h4>
                  <p className="body-2 text-n-3">
                    Automatically enhance your photos using our AI app&apos;s
                    photo editing feature. Try it now!
                  </p>
                </div>
              </div>
              {/* Third Section */}
              <div className="rounded-3xl px-10 py-16 h-[48rem] flex flex-col items-start justify-start gap-4 md:gap-12 relative bg-n-7 z-10">
                {/* Header */}
                <div className="flex flex-col gap-4 items-start">
                  <h4 className="h4">Video generation</h4>
                  <p className="body-2 text-n-3">
                    The world&apos;s most powerful AI photo and video art
                    generation engine. What will you create?
                  </p>
                  {/* Icons */}
                  <div className="mt-4 w-full flex items-center justify-center">
                    <ul className="flex flex-row justify-between w-full items-center">
                      {brainwaveServicesIcons.map((icon, index) => (
                        <li
                          key={index}
                          onClick={() => handleClickIcon(index)}
                          className={`rounded-2xl flex items-center justify-center cursor-pointer w-10 h-10 md:w-15 md:h-15  ${
                            activeIcon === index
                              ? "bg-conic-gradient scale-110 p-0.25"
                              : "bg-n-6"
                          }`}
                        >
                          <div
                            className={`${
                              activeIcon === index
                                ? "flex items-center justify-center w-full h-full bg-n-7 rounded-2xl"
                                : ""
                            }`}
                          >
                            <img src={icon} alt={icon} width={24} height={24} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Image */}
                <div className="rounded-2xl w-[calc(100%-2rem)] h-[28rem] md:h-[25rem] absolute left-1/2 -translate-x-1/2 bottom-4 bg-n-8 flex items-end justify-start px-4 py-8 overflow-hidden">
                  <VideoChatMessage />
                  <div className="absolute bottom-0 -left-4 h-full z-0 rounded-2xl overflow-hidden">
                    <img
                      src={service3}
                      alt="robot"
                      className="w-full h-full overflow-hidden z-0 "
                    />
                  </div>

                  <VideoBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Services;
