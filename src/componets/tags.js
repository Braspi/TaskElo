import MarketingTag from "./tags/marketingTag";
import DesignTag from "./tags/designTag";
import SaleTag from "./tags/saleTag";

const tags = () => {
    return (
        <>
        <div className="flex gap-2 text-sm">
            <MarketingTag/>
            <DesignTag/>
            <SaleTag/>
        </div>
        </>
    )
}

export default tags;