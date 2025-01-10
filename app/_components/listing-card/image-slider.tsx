import image1 from '@/public/images/airbnb-listing-1.jpg';
import image2 from '@/public/images/airbnb-listing-2.jpg';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  title: string;
}

const ImageSlider = ({ title }: IProps) => {
  return (
    <div className="md:w-52 lg:w-72 2xl:w-80 p-3 pb-0 md:p-0 md:m-3 2xl:m-4 mr-0 flex justify-center items-center">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={2800}
        navigation={false}
        modules={[Autoplay, Pagination]}
        spaceBetween={15}
      >
        <SwiperSlide>
          <div className="relative shrink-0 w-full aspect-[320/200] md:aspect-[335/280] lg:aspect-[335/216]">
            <Image
              fill
              src={image1}
              alt={title}
              className="object-cover rounded"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative shrink-0 w-full aspect-[320/200] md:aspect-[335/280] lg:aspect-[335/216]">
            <Image
              fill
              src={image2}
              alt={title}
              className="object-cover rounded"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative shrink-0 w-full aspect-[320/200] md:aspect-[335/280] lg:aspect-[335/216]">
            <Image
              fill
              src={image1}
              alt={title}
              className="object-cover rounded"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative shrink-0 w-full aspect-[320/200] md:aspect-[335/280] lg:aspect-[335/216]">
            <Image
              fill
              src={image2}
              alt={title}
              className="object-cover rounded"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
