import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '../utils/helper';

export default function Footer() {
  return (
    <footer className="bg-[#37383D] sm:py-24 xs:py-14 text-center">
      <ul className="flex items-center justify-center text-white gap-10 mb-12 flex-wrap lg-mx-0 xs:mx-4">
        {footerLinks.map(link => (
          <li
            className="sm:text-base xs:text-xs leading-8 font-light text-[#eeeeee]"
            key={link}
          >
            <Link className="footer__link" href="#">
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <Image
        src="/img/icon.png"
        alt="Logo"
        height={50}
        width={50}
        className="mx-auto mb-12"
      />
      <p className="sm:text-base xs:text-xs leading-8 font-light text-[#eeeeee]">
        &copy; Copyright by{' '}
        <Link target="_blank" href="https://www.linkedin.com/in/salah-jamal/">
          Salah Abu-Farha
        </Link>
      </p>
    </footer>
  );
}
