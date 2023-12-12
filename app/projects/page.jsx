import ProjectsCard from "@/components/ProjectsCard";
import { ProjectsData } from "@/constants";

const Projects = () => {
  return (
    <div className="md:ml-[100px] items-center justify-center text-white">
      <div>
        <div className="container mx-auto pt-[50px] md:pt-[80px]">
          <div className="relative flex justify-center">
            <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
              MY <span className="text-[#17B978]">PROJECTS</span>
            </h2>
            <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
              Showcase
            </h2>
          </div>
        </div>
        <div className="container mx-auto mt-16 mb-32 px-5 md:mt-24 md:mb-20 md:px-14">
          <div className="gap-6 flex flex-wrap flex-col md:flex-row md:basis-1/2 lg:basis-1/3 xl:basis-1/4 justify-center items-center">
          {Object.entries(ProjectsData).map(([key, projects]) => {
              const { image, title, techUsed, link } = projects;
              return (
                <ProjectsCard
                  key={key}
                  image={image}
                  title={title}
                  techUsed={techUsed}
                  link={link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
