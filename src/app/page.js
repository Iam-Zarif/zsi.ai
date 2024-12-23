import DiscoverFleet from "@/components/DiscoverFleet/DiscoverFleet";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import QuickPriceCheck from "@/components/QuickPriceCheck/QuickPriceCheck";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <QuickPriceCheck/>
      <DiscoverFleet/>
      <FrequentlyAskedQuestions/>
    </div>
  );
}
