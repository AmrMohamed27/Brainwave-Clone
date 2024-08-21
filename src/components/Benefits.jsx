import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "./../assets/svg/ClipPath";

function Benefits() {
  const bg = [
    "bg-benefit-card-1",
    "bg-benefit-card-2",
    "bg-benefit-card-3",
    "bg-benefit-card-4",
    "bg-benefit-card-5",
    "bg-benefit-card-6",
  ];
  return (
    <Section id="features">
      <div className="container relative z-2 mb-10">
        <div className="flex flex-col items-center justify-center gap-24 md:gap-32 lg:gap-40">
          <Heading
            className={
              "flex justify-center items-center text-center max-w-[40rem]"
            }
            title={"Chat Smarter, Not Harder with Brainwave"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benef) => (
              <div
                key={benef.id}
                className={`relative md:max-w-96 bg-no-repeat bg-[length:100%_100%] ${
                  bg[benef.id]
                }`}
              >
                <div className="p-10 rounded-xl relative pointer-events-none z-10 flex flex-col items-start justify-center gap-16 min-h-[22rem]">
                  <div className="flex flex-col relative items-start justify-center gap-5 h-48">
                    <h5 className="h5">{benef.title}</h5>
                    <p className="body-2 text-n-3 h-1/2">{benef.text}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <img src={benef.iconUrl} width={48} height={48} />
                    <div className="flex flex-row items-center">
                      <p className="quote text-xs uppercase font-bold">
                        Explore More
                      </p>
                      <Arrow />
                    </div>
                  </div>
                </div>
                {benef.light && <GradientLight />}
                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {benef.imageUrl && (
                      <img
                        src={benef.imageUrl}
                        alt={benef.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <ClipPath />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Benefits;
