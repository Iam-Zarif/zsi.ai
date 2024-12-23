import DiscoverFleet from "@/components/DiscoverFleet/DiscoverFleet";
import QuickPriceCheck from "@/components/QuickPriceCheck/QuickPriceCheck";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <QuickPriceCheck/>
      <DiscoverFleet/>
    </div>
  );
}
