
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade,} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import { useEffect } from 'react';

export default function Section1() {
  return (
    <div>
      <Swiper
      // install Swiper modules
      modules={[ Pagination, Autoplay, EffectFade ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay= {{
        delay: 4000,
        disableOnInteraction: false
      }}
      effect={"fade"}
    >
      <SwiperSlide>
        <div className="relative">
            <div className=" h-screen items-center justify-center bg-no-repeat bg-cover image1">

            <div className="absolute top-0 right-0 bottom-0 left-0 w-full bgclr h-full overflow-hidden bg-fixed">
            <div className="flex items-center justify-center h-full">
                <div className="text-center font1 text-white px-6 md:px-12">
                <h1 className="text-3xl lg:text-6xl font-extrabold mt-0 mb-2">Kids Are The Best</h1>
                <h3 className="text-3xl lg:text-6xl font-extrabold mb-8">Explorers In The World</h3>
                <button type="button"
                    className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded-full py-3 px-5 leading-normal no-underline bg-orange-400 text-white hover:bg-orange-700 px-4 py-3"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                    Read More
                </button>
                </div>
            </div>
            </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative">
            <div className=" h-screen items-center justify-center bg-no-repeat bg-cover image2">

            <div className="absolute top-0 right-0 bottom-0 left-0 w-full bgclr h-full overflow-hidden bg-fixed">
            <div className="flex items-center justify-center h-full">
                <div className="text-center font1 text-white px-6 md:px-12">
                <h1 className="text-3xl lg:text-6xl font-extrabold mt-0 mb-2">Perfect Learned</h1>
                <h3 className="text-3xl lg:text-6xl font-extrabold mb-8">For Your Child</h3>
                <button type="button"
                    className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded-full py-3 px-5 leading-normal no-underline bg-orange-400 text-white hover:bg-orange-700 px-4 py-3"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                    Read More
                </button>
                </div>
            </div>
            </div>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
