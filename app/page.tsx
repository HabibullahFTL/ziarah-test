import ListingCard from './_components/listing-card';

export default function Home() {
  return (
    <div className="font-airbnb_cereal px-4 flex justify-center items-center max-w-5xl min-h-screen">
      <ListingCard
        title="Hotel Golden Palace, Puri"
        ratingsInfo={{ ratings: 4.5, reviewsCount: 23 }}
        location="VIP Rd, Puri, Odisha-752002"
        distanceInfo="34.32 KM from center"
        features={{
          wifi: true,
          swimmingPool: true,
          cityView: true,
        }}
        pricing={{
          originalPrice: 34440.87,
          discountedPrice: 31440.25,
          currency: '₹',
          includesTaxes: true,
        }}
        stayInfo={{
          nights: 3,
          occupants: { adults: 2, children: 2 },
        }}
        tags={{
          best: true,
          cheapest: true,
        }}
      />
    </div>
  );
}
