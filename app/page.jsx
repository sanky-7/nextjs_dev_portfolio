import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Vaibhav's Portfolio" />
        <meta property="og:description" content="Created by Vaibhav Sanket using Next.js" />
        <meta property="og:image" content="/ogimage.png" />
      </Head>
      <main className="md:ml-[100px] flex flex-col min-h-screen items-center justify-center py-[60px] md:py-0 text-white">
        <div className="mb-6 flex justify-center md:hidden">
          <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full ring-4 ring-[#373D4D] ring-offset-0">
            <Image
              src="/SanketImage.jpg"
              alt="Vaibhav Sanket"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:mx-20 mx-10">
          <h2 className="text-[26px] font-bold sm:text-[32px] md:text-[50px] lg:text-[60px]">
            I am
            <span className="ml-2 text-[#17b978]">Vaibhav Sanket</span>
          </h2>
          <h3 className="h-[60px] text-[25px] font-bold sm:text-[30px] md:text-[35px] lg:text-[45px]">
            <Typewriter
              words={["WEB DEVELOPER", "WEB DESIGNER", "FULL-STACK DEVELOPER"]}
              loop={0 | false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p className="mt-3 text-center text-gray-300 leading-[27px] sm:text-base sm:leading-[35px] sm:font-medium">
            I&apos;m a passionate full stack developer with a deep understanding
            of web development process. I leverage my expertise in React,
            Next.js, Tailwind CSS, MongoDB, Prisma and various other tools to
            build innovative and visually stunning web applications. Let&apos;s
            connect and discuss how I can help you achieve your digital goals.
          </p>
        </div>
        <div className="flex flex-row mt-3 gap-4 md:mt-7">
          <Link
            href="https://github.com/sanky-7"
            target="_blank"
            className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#6e5494]"
          >
            <Image
              src="/github.svg"
              alt="github logo"
              height={24}
              width={24}
              className="dark:invert"
            />
          </Link>
          <Link
            href="https://www.instagram.com/_.jul_7"
            target="_blank"
            className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-[#0077b5]"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn logo"
              height={24}
              width={24}
              className="dark:invert"
            />
          </Link>
          <Link
            href="https://www.instagram.com/_.jul_7"
            target="_blank"
            className="inline-block rounded-full bg-[#dddddd31] p-3 duration-200 ease-in hover:bg-gradient-to-r hover:from-[#833ab4] hover:to-[#fd1d1d]"
          >
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 50 50"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </Link>
        </div>
        <div>
          <Link href="https://www.google.com" target="_blank">
            <button className="btn btn-outline md:mt-10 mt-6 border-[3px] border-[#17b978] hover:bg-[#17b978] hover:border-[#17b978]">
              Download CV
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
