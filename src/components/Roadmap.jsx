import Section from "./Section";
import Bracketed from "./Bracketed";
import { roadmap } from "./../constants/index";
import { grid } from "../assets";
import Progress from "./Progress";
import { Gradient } from "./design/Roadmap";
import Button from "./Button";

function Roadmap() {
  return (
    <Section id={"roadmap"}>
      <div className="container relative">
        {/* Header */}
        <div className="flex flex-col items-center justify-start md:justify-center gap-4">
          <Bracketed>Ready to Get Started</Bracketed>
          <h2 className="h2">What we&apos;re working on</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-48">
          <Gradient />
          {roadmap.map((item, index) => (
            <div
              key={item.id}
              className={`p-0.25 rounded-[2.5rem] flex items-center justify-center ${
                index % 2 === 0 ? "-translate-y-[6rem]" : ""
              }  ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}
            >
              <div className="p-8 xl:p-16 relative w-full h-full overflow-hidden bg-n-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-8">
                {/* Grid */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                  <img src={grid} alt="grid" width={550} height={550} />
                </div>
                {/* Gradient */}

                {/* Heading */}
                <div className="flex flex-row items-center justify-between w-full">
                  <Bracketed>{item.date}</Bracketed>
                  <Progress status={item.status} />
                </div>
                {/* Center Image */}
                <div className="w-[125%] h-full flex items-center justify-center mt-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full"
                    width={630}
                    height={250}
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-4">
                  <h4 className="h4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-24 mb-16">
          <Button>Our Roadmap</Button>
        </div>
      </div>
    </Section>
  );
}

export default Roadmap;
