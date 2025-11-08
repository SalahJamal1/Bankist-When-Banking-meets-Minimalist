import Image from 'next/image';
import { items } from '../utils/helper';
export default function Features() {
  return (
    <section
      className="sm:py-36 xs:py-12 border-y border-[#DDDDDD]"
      id="section--1"
    >
      <div className="lg:max-w-3xl lg:mx-auto xs:text-center lg:text-start">
        <h2 className="text-base leading-8 text-primary font-semibold mb-3 block">
          Features
        </h2>
        <h3 className="mb-20 block sm:text-base xs:text-xs lg:text-[40px] md:text-2xl md:leading-[52px] font-medium xs:mx-1">
          Everything you need in a modern bank and more.
        </h3>
      </div>

      <div className="xl:max-w-[1170px] lg:max-w-4xl mx-auto xs:max-w-[90%]">
        {items.map((item, i) => (
          <div
            key={item.header}
            className="grid lg:grid-cols-2 gap-x-10 mb-10 xs:place-items-center xs:space-y-5"
          >
            <div className="relative w-full  aspect-video">
              <Image
                fill
                placeholder="blur"
                alt={item.header}
                src={item.img.lazySrc}
                blurDataURL={item.img.src}
                className={`object-contain ${i === 1 && 'col-start-2'}`}
              />
            </div>
            <div
              className={`${
                i === 1 && 'lg:col-start-1 lg:row-start-1'
              } xl:mx-20 lg:mx-2 xs:mx-10`}
            >
              <div className="block bg-primary-opacity h-[55px] w-[55px] rounded-full mb-5"></div>
              <h5 className="font-semibold sm:text-xl xs:text-[11px] leading-9 mb-3 block">
                {item.header}
              </h5>
              <p className="font-extralight sm:text-base xs:text-[9px] sm:leading-7 xs:leading-4">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
