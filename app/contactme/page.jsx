import EmailCopyCard from "@/components/EmailCopyCard";
import EmailForm from "@/components/EmailForm";

const ContactMe = () => {
  return (
    <div className="md:ml-[100px] items-center justify-center text-white mb-[100px] sm:mb-[0px]">
      <div>
        <div className="container mx-auto pt-[50px] md:pt-[80px]">
          <div className="relative flex justify-center">
            <h2 className="text-[36px] font-bold uppercase sm:text-[46px] md:text-[60px]">
              <span className="text-[#17B978]">CONTACT</span> ME
            </h2>
            <h2 className="absolute top-[0px] text-[50px] font-extrabold opacity-5 sm:text-[65px] md:top-[-20px] md:text-[100px] lg:text-[120px]">
              CONNECT
            </h2>
          </div>
        </div>
        <div className="items-center mt-[60px] sm:mt-[80px] flex justify-center flex-col">
          <EmailForm />
          <EmailCopyCard />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
