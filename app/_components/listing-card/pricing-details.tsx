interface IProps {
  pricing: {
    originalPrice: number;
    discountedPrice: number;
    currency: string;
    includesTaxes: boolean;
  };
  stayInfo: {
    nights: number;
    occupants: { adults: number; children: number };
  };
  tags?: {
    best?: boolean;
    cheapest?: boolean;
  };
}

const PricingDetails = ({ pricing, stayInfo, tags }: IProps) => {
  return (
    <>
      {/* Only for md or above screen */}
      <div className="hidden md:block col-span-2 space-y-1 lg:space-y-1.5 p-3 xl:p-4">
        <div className="flex justify-end items-start gap-2">
          {tags?.best && (
            <button
              type="button"
              className="bg-majesticBlue/10 px-3 py-0.5 lg:py-1 rounded-md text-sm text-majesticBlue font-medium"
            >
              Best
            </button>
          )}
          {tags?.cheapest && (
            <button
              type="button"
              className="bg-amber-100 px-3 py-0.5 lg:py-1 rounded-md text-sm text-amber-500 font-medium"
            >
              Cheapest
            </button>
          )}
        </div>

        <div className="flex justify-end items-center gap-2 lg:gap-3">
          <span className="line-through text-sm lg:text-base">
            {pricing.currency} {pricing.originalPrice.toFixed(2)}
          </span>
          <span className="text-majesticBlue text-lg lg:text-xl font-semibold">
            {pricing.currency} {pricing.discountedPrice.toFixed(2)}
          </span>
        </div>
        {pricing.includesTaxes && (
          <div className="flex justify-end text-xs font-light">
            Includes Taxes & Charges
          </div>
        )}
        <div className="flex justify-end text-sm">{stayInfo.nights} nights</div>
        <div className="flex justify-end text-sm">
          {stayInfo.occupants.adults} Adult, {stayInfo.occupants.children} Child
        </div>
        <button
          type="button"
          className="flex justify-center items-center px-6 py-1.5 w-full rounded-md font-medium text-base lg:text-lg text-majesticBlue border border-majesticBlue"
        >
          Choose Room
        </button>
      </div>

      {/* Only for smaller screens */}
      <div className="flex flex-wrap justify-between md:hidden col-span-2 space-y-1 px-3 py-2">
        <div className="flex items-center">
          <span className="text-majesticBlue text-lg sm:text-xl font-semibold">
            {pricing.currency} {pricing.discountedPrice.toFixed(2)}
          </span>
          <span className="text-lg sm:text-xl text-gray-600">/</span>
          <span className="flex text-sm font-semibold text-gray-500">
            {stayInfo.nights} nights
          </span>
        </div>
        <button
          type="button"
          className="flex justify-center items-center px-3 sm:px-6 py-1.5 rounded-md font-medium text-sm sm:text-base text-majesticBlue border border-majesticBlue"
        >
          Choose Room
        </button>
      </div>
    </>
  );
};

export default PricingDetails;
