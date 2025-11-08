'use client';
import { useBank } from '../_context/BankContext';
import OverLay from './OverLay';

export default function Modal() {
  const { visible, handelVisible, openMenu } = useBank();

  return (
    <>
      {visible ? (
        <>
          <div className="flex flex-col fixed left-[50%] top-[10%] bg-[#f3f3f3]  sm:max-w-[70%] md:max-w-[60%] text-black px-10 py-8 shadow-2xl z-30 -translate-x-[50%]">
            <button
              onClick={handelVisible}
              className="self-end text-4xl mb-8 cursor-pointer"
            >
              &times;
            </button>
            <h2 className="lg:text-3xl sm:text-2xl xs:text-[14px] mb-10 md:leading-12 xs:leading-5 font-semibold">
              Open your bank account <br />
              in just <span className="relative highlight">5 minutes</span>
            </h2>
            <form className="sm:grid sm:grid-cols-[1fr_2fr] sm:mx-[30px] items-center sm:gap-6 xs:gap-4">
              <label className="xs:block sm:text-base xs:text-xs font-semibold text-nowrap">
                First Name
              </label>
              <input
                className="bg-white text-base md:py-2.5 md:px-5 rounded-lg xs:px-2 py-1"
                type="text"
              />
              <label className="xs:block sm:text-base xs:text-xs font-semibold text-nowrap">
                Last Name
              </label>
              <input
                className="bg-white text-base md:py-2.5 md:px-5 rounded-lg xs:px-2 py-1"
                type="text"
              />
              <label className="xs:block sm:text-base xs:text-xs font-semibold text-nowrap">
                Email Address
              </label>
              <input
                className="bg-white text-base md:py-2.5 md:px-5 rounded-lg xs:px-2 py-1"
                type="email"
              />
              <button className="block text-base font-normal leading-8 bg-primary sm:px-6 sm:py-2 xs:px-2 rounded-[3rem] cursor-pointer duration-300 transition-all hover:bg-primary-darker col-[1/span_2] justify-self-center mt-5">
                Next step &rarr;
              </button>
            </form>
          </div>
          <OverLay />
        </>
      ) : openMenu ? (
        <OverLay />
      ) : null}
    </>
  );
}
