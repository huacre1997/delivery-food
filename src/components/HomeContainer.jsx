import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import data from "../utils/data";
const HomeContainer = () => {
  return (
    <section
      className="grid  w-full grid-cols-1 gap-2 md:grid-cols-2"
      id="home"
    >
      <div className="flex flex-1 flex-col items-start justify-center gap-6 py-2">
        <div className="flex items-center justify-start gap-2 rounded-full bg-orange-100 px-4 py-1">
          <p className="text-base font-semibold text-orange-500">
            Moto Delivery
          </p>
          <div className="h-6 w-6 overflow-hidden rounded-full bg-white  drop-shadow-xl">
            <img
              src={Delivery}
              className="h-full w-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide  text-headingColor md:text-[5rem]">
          El delivery más rápido de{" "}
          <span className="text-[3rem] text-orange-600 md:text-[5rem]">
            {" "}
            Perú
          </span>
        </p>
        <p className="text-center text-base text-textColor md:w-[80%] md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem molestias placeat ad, delectus facilis ratione debitis
          reprehenderit facere laudantium, totam aliquam dignissimos sint ipsum
          dicta voluptatem? Harum maiores praesentium temporibus.
        </p>
        <button
          type="button"
          className=" w-full rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2  transition-all hover:shadow-lg md:w-auto "
        >
          Order Now
        </button>
      </div>
      <div className="relative flex flex-1 items-center py-2">
        <img
          src={HeroBg}
          alt=""
          className="ml-auto h-420 w-full lg:h-650  lg:w-auto"
        />
        <div className="absolute top-0 left-0 flex  w-full h-full md:h-1/2 md:top-1/4 flex-wrap items-center justify-center gap-4  py-4">
          {data &&
            data.map((n) => (
              <div
                key={n.id}
                className="flex  lg:w-190  flex-col items-center rounded-3xl bg-cardOverlay p-4 drop-shadow-lg backdrop-blur-md"
              >
                <img src={n.imageSrc} alt="" className="lg:-mt-20 w-20 lg:w-40 -mt-10" />
                <p className="text-base lg:text-xl mt-2 lg:mt-4 font-semibold text-textColor">{n.name}</p>
                <p className="text-[12px] my-1 lg:my-3 text-sm font-semibold text-lightTextGray">
                  {n.description}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">S/.</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
