import InfoCard from "@/components/InfoCard";
import SkillsPieChart from "@/components/SkillsPieChart";
import Image from "next/image";

const About = () => {
  return (
    <main className="md:ml-[100px] flex flex-col min-h-screen items-center justify-center py-[60px] md:py-0 text-white mb-[30px]">
      <div className="container mx-auto pt-[50px] md:pt-[80px]">
        <div className="relative flex justify-center">
          <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
            About <span className="text-[#17B978]">Me</span>
          </h2>
          <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
            Resume
          </h2>
        </div>
      </div>
      <div className="container mx-auto mt-10 px-5 md:mt-24 md:px-14">
        <div className="grid grid-cols-12 gap-2 md:gap-10">
          <div className="col-span-12 xl:col-span-6">
            <div className=" block gap-8 md:flex">
              <div className='relative z-20 hidden before:absolute before:left-[16px] before:top-[-16px] before:z-[-9] before:h-full before:w-full before:border-[5px] before:border-[#17B978] before:content-[""] md:block'>
                <Image
                  src="/SanketImage.jpg"
                  alt="Vaibhav Sanket"
                  height={200}
                  width={200}
                  className="h-48 w-full rounded-md object-cover md:h-full md:w-[250px]"
                />
              </div>
              <div className="mb-6 flex justify-center md:hidden">
                <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full ring-4 ring-[#373D4D] ring-offset-0">
                  <Image
                    src="/SanketImage.jpg"
                    alt="Vaibhav Sanket"
                    height={200}
                    width={200}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-5 md:pl-4 md:pt-0">
                <h3 className="border-b-2 pb-1 text-2xl font-bold">
                  PERSONAL INFO
                </h3>
                <div>
                  <ul className="mt-2">
                    <li className="mb-2 text-sm text-slate-400">
                      Name:
                      <span className="pl-2 text-base font-medium text-slate-200">
                        Vaibhav Sanket
                      </span>
                    </li>
                    <li className="mb-2 text-sm text-slate-400">
                      Age:
                      <span className="pl-2 text-base font-medium text-slate-200">
                        21
                      </span>
                    </li>
                    <li className="mb-2 text-sm text-slate-400">
                      Email:
                      <span className="pl-2 text-base font-medium text-slate-200">
                        sanketvaibhav10@gmail.com
                      </span>
                    </li>
                    <li className="mb-2 text-sm text-slate-400">
                      Discord:
                      <span className="pl-2 text-base font-medium text-slate-200">
                        julius.skywalker
                      </span>
                    </li>
                    <li className="mb-2 text-sm text-slate-400">
                      Languages:
                      <span className="pl-2 text-base font-medium text-slate-200">
                        English, Hindi
                      </span>
                    </li>
                    <li className="mb-2 text-sm text-slate-400">
                      Nationality:
                      <span className="pl-2 text-base font-medium text-slate-200">
                        India
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-3 md:mt-0 xl:col-span-6 z-[-20]">
            <div className="relative xl:ml-5">
              <div className="grid grid-cols-12 gap-6">
                <InfoCard number="2" text="YEARS OF EXPERIENCE" />
                <InfoCard number="15" text="COMPLETED PROJECTS" />
                <InfoCard number="23" text="ATTENDED MEETINGS" />
                <InfoCard number="10" text="TEAM CONTRIBUTIONS" />
                <InfoCard number="12" text="TECH STACK MASTERY" />
                <InfoCard number="5" text="CERTIFICATES" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto pt-[60px] md:pt-[80px] z-[-20]">
          <div className="relative flex justify-center z-[-20]">
            <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
              <span className="text-[#17B978]">MY</span> SKILLS
            </h2>
            <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
              EXPERIENCES
            </h2>
          </div>
        </div>
        <div className="mt-18 container mx-auto px-5 md:mt-24 md:px-14">
          <div className="mt-16">
            <div className="grid grid-cols-12 gap-5 md:gap-10">
              <SkillsPieChart percentage={95} skill="HTML5" />
              <SkillsPieChart percentage={92} skill="CSS3" />
              <SkillsPieChart percentage={85} skill="JavaScript" />
              <SkillsPieChart percentage={80} skill="TypeScript" />
              <SkillsPieChart percentage={86} skill="React" />
              <SkillsPieChart percentage={93} skill="NextJS" />
              <SkillsPieChart percentage={96} skill="TailwindCSS" />
              <SkillsPieChart percentage={84} skill="MongoDB" />
              <SkillsPieChart percentage={89} skill="NodeJS" />
              <SkillsPieChart percentage={76} skill="Git" />
              <SkillsPieChart percentage={70} skill="Prisma" />
              <SkillsPieChart percentage={88} skill="Linux" />

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
