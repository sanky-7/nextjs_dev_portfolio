
const InfoCard = ({number, text}) => {
  return (
    
                <div className="col-span-6 rounded-lg border border-[#ddd] px-2 py-2 md:col-span-4">
                  <div>
                    <div className="flex justify-center">
                      <h2 className="text-[40px] font-bold">
                        {number}
                        <span className="font-medium text-[#17B978]">+</span>
                      </h2>
                    </div>
                    <div className="mt-1 flex justify-center">
                      <p className="text-center text-[12px] font-semibold uppercase sm:text-[16px]">{text}</p>
                    </div>
                  </div>
                </div>

  )
}

export default InfoCard