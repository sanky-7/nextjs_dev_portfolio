const ServicesCard = ({ svg, title, description }) => {
  return (
    <div className="card card-bordered shadow-xl p-6 gap-1 flex flex-col items-center w-[310px] hover:bg-[#17B978]">
      <div className="mb-3" dangerouslySetInnerHTML={{ __html: svg }} />
      <h2 className="text-[25px] font-bold">{title}</h2>
      <p className="text-center text-[15px]">{description}</p>
    </div>
  );
};

export default ServicesCard;
