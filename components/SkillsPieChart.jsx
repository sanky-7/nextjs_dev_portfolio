const SkillsPieChart = ({ percentage, skill }) => {
  return (
    <div className="col-span-4 mb-6 flex justify-center sm:mb-10 md:col-span-3 lg:col-span-2 z-[-20]">
      <div className="w-[120px] h-[120px] flex flex-col justify-center items-center">
        <div
          className="radial-progress text-[#17B978] font-bold"
          style={{ "--value": percentage }}
          role="progressbar"
        >
          {percentage}%
        </div>
        <div className="text__heading mt-3 flex justify-center">
          <h2 className="text-[14px] font-medium sm:text-base">{skill}</h2>
        </div>
      </div>
    </div>
  );
};

export default SkillsPieChart;
