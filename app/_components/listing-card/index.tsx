'use client';
import image1 from '@/public/images/airbnb-listing-1.jpg';
import Image from 'next/image';
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
    <div className="shadow-lg border border-gray-200 rounded-lg sm:w-96 md:flex md:w-full">
      <div className="md:w-52 lg:w-72 2xl:w-80 p-3 pb-0 md:p-0 md:m-3 2xl:m-4 mr-0 flex justify-center items-center">
        <div className="relative shrink-0 w-full aspect-[320/200] md:aspect-[335/280] lg:aspect-[335/216]">
          <Image
            fill
            src={image1}
            alt="Airbnb Listing 1"
            className="object-cover rounded"
          />
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-5 md:flex-1">
        {/* Part 1 */}
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
              {features?.cityView && (
                <Feature icon={TbWindow} label="City View" />
              )}
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

        {/* Part 2 for md or above screen */}
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
          <div className="flex justify-end text-sm">
            {stayInfo.nights} nights
          </div>
          <div className="flex justify-end text-sm">
            {stayInfo.occupants.adults} Adult, {stayInfo.occupants.children}{' '}
            Child
          </div>
          <button
            type="button"
            className="flex justify-center items-center px-6 py-1.5 w-full rounded-md font-medium text-base lg:text-lg text-majesticBlue border border-majesticBlue"
          >
            Choose Room
          </button>
        </div>

        {/* Part 3 for smaller screens */}
        <div className="flex justify-between md:hidden col-span-2 space-y-1 p-3">
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
      </div>
    </div>
  );
};

export default ListingCard;
