'use client';

import { useBank } from '../_context/BankContext';

export default function SignUp() {
  const { handelVisible } = useBank();
  return (
    <section className="bg-[#37383D] sm:py-24 xs:py-14 border-b border-[#DDDDDD] text-center">
      <div className="md:max-w-3xl md:mx-auto">
        <h3 className="sm:font-medium lg:text-[40px] md:text-2xl xs:text-base xs:leading-6 md:leading-12 text-white mb-4 xs:mx-5">
          The best day to join Bankist was one year ago. The second best is
          today!
        </h3>
      </div>
      <button
        onClick={handelVisible}
        className="bg-primary lg:px-12 lg:py-6 sm:px-6 sm:py-4 rounded-[3rem] sm:text-base xs:text-xs xs:px-2 xs:py-1 font-semibold leading-8 text-black cursor-pointer duration-300 transition-all hover:bg-primary-darker"
      >
        Open your free account today!
      </button>
    </section>
  );
}
