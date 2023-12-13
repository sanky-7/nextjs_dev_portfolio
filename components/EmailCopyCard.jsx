"use client";
import { toast } from "react-toastify";
const EmailCopyCard = () => {
  const copyToClipboard = async (e) => {
    try {
      e.preventDefault();
      await navigator.clipboard.writeText("sanketvaibhav10@gmail.com");
      toast.success("Email copied to clipboard", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="card card-bordered p-3 shadow-xl bg-[#080b1c] bg-opacity-30 flex flex-row items-center gap-3 mt-9 hover:cursor-pointer"
      onClick={copyToClipboard}
    >
      <div className="icon rounded-full bg-[#080b19] p-3 sm:p-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="text-[30px] text-[#17B878]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
      </div>
      <h3 className="font-mono text-gray-400">sanketvaibhav10@gmail.com</h3>
    </div>
  );
};

export default EmailCopyCard;
