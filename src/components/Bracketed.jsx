import brackets from "./../assets/svg/Brackets";

function Bracketed({ children }) {
  return (
    <p className="tagline uppercase flex items-center gap-4 text-n-3">
      {brackets("left")} {children}
      {brackets("right")}
    </p>
  );
}

export default Bracketed;
