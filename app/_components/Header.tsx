'use client';
import logo from '@/public/img/logo.png';
import hero from '@/public/img/hero.png';
import Image from 'next/image';
import { useBank } from '../_context/BankContext';
import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../utils/helper';
import Link from 'next/link';

export default function Header() {
  const { handelVisible, openMenu, handelMenu } = useBank();
  const [show, setShow] = useState<number | null>(null);
  const [hide, setHide] = useState<boolean>(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = ([e]: IntersectionObserverEntry[]) => {
      if (!e.isIntersecting) setHide(true);
      else setHide(false);
    };

    const handelObserver = new IntersectionObserver(observer, {
      root: null,
      threshold: 0.15,
    });
    handelObserver.observe(ref.current);

    return () => handelObserver.disconnect();
  }, []);
  return (
    <header className="flex flex-col px-8 sm:min-h-screen xs:pb-8" ref={ref}>
      <nav
        className={`flex items-center justify-between sm:px-14 xs:px-4 py-6 h-24 w-full z-30
           ${
             !openMenu &&
             hide &&
             'bg-[#ffffffff] fixed left-0 transition-all duration-300 shadow-2xl'
           }`}
      >
        <Link href="/">
          <Image
            height={48}
            width={148}
            src={logo}
            id="logo"
            alt="logo"
            className="xs:h-10 xs:w-30 sm:h-12 sm:w-37"
          />
        </Link>
        <ul
          className={`flex items-center gap-10 lg:opacity-100 lg:visible lg:translate-x-0  ${
            openMenu && 'nav_mobile'
          }`}
        >
          {openMenu && (
            <button
              onClick={handelMenu}
              className="text-4xl cursor-pointer z-50 top-5 right-10 fixed"
            >
              {openMenu ? <span>&times;</span> : <span>&#9776;</span>}
            </button>
          )}
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                className={`block sm:text-base xs:text-xs font-medium leading-8 ${
                  link.href === '#' &&
                  'bg-primary sm:px-6 sm:py-2 xs:px-2 rounded-[3rem] cursor-pointer lg:duration-300 lg:transition-all hover:bg-primary-darker'
                }`}
                href={link.href}
                onMouseOut={() => setShow(null)}
                onMouseOver={() => setShow(i)}
                onClick={() => link.href === '#' && handelVisible()}
                style={{
                  opacity: show !== null && show !== i ? 0.5 : 1,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {!openMenu && (
          <button
            onClick={handelMenu}
            className="lg:hidden text-4xl cursor-pointer xs:block z-50"
          >
            <span>&#9776;</span>
          </button>
        )}
      </nav>

      <div className="lg:flex-1 xl:max-w-6xl lg:max-w-5xl mx-auto lg:grid lg:grid-cols-[3fr,1fr] xl:gap-15 lg:gap-10 lg:items-start lg:content-center lg:justify-center lg:justify-items-start xs:grid-cols-1 xs:space-y-3 xs:pt-10">
        <h1 className="block xl:text-6xl sm:text-4xl xs:text-xl lg:text-4xl font-extrabold xl:leading-[72px] lg:leading-[50px] text-[#444444] capitalize lg:text-start xs:text-center">
          When
          <span className="mx-4 relative highlight">banking</span>
          meets
          <br />
          <span className="highlight relative">minimalist</span>
        </h1>
        <h4 className="xl:text-2xl lg:text-base leading-11 font-semibold xs:text-center">
          A simpler banking experience for a simpler life.
        </h4>
        <a
          href="#section--1"
          className="block text-base text-primary font-light border-primary border-b-2 pb-1 lg:text-start lg:justify-self-start xs:text-center xs:justify-self-center"
        >
          Learn more
        </a>
        <Image
          src={hero}
          className="lg:w-full xs:w-2/3 lg:col-2 lg:row-[1/span_4]  xs:justify-self-center xs:mt-5 lg:-translate-y-32 xl:-translate-y-10"
          alt="Minimalist bank items"
        />
      </div>
    </header>
  );
}
