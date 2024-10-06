import MarketingTag from "./tags/marketing.tag";
import DesignTag from "./tags/design.tag";
import SaleTag from "./tags/sale.tag";

export default function Tags() {
  return (
    <div className="flex gap-2 text-sm">
      <MarketingTag />
      <DesignTag />
      <SaleTag />
    </div>
  );
};
