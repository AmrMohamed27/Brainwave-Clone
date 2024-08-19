import { yourlogo } from "../assets";

function CompanyLogos() {
  return (
    <div className="hidden relative z-10 lg:flex flex-col items-center justify-center gap-24">
      <div className="flex items-center justify-center">
        <p className="tagline text-n-1/50">
          HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
        </p>
      </div>
      <div className="flex flex-row gap-32 items-center justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <img src={yourlogo} alt="yourlogo" width="{50}" key={i} />
        ))}
      </div>
    </div>
  );
}

export default CompanyLogos;
