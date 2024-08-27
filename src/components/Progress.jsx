import { MdOutlineDone as Check } from "react-icons/md";
import { TbLoader as Loader } from "react-icons/tb";

function Progress({ status }) {
  return (
    <div className="flex flex-row items-center gap-2 bg-white rounded-sm text-n-14 px-4 py-1">
      {status === "done" ? (
        <>
          <Check className="text-n-8" />
          <p className="tagline uppercase flex items-center gap-4 text-n-8">
            Done
          </p>
        </>
      ) : status === "progress" ? (
        <>
          <Loader className="text-n-8" />
          <p className="tagline uppercase flex items-center gap-4 text-n-8">
            In Progress
          </p>
        </>
      ) : (
        <>
          <p className="tagline uppercase flex items-center gap-4 text-n-8">
            Invalid Status
          </p>
        </>
      )}
    </div>
  );
}

export default Progress;
