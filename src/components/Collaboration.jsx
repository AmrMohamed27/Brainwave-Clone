import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { check, brainwaveSymbol } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

function Collaboration() {
  const collabAppsPairs = [
    [collabApps[0], collabApps[1]],
    [collabApps[2], collabApps[3]],
    [collabApps[4], collabApps[5]],
    [collabApps[6], collabApps[7]],
  ];
  return (
    <Section id="collaboration" crosses>
      <div className="relative container">
        <div className="relative flex flex-col lg:flex-row lg:justify-between items-center gap-72">
          <div className="flex flex-col gap-6 lg:gap-10 lg:max-w-[30%]">
            <h2 className="h2">AI Chat App for seamless collaboration</h2>
            <ul className="flex flex-col gap-6 lg:gap-10">
              {collabContent.map((content) => (
                <li key={content.id} className="flex flex-col gap-4">
                  <div className="flex flex-row items-center gap-6">
                    <img src={check} alt="check" />
                    <p className="body-2">{content.title}</p>
                  </div>
                  {content.text && (
                    <p className="body-2 text-n-4">{content.text}</p>
                  )}
                </li>
              ))}
            </ul>
            <Button className={"max-w-36 mt-6"}>Try it Now</Button>
          </div>
          <div className="flex flex-col gap-8 lg:gap-32 justify-center items-center w-full h-full relative">
            <p className="body-2 text-n-4 lg:max-w-[22rem]">{collabText}</p>
            <div className="aspect-square rounded-full w-[22rem] border-2 border-n-6 flex justify-center items-center relative">
              <LeftCurve />
              <RightCurve />
              <div className="aspect-square rounded-full w-60 border-2 border-n-6 flex justify-center items-center relative">
                <div className="aspect-square rounded-full bg-conic-gradient w-24 p-1">
                  <div className="flex justify-center items-center rounded-full aspect-square bg-n-8 w-full h-full">
                    <img src={brainwaveSymbol} alt="Brainwave Symbol" />
                  </div>
                </div>
              </div>
              {collabAppsPairs.map((pair, index) => (
                <div
                  key={pair[0].id}
                  className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  rotate-${
                    index * 45
                  } origin-center flex flex-row justify-between w-[25rem]`}
                >
                  <div
                    className={`-rotate-${
                      index * 45
                    } bg-n-8 w-[3.2rem] h-[3.2rem] flex justify-center items-center border-2 border-n-6 rounded-xl`}
                  >
                    <img
                      src={pair[0].icon}
                      alt={pair[0].title}
                      width={pair[0].width}
                      height={pair[0].height}
                    />
                  </div>
                  <div
                    className={`-rotate-${
                      index * 45
                    } bg-n-8 w-[3.2rem] h-[3.2rem] flex justify-center items-center border-2 border-n-6 rounded-xl`}
                  >
                    <img
                      src={pair[1].icon}
                      alt={pair[1].title}
                      width={pair[1].width}
                      height={pair[1].height}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Collaboration;
