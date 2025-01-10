'use client';
import ImageSlider from './image-slider';
import ListingDetails from './listing-details';
import PricingDetails from './pricing-details';

interface IProps {
  title: string;
  ratingsInfo: { ratings: number; reviewsCount: number };
  location: string;
  distanceInfo: string;
  features: {
    wifi: boolean;
    swimmingPool: boolean;
    cityView: boolean;
  };
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

const ListingCard = ({
  title,
  ratingsInfo,
  location,
  distanceInfo,
  features,
  pricing,
  stayInfo,
  tags,
}: IProps) => {
  return (
    <div className="shadow-lg border border-gray-200 rounded-lg w-full xs:w-80 sm:w-96 md:flex md:w-full">
      <ImageSlider title={title} />

      <div className="flex flex-col md:grid md:grid-cols-5 md:flex-1">
        <ListingDetails
          title={title}
          ratingsInfo={ratingsInfo}
          location={location}
          distanceInfo={distanceInfo}
          features={features}
        />
        <PricingDetails pricing={pricing} stayInfo={stayInfo} tags={tags} />
      </div>
    </div>
  );
};

export default ListingCard;
