import Link from 'next/link';
import { BiSolidLike } from 'react-icons/bi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6';
import { PiSwimmingPool, PiWifiHigh } from 'react-icons/pi';
import { TbWindow } from 'react-icons/tb';
import Feature from './feature';

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
}

const ListingDetails = ({
  title,
  ratingsInfo,
  location,
  distanceInfo,
  features,
}: IProps) => {
  // Handles rendering stars for ratings
  const renderStars = () => {
    const fullStars = Math.floor(ratingsInfo?.ratings); // Number of full stars
    const hasHalfStar = ratingsInfo?.ratings % 1 >= 0.5; // Check if there's a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`star-full-${i}`}
          className="text-brightOrange text-base"
        />
      );
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfStroke
          key="star-half"
          className="text-brightOrange text-base"
        />
      );
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar
          key={`star-empty-${i}`}
          className="text-brightOrange text-base"
        />
      );
    }

    return stars;
  };
  return (
    <div className="col-span-3 space-y-2 md:space-y-1 lg:space-y-2 border-b md:border-b-0 md:border-r border-gray-500 border-dashed p-3 xl:p-4">
      {/* Title & Ratings */}
      <div className="flex gap-1 items-center justify-between md:justify-normal">
        <h1 className="md:text-lg lg:text-xl font-semibold truncate">
          {title}
        </h1>
        <span className="shrink-0 flex gap-0.5">{renderStars()}</span>
      </div>

      <div className="space-y-2 lg:space-y-3">
        {/* Location */}
        <p className="text-gray-500 text-sm lg:text-base">{location}</p>
        <div className="flex flex-col-reverse md:flex-row flex-wrap gap-y-1 gap-x-5">
          <Link
            href="/"
            className="text-[13px] lg:text-sm text-majesticBlue flex items-center font-medium gap-1"
          >
            View property in map <FaExternalLinkAlt className="text-sm" />
          </Link>
          <span className="text-[13px] lg:text-sm text-gray-700">
            📍 {distanceInfo}
          </span>
        </div>

        {/* Features */}
        <div className="flex gap-3 items-center">
          {features?.wifi && <Feature icon={PiWifiHigh} label="Wifi" />}
          {features?.swimmingPool && (
            <Feature icon={PiSwimmingPool} label="Swimming Pool" />
          )}
          {features?.cityView && <Feature icon={TbWindow} label="City View" />}
        </div>

        {/* Ratings Info */}
        <button
          type="button"
          className="flex items-center gap-1 bg-gray-200 py-1.5 px-4 rounded-md"
        >
          <BiSolidLike className="text-majesticBlue size-5" />{' '}
          <span className="text-sm font-bold">{ratingsInfo?.ratings}</span>{' '}
          <span className="text-xs md:text-sm">
            ({ratingsInfo?.reviewsCount} Reviews)
          </span>
        </button>
      </div>
    </div>
  );
};

export default ListingDetails;
