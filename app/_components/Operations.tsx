'use client';

import { useState } from 'react';
import { data, dataStr } from '../utils/helper';

export default function Operations() {
  const [index, setIndex] = useState<number>(0);
  return (
    <section
      className="sm:py-36 xs:py-12 border-y border-[#DDDDDD]"
      id="section--2"
    >
      <div className="lg:max-w-3xl lg:mx-auto xs:text-center lg:text-start">
        <h2 className="text-base leading-8 text-primary font-semibold mb-3 block">
          Operations
        </h2>
        <h3 className="mb-20 block lg:text-[40px] md:text-2xl sm:text-base xs:text-xs md:leading-[52px] xs:leading-8 font-medium xs:mx-1">
          Everything as simple as possible, but no simpler.
        </h3>
      </div>

      <div className="xl:max-w-[1000px] lg:max-w-3xl mx-auto bg-[#ffffff] xs:max-w-[90%]">
        <div className="flex items-center justify-center gap-6 -translate-y-[50%]">
          {data.map((d, i) => (
            <button
              key={i}
              className={`flex sm:gap-2 sm:leading-8 ${
                d.color
              }  md:px-6 md:py-3 xs:px-1 sm:px-2 sm:py-3 xs:py-1 xs:gap-1 xs:justify-center xs:items-center rounded-full sm:text-base xs:text-[7px] sm:font-medium text-black cursor-pointer duration-500 transition-all font-[inherit]  ${
                i === index && '-translate-y-[20%]'
              } duration-150 transition-all hover:${d.hover}`}
              data-tab={i + 1}
              onClick={() => setIndex(i)}
            >
              <span>0{i + 1}</span>
              {d.title}
            </button>
          ))}
        </div>
        {dataStr.map((d, i) => (
          <div
            className={`sm:px-[70] xs:px-[50px] pt-[25px] pb-[65px] ${
              i === index
                ? 'lg:grid lg:grid-cols-[7rem,1fr] sm:gap-x-8 sm:gap-y-2 lg:items-center xs:flex xs:flex-col xs:gap-4'
                : 'hidden'
            }`}
            key={i}
          >
            <div
              className={`sm:h-[70px] sm:w-[70px] xs:w-[30px] xs:h-[30px] ${
                data.at(i)?.opacity
              } rounded-full`}
            ></div>
            <h5 className="sm:text-xl xs:text-[11px]  font-semibold">
              {d.title}
            </h5>
            <p className="col-2 sm:text-base xs:text-[9px] xs:leading-4 sm:leading-8 font-light">
              {d.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
