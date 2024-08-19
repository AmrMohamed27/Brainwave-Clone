import { loading } from "../assets";

function Generating({ className }) {
  return (
    <div
      className={`${className} flex flex-row items-center justify-start gap-4 rounded-full bg-n-8/80 px-6 py-4 absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[31rem]`}
    >
      <div>
        <img src={loading} alt="loading" width={20} />
      </div>
      <p>AI is generating</p>
    </div>
  );
}

export default Generating;
