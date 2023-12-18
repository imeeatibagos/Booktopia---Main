import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// react icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/fave.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Pagination } from "reactstrap";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>

      <div className="mt-12">
        <Swiper
          slidePerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            760: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quibusdam officiis nostrum? Obcaecati molestias nisi
                  aspernatur dignissimos, dolores totam temporibus nam debitis
                  cupiditate, esse minima unde consequuntur beatae! Similique,
                  libero?
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Zuckerberg</h5>
                <p className="text-base ">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quibusdam officiis nostrum? Obcaecati molestias nisi
                  aspernatur dignissimos, dolores totam temporibus nam debitis
                  cupiditate, esse minima unde consequuntur beatae! Similique,
                  libero?
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Zuckerberg</h5>
                <p className="text-base ">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quibusdam officiis nostrum? Obcaecati molestias nisi
                  aspernatur dignissimos, dolores totam temporibus nam debitis
                  cupiditate, esse minima unde consequuntur beatae! Similique,
                  libero?
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Zuckerberg</h5>
                <p className="text-base ">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quibusdam officiis nostrum? Obcaecati molestias nisi
                  aspernatur dignissimos, dolores totam temporibus nam debitis
                  cupiditate, esse minima unde consequuntur beatae! Similique,
                  libero?
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Zuckerberg</h5>
                <p className="text-base ">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quibusdam officiis nostrum? Obcaecati molestias nisi
                  aspernatur dignissimos, dolores totam temporibus nam debitis
                  cupiditate, esse minima unde consequuntur beatae! Similique,
                  libero?
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Zuckerberg</h5>
                <p className="text-base ">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quibusdam officiis nostrum? Obcaecati molestias nisi
                  aspernatur dignissimos, dolores totam temporibus nam debitis
                  cupiditate, esse minima unde consequuntur beatae! Similique,
                  libero?
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Zuckerberg</h5>
                <p className="text-base ">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quibusdam officiis nostrum? Obcaecati molestias nisi
                  aspernatur dignissimos, dolores totam temporibus nam debitis
                  cupiditate, esse minima unde consequuntur beatae! Similique,
                  libero?
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Zuckerberg</h5>
                <p className="text-base ">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quibusdam officiis nostrum? Obcaecati molestias nisi
                  aspernatur dignissimos, dolores totam temporibus nam debitis
                  cupiditate, esse minima unde consequuntur beatae! Similique,
                  libero?
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Zuckerberg</h5>
                <p className="text-base ">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
