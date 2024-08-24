import { LeftLine, RightLine } from "./design/Pricing";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import brackets from "./../assets/svg/Brackets";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <Section id={"pricing"}>
      <div className="container relative">
        <div className="items-center justify-center hidden lg:flex">
          <img
            src={smallSphere}
            alt="small-sphere"
            width={255}
            className="z-10"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[90rem] z-0 hidden lg:block">
          <img src={stars} alt="stars" />
        </div>
        {/* Header */}
        <div className="flex items-center justify-center lg:mt-28 text-n-3">
          <p className="tagline uppercase flex items-center gap-4">
            {brackets("left")} Get Started With Brainwave
            {brackets("right")}
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <h2 className="h2">Pay once, use forever</h2>
        </div>
        <div className="w-full flex mt-24 relative">
          <LeftLine />
          <RightLine />
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pricing.map((item, index) => (
              <li
                key={item.id}
                className={`border-2 border-n-3/10 rounded-3xl px-5 py-8 flex flex-col gap-4 ${
                  index === 1 ? "lg:scale-105" : ""
                }`}
              >
                <div className="flex gap-4 flex-col">
                  <h4
                    className={`h4 ${
                      index === 0
                        ? "text-color-2"
                        : index === 1
                        ? "text-color-1"
                        : "text-color-3"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="body-2 text-n-14">{item.description}</p>
                </div>
                <div className="flex items-center">
                  {item.price ? (
                    <div
                      className={`flex items-center ${
                        index === 0 ? "my-5" : index === 1 ? "my-2" : ""
                      }`}
                    >
                      <span className="text-5xl">$</span>
                      <span className="text-8xl font-bold">{item.price}</span>
                    </div>
                  ) : (
                    <div className="w-full h-[7rem]"></div>
                  )}
                </div>
                <Button white={item.white}>{item.buttonText}</Button>
                <ul className="flex flex-col gap-4 mt-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex flex-col gap-4">
                      <div className="w-full h-[1px] bg-n-3/10"></div>
                      <div className="flex flex-row gap-4 items-center">
                        <img src={check} alt="check" />
                        <p className="body-2 text-n-1">{feature}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 flex items-center justify-center">
          <Link
            className="font-code font-bold tracking-wider text-xs uppercase border-b"
            to={"#pricing"}
          >
            See The Full Details
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Pricing;
