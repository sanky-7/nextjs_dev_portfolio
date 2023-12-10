"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex md:flex-col items-center justify-center md:border-r-[hsla(0,0%,87%,0.171)] md:border-r md:border-solid fixed md:left-0 md:h-full md:w-[100px] bottom-0 h-auto w-full bg-[#080b1c] gap-5">
      <div className="hidden md:flex justify-center items-center logo py-10 w-[80px] h-[80px] rounded-full overflow-hidden ring-offset-0 ring-2 ring-[#373D4D]">
        <Image
          src="/SanketImage.jpg"
          alt="Vaibhav Sanket"
          height={200}
          width={200}
        />
      </div>
      <ul className="flex flex-row md:flex-col items-center justify-center gap-3 py-3 md:py-0">
        <Link href="/">
          <li
            className={`rounded-full p-4 duration-200 ease-in hover:bg-[#17b978] ${
              pathname === "/" ? "bg-[#17b978]" : "bg-[#dddddd31]"
            }`}
          >
            <svg
              stroke="currentColor"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="text-[20px] md:text-[19px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
            </svg>
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`rounded-full p-4 duration-200 ease-in hover:bg-[#17b978] ${
              pathname === "/about" ? "bg-[#17b978]" : "bg-[#dddddd31]"
            }`}
          >
            <svg
              stroke="currentColor"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-[20px] md:text-[19px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path>
            </svg>
          </li>
        </Link>
        <Link href="/services">
          <li
            className={`rounded-full p-4 duration-200 ease-in hover:bg-[#17b978] ${
              pathname === "/services" ? "bg-[#17b978]" : "bg-[#dddddd31]"
            }`}
          >
            <svg
              stroke="currentColor"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-[20px] md:text-[19px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16.24 11.51l1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89l-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
          </li>
        </Link>
        <Link href="/portfolio">
          <li
            className={`rounded-full p-4 duration-200 ease-in hover:bg-[#17b978] ${
              pathname === "/portfolio" ? "bg-[#17b978]" : "bg-[#dddddd31]"
            }`}
          >
            <svg
              stroke="currentColor"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-[20px] md:text-[19px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"></path>
            </svg>
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={`rounded-full p-4 duration-200 ease-in hover:bg-[#17b978] ${
              pathname === "/contact" ? "bg-[#17b978]" : "bg-[#dddddd31]"
            }`}
          >
            <svg
              stroke="currentColor"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-[20px] md:text-[19px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
