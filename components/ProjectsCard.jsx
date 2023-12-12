import Image from "next/image";
import Link from "next/link";

const ProjectsCard = ({ image, title, techUsed, link }) => {
  return (
    <div className="card w-80 sm:w-96 bg-[#080b1c] hover:bg-gradient-to-r hover:from-[#080b1c] hover:to-black shadow-xl">
      <figure>
        <Image
          src={image}
          alt="Shoes"
          height={300}
          width={600}
        />
      </figure>
      <div className="card-body -mt-4">
        <h2 className="card-title">{title}</h2>
        <p className="text-gray-400 font-mono">{techUsed}</p>
        <div className="card-actions justify-end -mb-2">
          <Link href={link} target="_blank" className="inline-block rounded-full bg-slate-800 p-2 duration-200 ease-in hover:bg-[#6e5494]">
            <Image src="/github.svg" alt="github logo" height={30} width={30} className="dark:invert" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
