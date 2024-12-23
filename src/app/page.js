"use client";
import DiscoverFleet from "@/components/DiscoverFleet/DiscoverFleet";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import QuickPriceCheck from "@/components/QuickPriceCheck/QuickPriceCheck";
import Title from "@/hooks/useTitle";

export default function Home() {
  Title("RPC Limo");
  return (
    <div className="flex flex-col gap-16 mt-28">
      <QuickPriceCheck/>
      <DiscoverFleet/>
      <FrequentlyAskedQuestions/>
    </div>
  );
}
