'use client';
import Image from 'next/image';
import { useState } from 'react';
import { testimonials } from '../utils/helper';

export default function Reviewers() {
  const [currentSlide, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // 🟢 Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // 🟡 Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const nextSlide = () => {
    setCurrent(prev => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };
  const prevSlide = () => {
    setCurrent(prev => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };
  // 🔵 Handle touch end (decide direction)
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;

    // Sensitivity threshold
    if (distance > 50) nextSlide(); // Swipe left → next
    if (distance < -50) prevSlide(); // Swipe right → previous

    // Reset
    setTouchStartX(null);
    setTouchEndX(null);
  };
  const activeDote = (slide: number) => {
    setCurrent(slide);
  };
  return (
    <section
      className="sm:py-36 xs:py-12 border-y border-[#DDDDDD]"
      id="section--3"
    >
      <div className="lg:max-w-3xl lg:mx-auto lg:text-start xs:text-center">
        <h2 className="text-base leading-8 text-primary font-semibold mb-3 block">
          Not sure yet?
        </h2>
        <h3 className="md:mb-20 block lg:text-[40px] md:text-2xl lg:text-start xs:text-center xs:leading-7 md:leading-[52px] font-medium sm:text-base xs:text-xs xs:mx-1">
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>

      <div
        className="md:max-w-5xl mx-auto relative md:h-100 xs:min-h-100 overflow-hidden sm:max-w-[90%]"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {testimonials.map((testimonial, i) => (
          <div
            style={{
              transform: `translateX(${100 * (i - currentSlide)}%)`,
            }}
            className={`absolute top-0 md:w-full md:h-100 xs:min-h-100 flex items-center justify-center transition-all duration-300`}
            key={i}
          >
            <div className="md:w-[65%] xs:w-[67%]">
              <h5 className="lg:text-2xl sm:text-base leading-10 font-semibold mb-4">
                {testimonial.header}
              </h5>
              <blockquote className="sm:text-base xs:text-xs md:leading-8 sm:leading-5 xs:leading-4 font-light mb-4 text-[#666]">
                {testimonial.text}
              </blockquote>
              <address className="sm:ml-8 grid grid-cols-[4rem_1fr] sm:gap-x-5 xs:gap-x-2">
                <Image
                  height={65}
                  width={65}
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-full md:h-16 md:w-16 row-span-2 xs:h-12 xs:w-12"
                />
                <h6 className="sm:text-base xs:text-xs md:leading-8 sm:leading-3 font-medium">
                  {testimonial.name}
                </h6>
                <p className="sm:text-base xs:text-xs md:leading-7 sm:leading-3 font-light col-2">
                  {testimonial.location}
                </p>
              </address>
            </div>
          </div>
        ))}

        <button
          className="bg-[#ffffff] xs:w-6 xs:h-6 lg:w-[55px] lg:h-[55px] lg:text-3xl sm:w-[30px] sm:h-[30px] sm:text-base font-semibold absolute top-[40%] sm:left-[6%] xs:left-5 rounded-full cursor-pointer"
          onClick={prevSlide}
        >
          &larr;
        </button>
        <button
          className="bg-[#ffffff] xs:w-6 xs:h-6 lg:w-[55px] lg:h-[55px] lg:text-3xl sm:w-[30px] sm:h-[30px] sm:text-base font-semibold absolute top-[40%] sm:right-[6%] xs:right-5 rounded-full cursor-pointer"
          onClick={nextSlide}
        >
          &rarr;
        </button>

        <div className="flex gap-3 absolute bottom-0 left-[50%] translate-x-[-50%]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`bg-[#dddddd]  h-3 w-3 rounded-full cursor-pointer ${
                i === currentSlide && 'bg-white'
              }`}
              data-slide="${i}"
              onClick={() => activeDote(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
