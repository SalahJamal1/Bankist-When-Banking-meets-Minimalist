type ILINKS = { label: string; href: string };

type item = {
  img: {
    src: string;
    lazySrc: string;
  };
  header: string;
  text: string;
};
type IDATA = {
  title: string;
  color: string;
  hover: string;
  opacity: string;
};

type IDATASTR = { title: string; description: string };

export const items: item[] = [
  {
    img: {
      src: '/img/digital-lazy.jpg',
      lazySrc: '/img/digital.jpg',
    },
    header: '100% digital bank',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus.',
  },
  {
    img: { src: '/img/grow-lazy.jpg', lazySrc: '/img/grow.jpg' },
    header: 'Watch your money grow',
    text: 'Nesciunt quos autem dolorum voluptates cum dolores dicta fuga inventore ab? Nulla incidunt eius numquam sequi iste pariatur quibusdam!',
  },
  {
    img: {
      src: '/img/card-lazy.jpg',
      lazySrc: '/img/card.jpg',
    },
    header: 'Free debit card included',
    text: 'Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim eveniet consequatur odit quam quos possimus assumenda dicta fuga inventore ab.',
  },
];

export const footerLinks: string[] = [
  'About',
  'Pricing',
  'Terms of Use',
  'Privacy Policy',
  'Careers',
  'Blog',
  'Contact Us',
];
export const navLinks: ILINKS[] = [
  { label: 'Features', href: '#section--1' },
  { label: 'Operations', href: '#section--2' },
  { label: 'Testimonials', href: '#section--3' },
  {
    label: 'Open account',
    href: '#',
  },
];

export const data: IDATA[] = [
  {
    title: 'Instant Transfers',
    color: 'bg-primary',
    hover: 'bg-primary-darker',
    opacity: 'bg-primary-opacity',
  },
  {
    title: 'Instant Loans',

    color: 'bg-secondary',
    hover: 'bg-secondary-darker',
    opacity: 'bg-secondary-opacity',
  },
  {
    title: 'Instant Closing',

    color: 'bg-tertiary',
    hover: 'bg-tertiary-darker',
    opacity: 'bg-tertiary-opacity',
  },
];
export const dataStr: IDATASTR[] = [
  {
    title: 'Tranfser money to anyone, instantly! No fees, no BS.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Buy a home or make your dreams come true, with instant loans.',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'No longer need your account? No problem! Close it instantly.',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];
interface Testimonial {
  id: number;
  header: string;
  text: string;
  name: string;
  location: string;
  img: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    header: 'Best financial decision ever!',
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Accusantium quas quisquam non? Quas voluptate nulla minima
    deleniti optio ullam nesciunt, numquam corporis et asperiores
    laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
    id alias reiciendis, perferendis facere pariatur dolore veniam
    autem esse non voluptatem saepe provident nihil molestiae.`,
    name: 'Aarav Lynn',
    location: 'San Francisco, USA',
    img: '/img/user-1.jpg',
  },
  {
    id: 2,
    header: 'The last step to becoming a complete minimalist',
    text: `Quisquam itaque deserunt ullam, quia ea repellendus provident,
    ducimus neque ipsam modi voluptatibus doloremque, corrupti
    laborum. Incidunt numquam perferendis veritatis neque repellendus.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
    deserunt exercitationem deleniti.`,
    name: 'Miyah Miles',
    location: 'London, UK',
    img: '/img/user-2.jpg',
  },
  {
    id: 3,
    header: 'Finally free from old-school banks',
    text: `Debitis, nihil sit minus suscipit magni aperiam vel tenetur
    incidunt commodi architecto numquam omnis nulla autem,
    necessitatibus blanditiis modi similique quidem. Odio aliquam
    culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
    deleniti saepe aliquid quos inventore sequi.`,
    name: 'Francisco Gomes',
    location: 'Lisbon, Portugal',
    img: '/img/user-3.jpg',
  },
];
