import clock from "../../../public/images/components/quickPriceCheck/clock.png";
import airplane from "../../../public/images/components/quickPriceCheck/airplane.png";
import Image from "next/image";

const QuickPriceCheck = () => {
  return (
    <div className="2xl:max-w-[1350px] w-full mx-auto px-4">
      <p className="text-4xl font-serif text-center">Quick Price Check</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="flex items-center gap-6 bg-yellow-600 px-5 py-8 text-white">
          <div>
            <Image src={clock} alt="clock" width={50} height={50} />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl font-serif">Hourly Rate</p>
            <p className="text-lg">Start from $60</p>
          </div>
        </div>
        <div className="flex items-center gap-6 bg-yellow-600 px-5 py-8 text-white">
          <div>
            <Image src={airplane} alt="airplane" width={50} height={50} />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl font-serif">LGA AIRPORT</p>
            <p className="text-lg">Start from $80.00</p>
          </div>
        </div>
        <div className="flex items-center gap-6 bg-yellow-600 px-5 py-8 text-white">
          <div>
            <Image src={airplane} alt="airplane" width={50} height={50} />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl font-serif">JFK AIRPORT</p>
            <p className="text-lg">Start from $90.00</p>
          </div>
        </div>
        <div className="flex items-center gap-6 bg-yellow-600 px-5 py-8 text-white">
          <div>
            <Image src={airplane} alt="airplane" width={50} height={50} />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xl font-serif">EWR AIRPORT</p>
            <p className="text-lg">Start from $100.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPriceCheck;
